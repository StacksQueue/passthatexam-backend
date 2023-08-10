const express = require("express");
const Questions = require("../models/Question");
const mongoose = require("mongoose");
const router = express.Router();

const ObjectId = mongoose.Types.ObjectId;

router.get("/", async (req, res) => {
  try {
    let { limit = 25 } = req.query;
    let major = Array.isArray(req.query.major)
      ? req.query.major
      : req.query.major
      ? [req.query.major]
      : ["Civil Service", "English"];
    let programs = Array.isArray(req.query.programs)
      ? req.query.programs
      : req.query.programs
      ? [req.query.programs]
      : ["Civil Service"];

    /**
     * since General Education | Professional Education | Civil Service
     * category are always in the major, we remove them for specific queries
     * of questions
     */
    let defaultmajors = [
      "Civil Service",
      "Professional Education",
      "General Education",
    ];

    let filtered_major = major.filter((x) => !defaultmajors.includes(x));
    major = filtered_major.length? filtered_major : major;

    let aggregateQuery = [
      {
        $match: {
          program: {
            $in: programs,
          },
          major: {
            $in: major,
          },
        },
      },
      {
        $sample: {
          size: Number(limit),
        },
      },
    ];

    let questions = await Questions.aggregate(aggregateQuery);

    res.json({ data: questions, message: "success", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
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
