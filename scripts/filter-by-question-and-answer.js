const fs = require("fs");
const questions = require("./../data/passthatexam.questions.json");
const target_q = require("./../data/Civil Service Exam Complete Reviewer Philippines 2017/Civil Service Exam Complete Reviewer Philippines 2017.json");
const reports = require("./../data/passthatexam.reports.json");

// const recategorize_q = require("./Civil Service Exam Complete Reviewer Philippines 2017 - recategory .json");
(() => {
  let reported = [...new Set(reports.map((x) => x.questionId))];
  let filtered = questions.filter((q) =>
    target_q.some(
      (target) =>
        target.answer == q.answer &&
        target.question == q.question &&
        q.source == "Civil Service Exam Complete Reviewer Philippines 2017" &&
        !reported.includes(q._id.$oid)
    )
  );

  // console.log(filtered.length);
  // fileWrite(
  //   filtered,
  //   "Civil Service Exam Complete Reviewer Philippines 2017.json"
  // );

  /**
   * re categorize
   */
  let recategorized_questions = recategorize(target_q, filtered);
  fileWrite(recategorized_questions, "haha.json");
})();

function recategorize(arr, target) {
  let final = [];
  target.forEach((q) => {
    let found = arr.filter((x) => x.question == q.question)[0];
    if (found) {
      q.major = found.category;
      console.log({ haha: q.category, huhy: found.category });
    }

    final.push(q);
  });

  return final;
}

function fileWrite(data, filename) {
  fs.writeFile(filename, JSON.stringify(data), "utf8", function (err) {
    if (err) throw err;
    console.log("write complete");
  });
}
