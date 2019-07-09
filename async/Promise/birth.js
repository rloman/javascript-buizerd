function getAge(current, birth) {
    if(current - birth >0) {
        return Promise.resolve(current-birth);
    }
    else {
        return Promise.reject("Current should be larger then birth");
    }
}

// voorbeeld van een inline anonymous function

let prompt = require("prompt")
let promise = getAge(2019, 1968);
promise.then(function(number) {
    console.log("Success: "+ number)
}, function(error) {
    console.log("Fail: "+error);
})

getAge(1968, 2019).then(function(number) {
    console.log("Success: "+ number)
}, function(error) {
    console.log("Fail: "+error);
})