const questions = require("./../data/passthatexam.questions.json");
const new_q = require("./../data/GENERAL EDUCATION 1-250 Items With Answers/questions.json");

(async () => {
  new_q.forEach((question) => {
    let similars = getSimilarQuestions(question.question, questions);
    if (similars.length) {
      console.log(similars.map((x) => x.question));
      console.log(question.question);
      console.log("\n");

    }
  });
  // let similars = getSimilarQuestions(
  //   "Among the not-easily-observable skills are cognitive abilities. This is because they are",
  //   questions
  // );
  // console.log(similars.map((x) => x.question));
})();

function getSimilarQuestions(target, arr) {
  return arr.filter((question) => isSimilarQuestion(question.question, target));
}

function isSimilarQuestion(question, target) {
  const qwords = question.split(" ");
  const twords = target.split(" ");
  const divider = twords.length;

  const similar = twords.filter((tword) =>
    qwords.some((qword) => qword.includes(tword))
  );

  return similar.length / divider > 0.8 ? true : false;
}
