const express = require("express");
const router = express.Router();
const Report = require("../models/Report");
const Questions = require("../models/Question");
const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

router.get("/", async (req, res) => {
  try {
    let { questionId = "", from = "", to = "", isDoneProcessed = false } = req.query;
    let query = {
      isDoneProcessed,
    };

    let populateQuery = [{ path: "questionId", select: "question choices answer explanation verified" }];

    if (questionId) query.questionId = questionId;
    if (from && to) query.createdAt = { $gte: new Date(from), $lt: new Date(to) };

    let reports = await Report.find(query).populate(populateQuery).lean();
    let filtered = reports.filter(
      (report) => report.questionId && (report.questionId.verified == false || report.questionId.verified == undefined)
    );
    res.json({ data: filtered, message: "success get", success: true });
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

router.patch("/:reportId", async (req, res) => {
  try {
    let reportId = req.params.reportId;
    let { updatedAnswer, explanation = "", dis } = req.query;
    let { isDoneProcessed = true } = req.body;

    let questionUpdateQuery = {
      verified: true,
    };

    if (explanation.length) questionUpdateQuery.explanation = explanation;
    if (dis == 'false') {
      console.log("hereee", dis);
      questionUpdateQuery.dis = false;
    }
    if (updatedAnswer) {
      questionUpdateQuery.answer = updatedAnswer;
      questionUpdateQuery.explanation = explanation;
    }

    let report = await Report.findById(reportId);
    let [q, updatedReports] = await Promise.all([
      Questions.findByIdAndUpdate(report.questionId, questionUpdateQuery),
      Report.updateMany({ questionId: report.questionId }, { isDoneProcessed }),
    ]);

    res.json({ data: updatedReports, message: "success patch", success: true });
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
