/* Ternary Conditional Operator is A shorthand for simple if...else
Category	        Operators
===========         ==========
Ternary	condition   ? a : b
*/

let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);

//Equivalent to:
let result1;
if (age >= 20) {
    result1 = "Adult";
} else {
    result1 = "Minor";
}
console.log(result1)