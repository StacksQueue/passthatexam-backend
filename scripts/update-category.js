const questions = require("./nice.json");
const Question = require("./../models/Question");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

(async () => {
  await connectDB();

  for (let q of questions) {
    await Question.updateOne({ _id: q._id.$oid }, { major: q.category });
    console.log("done", q._id.$oid);
  }
  console.log("finish");
})();

async function connectDB() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DATABASE);
    console.log("database connected", process.env.DATABASE);
  } catch (err) {
    console.log(err);
  }
}

async function getQuestionByName(q) {
  return await Question.findOne({ question: q.question }).lean();
}

async function delay(fn, params) {
  return new Promise((resolve) => {
    setTimeout(async () => resolve(await fn), 50);
  });
}
