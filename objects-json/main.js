function assert(b) {
    if(!b) {
        throw new Error(b);
    }
}

let person = {
    id:3,
    firstName: "Ray",
    lastName: "Loman"
}

// person is now a so-called JSON - object

// the Law
// 1. Numbers can be without quotes, string must we with apostrofs or quote
// 2. the Keys can be with or without Quotes

// later ... you will use Postman for sending a JSON object
// later ... then you will have to quote in the keys also

console.log(person.id);

assert(3 === person.id)




