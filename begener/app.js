const fs = require("fs");
const lodash = require("lodash");
fs.readFile("./data/file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
  const wordsNum = lodash.words(data);
  console.log(wordsNum.length);
});
