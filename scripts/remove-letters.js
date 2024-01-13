const questions = require("./../data/");
const fs = require("fs");

(() => {
  const regex = /^[a-zA-Z]\.\s+/gm;
  // const regex = /^[a-zA-Z]\)\s+/gm;

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
