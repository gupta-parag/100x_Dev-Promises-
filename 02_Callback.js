function returnPromise(){
    let p = new Promise(function(resolve){
        setInterval(function(){
                resolve()
        }, 2000)
    })
    return p
}

// Returns a Pending promise
console.log(returnPromise()) ; 

let k = returnPromise();
k.then(function(){
    console.log("Promise is resolved")
    console.log(k)
})

console.log("Passing Data through Resolve function")
let j = returnPromise();
j.then(function(data){
    console.log("Promise is resolved")
    console.log(j)
    console.log(data)
})