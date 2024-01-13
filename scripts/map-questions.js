const questions = require("./../data/PHYSICAL SCIENCE MAJOR/Physical-Science-Sept-2012_with-answer-1.doc · version 1.json");
const fs = require("fs").promises;

(async () => {
  const mapped = questions.map((q) => {
    return {
      number: q.number,
      question: q.question,
      choices: q.choices,
      answer: q.answer,
    };
  });

  fs.writeFile("mapped-questions.json", JSON.stringify(mapped));
})();
