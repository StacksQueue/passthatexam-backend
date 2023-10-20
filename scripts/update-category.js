const questions = require("./../..refactor-category/Civil Service Exam Complete Reviewer Philippines 2017.json");
// const questions = require("./../..refactor-category/Phil CSE Complete Reviewer 2019.json");
const Question = require("./../models/Question");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

(async () => {
  await connectDB();

  for (let q of questions) {
    let found = await delay(getQuestionByName(q));

    if (found) {
      console.log("found");
      await Question.updateOne({ _id: found._id }, { major: q.category });
    } else console.log(q.question);
  }
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
