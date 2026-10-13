/* Arrow Functions:
An arrow function is a shorter syntax for writing function expressions
*/

// 1. Basic Syntax : Regular vs Arrow 
// Regular function expression
const add1 = function (a, b) {
    return a + b ;
};
console.log(add1(5, 10));

// Arrow function
const add2 = (a, b) => { 
    return a + b;
}
console.log(add2(15,10));

// 2. Shorter forms
// Implicit returns i.e. One expression, no {}, no return
// * if the body is a single expression, it will returned automatically
// Syntax:- (a, b) => expression
const add3 = (a, b) => a + b;
console.log(add3(100,200));


// One Parameter: parantheses are option
// Syntax: n => expression OR (n) => expression
const square =  n => n * n;
const square2 = (n) => n * n; // also fine (many style guides prefer this)
console.log(square(5));
console.log(square2(7));

// No parameters: parantheses are required
// Syntax:- () => expression
const greet = () => console.log("Hello Greet");
greet();

// Multiple statements: {} and an explicit return are needed
// Syntax:- (a, b) => {...; return value;}
const calc = (a, b) => {
    const sum = a + b;
    return sum * sum ;
}
console.log(calc(7,9));

// Returning an object literal: wrap it in ( )
//Syntax:- () => ({key: value})
const makeUser = name1 => ({name: name1, active: 'true'});
const user1 = makeUser("Susagar");
const user2 = makeUser("Pavan");
console.log(user1);
console.log(user2);

const names = ["Venkatesh", "Rajesh", "Siva"];
const users = names.map(makeUser);
console.log(users)
