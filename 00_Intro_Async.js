// run `node index.js` in the terminal
const fs = require('fs');

console.log(`Hello Node.js v${process.versions.node}!`);

fs.readFile('data/a.txt', 'utf-8', function (err, data) {
  console.log(data);
});

console.log('Hello - 1');

setInterval(function () {
  console.log('Hello from Timeout_1');
}, 1000);

fs.readFile("data/b.txt", "utf-8", function(err,data){
  console.log(data)
})

fs.readFile("data/c.txt", "utf-8", function(err,data){
  console.log(data)
})
