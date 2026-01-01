const fs = require("fs")

function pgReturnFile(){
    return new Promise(function(resolve){
        fs.readFile("b.txt", "utf-8", function(err, data){
            resolve(data)
        });
    })
}

function onDone(data){
    console.log(data)
}

pgReturnFile().then(onDone)