const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tagName: {
    type: String,
  },
  programBelong: {
    type: [String],
  },
  dis: {
    type: Boolean,
    default: true,
  },
});
