const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const questionSchema = mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  program: {
    type: [String],
  },
  year: {
    type: Number,
  },
  major: {
    type: [String],
    default: [],
    required: true
  },
  question: {
    type: String,
    required: true
  },
  choices: {
    type: [String],
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  dis: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("question", questionSchema);

