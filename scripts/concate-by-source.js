const questions = require("./../data/passthatexam.questions.json");
const fs = require("fs");

(() => {
  let source = "BEED-PROF-ED-xxx(1-150)";
  let filtered = questions.filter((q) => q.source == source);
  fileWrite(filtered, source+".json");

  console.log(filtered.length);
})();

function fileWrite(data, filename) {
  fs.writeFile(filename, JSON.stringify(data), "utf8", function (err) {
    if (err) throw err;
    console.log("write complete");
  });
}
