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
      : ["648867e36456d5a32e13b416", "648869996456d5a32e13b425"];

    major = major.map((x) => new ObjectId(x));
    let aggregateQuery = [
      {
        $match: {
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
