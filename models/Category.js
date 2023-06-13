const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
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
    },
    programBelong: {
      type: [String],
    },
    dis: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", categorySchema);
