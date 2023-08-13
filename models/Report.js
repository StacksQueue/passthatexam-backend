const mongoose = require("mongoose");

const reportSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    questionId: {
      type: String,
      required: true
    },
    remarks: {
      type: String,
    },
    isDoneProcessed: {
      type: Boolean,
      default: false,
    },
    dis: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("report", reportSchema);
