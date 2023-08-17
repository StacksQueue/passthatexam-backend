const express = require("express");
const router = express.Router();
const Report = require("../models/Report");

router.get("/", async (req, res) => {
  try {
    let {
      questionId = "",
      from = "",
      to = "",
      isDoneProcessed = false,
    } = req.query;
    let query = {
      isDoneProcessed,
    };

    let populateQuery = [
      {path: "questionId", select: 'question choices answer'}
    ]

    if (questionId) query.questionId = questionId;
    if (from && to)
      query.createdAt = { $gte: new Date(from), $lt: new Date(to) };

    let reports = await Report.find(query).populate(populateQuery).lean();
    res.json({ data: reports, message: "success get", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

router.post("/", async (req, res) => {
  try {
    let { questionId, type, remarks, isDoneProcessed = false } = req.body;
    let found = await Report.find({ questionId, isDoneProcessed: true });
    if (found && found.length) isDoneProcessed = true;
    await Report.create({ questionId, type, remarks, isDoneProcessed });
    res.json({ data: null, message: "success post", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

router.patch("/:questionId", async (req, res) => {
  try {
    let questionId = req.params.questionId;
    let { isDoneProcessed = true } = req.body;
    let result = await Report.updateMany({ questionId }, { isDoneProcessed });

    res.json({ data: result, message: "success patch", success: true });
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
