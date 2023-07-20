const mongoose = require("mongoose");

const programSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tagName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: [],
    required: true
  },
  dis: {
    type: Boolean,
    default: true,
  },
});
