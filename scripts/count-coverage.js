const questions = require("./../data/passthatexam.questions.json");

(() => {
  let filtered = questions.filter((x) =>
    ["Pre-board-Exams-in-Gen-ed-answers", "LETREVIEW2016POSTTESTINGENERALEDUCATIONSEPTEMBER18,2016"].includes(x.source)
  );
  console.log(filtered.length)
  let coverages = filtered.map((q, ndx, arr) => {
    return {
      coverage: q.major[1],
      count: arr.filter((qts) => qts.major[1] == q.major[1]).length,
    };
  });

  // console.log(questions.length);
  console.log(questions.filter(x=> x.major[1] == undefined))
  coverages = coverages.filter((coverage, ndx, arr) => ndx == arr.findIndex((el) => coverage.coverage == el.coverage));
  console.log(coverages);
})();
