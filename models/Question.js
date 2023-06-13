const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  program: {
    type: String,
  },
  year: {
    type: Number,
  },
  major: {
    type: [String],
    default: [],
  },
  question: {
    type: String,
  },
  choices: {
    type: [String],
  },
  answer: {
    type: String,
  },
  dis: {
    type: Boolean,
    default: true
  }
});
