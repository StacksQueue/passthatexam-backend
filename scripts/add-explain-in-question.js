const questions = require("./../explanation/actual-test-2018-prof-ed-wcateg/explanation.json");
const Question = require("./../models/Question");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

(async () => {
  await connectDB();
  const source = "actual-test-2018-prof-ed-wcateg";

  for (let question of questions) {
    let found = await delay(getQuestion(source, question.question));

    if (found) {
      let update = {
        explanation: question.explanation,
        // answer: question.answer
      };
      if (question.isChangedAnswer) update.answer = question.answer;

      await delay(updateQuestion(found._id, update));
      console.log("success updating ", found._id);
    } else console.log("not found", question.question);
  }
})();

async function updateQuestion(id, update) {
  return await Question.findOneAndUpdate(id, update);
}

async function getQuestion(source, question) {
  let query = {
    source,
    question,
  };
  return await Question.findOne(query).lean();
}

async function connectDB() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.DATABASE);
    console.log("database connected", process.env.DATABASE);
  } catch (err) {
    console.log(err);
  }
}

async function delay(fn, params) {
  return new Promise((resolve) => {
    setTimeout(async () => resolve(await fn), 50);
  });
}
