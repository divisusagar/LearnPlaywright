/* Callback function: examples from simple to practical
Definition: a callback is a function, you pass as an argument to another function, so that function can be call it later
*/

/*
1. Functions are values, so they can be passed around
In JS a function can be stored in a variable and handed to another function, just like a number or string
*/
function sayHello(){
    console.log("Hello!!..");
}
//  sayHello();
//  sayHello();

function runTwice(fn) { // fn is a parameter that will receive a function
    fn();
    fn();
}
runTwice(sayHello); // pass the function itself, no parantheses


// 2. Callback with an arrow function (inline)
function runTwice2(fn) { // fn is a parameter that will receive a function
    fn();
    fn();
}
runTwice2(() => console.log("Hi from Arrow Function")); 

// 3. Callback that receives data
// The outer function can pass value into your callback
function getUser(callback) {
    const user = {name: "Priya", role: "QA"};
    callback(user);
}

getUser((user) => {console.log(`${user.name} is a ${user.role}`)});