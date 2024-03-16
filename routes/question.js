const express = require("express");
const Questions = require("../models/Question");
const mongoose = require("mongoose");
const router = express.Router();

const ObjectId = mongoose.Types.ObjectId;

router.get("/", async (req, res) => {
  try {
    let { limit = 25, program = "Education", major = "", coverage = [] } = req.query;
    coverage = Array.isArray(coverage) ? coverage : [coverage];

    let query = { program, dis: true };

    if (coverage.length) query["major.1"] = { $in: coverage };
    else if (major) query["major.0"] = major;

    let aggregateQuery = [{ $match: query }, { $sample: { size: Number(limit) } }];

    let questions = await Questions.aggregate(aggregateQuery);

    res.json({ data: questions, message: "success", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

router.get("/groupbycategory", async (req, res) => {
  try {
    let { page = 1, limit = 25, major = [], main = ["General Education"] } = req.query;
    major = Array.isArray(major) ? major : [major];
    main = Array.isArray(main) ? main : [main];
    console.log(major);

    let query = { dis: true };
    if (major.length) query.major = { $in: major };

    let aggregateQuery = [
      {
        $match: {
          "major.0": {
            $in: main,
          },
        },
      },
      {
        $unwind: {
          path: "$major",
        },
      },
      {
        $group: {
          _id: "$major",
          data: {
            $push: {
              _id: "$_id",
              question: "$question",
              choices: "$choices",
              answer: "$answer",
              explanation: "$explanation",
            },
          },
        },
      },
      {
        $project: {
          _id: 1,
          data: {
            $slice: ["$data", Number(limit) * (page - 1), Number(limit)],
          },
        },
      },
      {
        $match: {
          _id: {
            $in: major,
          },
        },
      },
      {
        $project: {
          coverage: "$_id",
          question: "$data",
          _id: 0,
        },
      },
    ];

    let data = await Questions.aggregate(aggregateQuery);

    res.json({ data: data, message: "success", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

router.get("/search2", async (req, res) => {
  try {
    let { page = 1, limit = 25, keyword = "", programs = [], sort = "asc" } = req.query;
    let query = {
      $or: [
        { major: { $regex: keyword, $options: "i" } },
        { question: { $regex: keyword, $options: "i" } },
        { choices: { $regex: keyword, $options: "i" } },
        { answer: { $regex: keyword, $options: "i" } },
        { explanation: { $regex: keyword, $options: "i" } },
        { source: keyword },
      ],
      dis: true,
    };

    if (mongoose.isValidObjectId(keyword)) query["$or"].push({ _id: keyword });

    if (programs.length) query.program = { $in: programs };

    let [questions, total] = await Promise.all([
      Questions.find(query)
        .limit(limit)
        .skip(limit * (page - 1))
        .sort({ _id: sort }),
      Questions.find(query).count(),
    ]);

    // eg. page = 2, total = 1
    if (total && !questions.length) questions = await Questions.find(query).limit(limit);

    res.json({
      data: questions,
      total: total,
      message: "success get search questions",
      success: true,
    });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

router.get("/search", async (req, res) => {
  try {
    /**
     * query: {$text: {$search: "code of the ethic"}}
     * project: {score: {$meta: "textScore"}}
     * sort: {score: {$meta: "textScore"}}
     */
    let { page = 1, limit = 25, keyword = "", programs = [], sort = "desc" } = req.query;
    let query = { $text: { $search: keyword } };
    let project = { score: { $meta: "textScore" } };
    let [questions, total] = await Promise.all([
      Questions.find(query, project)
        .limit(limit)
        .skip(limit * (page - 1))
        .sort({ score: { $meta: "textScore" } }),
      Questions.find(query).count(),
    ]);
    res.json({ data: questions, success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

router.get("/program", async (req, res) => {
  try {
    let programs = await Questions.distinct("program");
    res.json({ data: programs, message: "success get program", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

router.get("/coverage", async (req, res) => {
  try {
    let aggregateQuery = [
      {
        $project: {
          program: 1,
          major: { $arrayElemAt: ["$major", 0] },
          coverage: {
            $slice: ["$major", 1, { $size: "$major" }],
          },
        },
      },
      {
        $unwind: { path: "$coverage" },
      },
      {
        $group: {
          _id: "$major",
          program: {
            $addToSet: "$program",
          },
          coverage: {
            $addToSet: "$coverage",
          },
        },
      },
      {
        $unwind: { path: "$_id" },
      },
      {
        $unwind: { path: "$program" },
      },
      {
        $unwind: { path: "$program" },
      },
      {
        $project: {
          major: "$_id",
          _id: 0,
          program: 1,
          coverage: 1,
        },
      },
    ];
    let coverages = await Questions.aggregate(aggregateQuery);
    res.json({
      data: coverages,
      message: "success get program",
      success: true,
    });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

router.get("/category", async (req, res) => {
  try {
    let { search = "" } = req.query;
    let programs = Array.isArray(req.query.program)
      ? req.query.program
      : req.query.program
      ? [req.query.program]
      : ["Civil Service"];

    let categories = await Questions.find({
      program: { $in: programs },
      $or: [{ major: { $regex: search, $options: "i" } }],
      dis: true,
    }).distinct("major");
    res.json({
      data: categories,
      message: "success get program",
      success: true,
    });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

router.post("/", async (req, res) => {
  try {
    res.json({ data: null, message: "success post", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    res.json({ data: null, message: "success patch", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json({ data: null, message: "success delete", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

module.exports = router;
