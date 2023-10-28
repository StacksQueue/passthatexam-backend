const questions = require("./../data/Reviewer/Reviewer - TLE Carpentry.json");
const Question = require("./../models/Question");
const Category = require("./../models/Category");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

(async () => {
  await connectDB();

  for (let question of questions) {
    // let found = await delay(getMajorByName(question.category));
    // question.category = found.map((x) => x._id);
    await delay(addQuestions(question));
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

async function getMajorByName(category) {
  let query = { name: { $in: category }, dis: true };
  return await Category.find(query).select("name tagName programBelong");
}

async function addQuestions(question) {
  try {
    let result = await Question.create({
      source: "Reviewer - TLE Carpentry",
      program: ["Education"],
      year: 2023,
      major: question.category? question.category: [],
      question: question.question,
      choices: question.choices,
      answer: question.answer,
      explanation: question.explanation ? question.explanation : "",
      verified: question.verified ? question.verified : false,
      dis: question.dis ? question.dis : true,
    });
    console.log("new questions created with id:", result._id);
  } catch (err) {
    console.log(err);
  }
}

async function delay(fn, params) {
  return new Promise((resolve) => {
    setTimeout(async () => resolve(await fn), 50);
  });
}
