const questions = require("./../data/....READYYYY/ENGLISH-_GENERAL_EDUCATION/production.json");

(() => {
  let coverages = questions.map((q, ndx, arr) => {
    return {
        coverage: q.major[1],
        count: arr.filter(qts=> qts.major[1] == q.major[1]).length
    }
  });
  
  console.log(questions.length)
  coverages = coverages.filter((coverage, ndx, arr)=> ndx == arr.findIndex((el)=> coverage.coverage == el.coverage))
  console.log(coverages)
})();
