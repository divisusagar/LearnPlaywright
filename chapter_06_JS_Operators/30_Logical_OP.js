/* Combine or invert boolean expression
Category	        Operators
===========         ==========
Logical	            &&  ||  !
                    AND OR  
*/

console.log(true && false);     // false
console.log(true || false);     // true
console.log(!true);             // false
console.log(!false);            // true
console.log("=======")

/* Rule 1: || (OR) - stops at first truthy value
console.log(A || B);
* if A is truthy, JS never ever looks at B - it just returns A
* if A is false, JS moves on and returns B - whatever B is evaluated or not
* This is why || is commonly used for fallback/default values
* Falsy values in JS : false, 0, "", null, undefined, NaN
*   Limiation with Falsy value 0 : eventhough 0 is valid number, JS treated as Falsy, hence to resolve
*   it ?? operator is introduced
*/
let A1 = "susagar"
console.log(A1 || "Guest")

let A2 = null;
console.log(A2 || 'Guest-null');

let A3 = undefined;
console.log(A3 || 'Guest-undefined');

let A4 = 0;
console.log(A4 || "Guest-0");

let A5 = "";
console.log(A5 || "Guest-EmptyDoubleQuotes");

let A6 = NaN;
console.log(A6 || "Guest-NaN");

console.log("=======")

/* Rule 2: && (AND) - stops at the first falsy value
console.log(A && B);
* if A is falsy, JS never looks at B - just returns A
* if A is truthy, JS moves on and evaluates/returns B
* This is why && is commonly used as a "run this only if condition is true" - it is a compact substitute for a single-line if statement
*/
let isLoggedIn1 = true;
isLoggedIn1 && console.log("Welcome Truthy")

let isLoggedIn2 = false;
isLoggedIn2 && console.log("Welcome Falsy");

if(isLoggedIn1){
    console.log("Welcome Again");
}

console.log("=======")
let A22 = null;
console.log(A22 && 'Guest-null');

let A33 = undefined;
console.log(A33 && 'Guest-undefined');

let A44 = 0;
console.log(A44 && "Guest-0");

let A55 = "";
console.log(A55 && "Guest-EmptyDoubleQuotes");

let A66 = NaN;
console.log(A66 && "Guest-NaN");

console.log("=======")
