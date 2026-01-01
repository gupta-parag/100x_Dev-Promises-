const fs = require("fs")
let ID = 0;
let functionCall = 0;

function pgReturnFile(){

    functionCall += 1;
    console.log(`I am from the number ${functionCall} return file function execution`) ; 
 
    return new Promise(function(resolve){
        
        console.log("Inside Promise")
        fs.readFile("data/b.txt", "utf-8", function(err, data){
            ID += 1;
            console.log(`I am from the number ${ID} callback`) ; 
            console.log("Before Resolve")
            resolve(data)
            console.log("Not sure if this will run")
            console.log("Data is here : ", data)
            
        });
    })
}

function onDone(data){
    console.log(data)
}

pgReturnFile().then(onDone)
console.log(pgReturnFile())