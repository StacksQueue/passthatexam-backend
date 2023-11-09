const questions = require("./../data/soc.sci (jul 2017)/questions.json");
const fs = require("fs");

(() => {
  let no_letters = questions.reduce((acc, curr, ndx, arr) => {
    curr.explanation = curr.explanation.replace("This answer is correct as ", "");
    curr.explanation =
      curr.explanation.charAt(0).toUpperCase() + curr.explanation.slice(1);
    acc.push(curr);
    return acc;
  }, []);

  fs.writeFile(
    "improved-explanation.json",
    JSON.stringify(no_letters),
    "utf8",
    () => {
      console.log("done");
    }
  );
})();
