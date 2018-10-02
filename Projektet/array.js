

var fs = require("fs");
var words = fs.readFileSync("words.json");
//var words = loadJSON("words.json");

console.log(words);
