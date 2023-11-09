const questions = require("./../data/passthatexam.questions.json");
const new_q = require("./../data/LET philosophy (may 2019)/LET philosophy (may 2019).json");
// const new_q = require('./removed-duplicate.json');
const fs = require('fs');
(async () => {
  new_q.forEach((question) => {
    let similars = getSimilarQuestions(question.question, questions);
    if (similars.length && question.dis != false) {

      console.log(similars.map((x) => x.question));
      console.log(question.dis != false)
      console.log(question.question);
      console.log("\n");
      question.dis = false;
    }
  });
  // let similars = getSimilarQuestions(
  //   "Among the not-easily-observable skills are cognitive abilities. This is because they are",
  //   questions
  // );
  // console.log(similars.map((x) => x.question));

  fs.writeFile('removed-duplicate.json', JSON.stringify(new_q), 'utf8', ()=>{
    console.log('done')
  })
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
