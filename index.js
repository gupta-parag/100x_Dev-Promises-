// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
const fs = require('fs');

fs.readFile('a.txt', 'utf-8', function (err, data) {
  console.log(data);
});

console.log('Hello - 1');

setInterval(function () {
  console.log('Hello from Timeout_1');
}, 1000);

fs.readFile("b.txt", "utf-8", function(err,data){
  console.log(data)
})


fs.readFile("c.txt", "utf-8", function(err,data){
  console.log(data)
})
