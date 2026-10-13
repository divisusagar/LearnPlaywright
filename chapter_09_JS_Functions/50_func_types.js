// 1. Default Function

function printString(str='Hello'){
    console.log('Print :'+ str);
}
printString(); // without parameters, so default value is considered
printString('Susagar Divi'); // with parameters, so value is re-assigned from 'Hello' to 'Susagar Divi'


/* 2. Function Expression = function stored inside a variable
    Usage: We are calling Recursive function scenario, then we should go for function expression
*/
let addition = function addNums(a,b) {
    console.log(a+b);
}
addition(2,3);

/* Anonymous Function : A function without a name is called Anonlymous Function
                        It has to be stored into a variable or it should part of another function 
function(a,b) {
    console.log(a+b); 
}                        
*/

// additionFun(6,4);
        /* Phase 1: Compilation
        Memory:
        additionFun → <TDZ, locked>    (let is hoisted, but NOT given undefined)
        Phase 2: Execution
        Line 1: additionFun(6,4);
                → look up "additionFun" in memory → still locked (TDZ)
                → ReferenceError: Cannot access 'additionFun' before initialization

        Line 2: never reached
        */

let additionFun = function(a,b) {
    console.log(a+b); 
}
additionFun(6,4);
    /* 
    Phase 1: Compilation (before any line runs)

    JS scans the file and sets up memory:

    Memory:
    additionFun → <TDZ, locked>     (let is hoisted, but locked until its line runs)
    Phase 2: Execution (runs line by line)

    Line 1-3: let additionFun = function(a,b) {...}

    JS reaches this line and does two things:

    Unlocks additionFun (exits the TDZ)
    Stores the function inside it
    Memory:
    additionFun → function(a,b) { console.log(a+b); }

    Just like before, the function is only stored here. The code inside it does not run yet.

    Line 4: additionFun(6,4);

    JS looks inside additionFun, finds the real function, and runs it with the values a = 6 and b = 4.

    javascript
    console.log(6+4);     // → 10
    */

/* 3. Arrow function:-
    Syntax: () => {}
    Usage: Shoud be shored into a variable OR we can pass as a parameter to another function
*/
let productOfNumbers = (num1, num2) => {
    return num1*num2;
}
console.log(productOfNumbers(5,7));

// shorthand form
let productOfNumbers1 = (num1, num2) => num1*num2;
console.log(productOfNumbers1(5,6));

// if we have one parameter, then we can skip paranthesis
let squareOfNumbers = num1 => num1*num1;
console.log(squareOfNumbers(7));

/* 4. Anonymous Function
A function with no name. Usally passed directly as a value or callback
*/
const greet = function () {console.log("I'm Anonymous Function")};
greet();
setTimeout(function (){
    console.log("Anonymous Function")
},3000);

/* 5. Named Function Expressions
A function expression that also has a name. The name is only visible inside the function itself,
and makes debugging and recursive easier (the name shows up in stack traces) 
*/
const factorial = function fact(n) {
    return n <= 1 ? 1 : n * fact(n-1);
}
console.log(factorial(5));


/* Function Patterns:
    * Immediate Function
    * Callback function
    * Return a function from a function
*/

/* 6. Immediate Invoke Function Expression: 
A function that runs immediately where it's defined, without being called separtely
Put the anonymous function inside ( ) and ends with ();
*/
(function (){
    console.log('Runs right away')
})();


(() => {
    console.log("Arrow IIFE")
})();


/*
Callback function: function passed an argument to another function

*/

function mainfunction(message, callback) {
    console.log(message)
    callback(15,3);
}

function divisionOfNumbers(num1, num2) {
    console.log(num1/num2);
}
function sumOfNumbers(num1, num2) {
    console.log(num1 + num2);
}

mainfunction('Do Division', divisionOfNumbers)
mainfunction('Do Addition', sumOfNumbers)


