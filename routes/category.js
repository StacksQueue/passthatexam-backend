const express = require("express");
const Category = require("../models/Category");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.json({ data: null, message: "success", success: true });
  } catch (err) {
    res.json({ data: null, message: err.message, success: false });
  }
});

router.post("/", async (req, res) => {
  try {
    await Category.create(req.body);
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
