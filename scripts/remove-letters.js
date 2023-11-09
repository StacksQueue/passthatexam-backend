const questions = require("./../data/soc.sci (jul 2017)/questions.json");
const fs = require("fs");

(() => {
  // const regex = /^[a-d]\.\s+/gm;
  const regex = /^[A-D]\)\s+/gm;

  let no_letters = questions.reduce((acc, curr, ndx, arr) => {
    curr.answer = curr.answer.replace(regex, "");
    curr.choices = curr.choices.map((choice) => choice.replace(regex, ""));
    acc.push(curr);
    return acc;
  }, []);

  fs.writeFile("no-letters.json", JSON.stringify(no_letters), "utf8", () => {
    console.log("done");
  });
})();
