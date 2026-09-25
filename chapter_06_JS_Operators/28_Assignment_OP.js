/* Assign values to variables, often combines with an operation.

Category	        Operators
===========         =========================
Assignment	        = += -= *= /= %= **=

*/

let x = 10;
x += 5; console.log(x);     // same as x = x + 5    -> x = 15
x -= 3; console.log(x);     // same as x = x - 5    -> x = 12
x *= 2; console.log(x);     // same as x = x * 2    -> x = 24
x /= 4; console.log(x);     // same as x = x / 4    -> x = 6
x %= 4; console.log(x);     // same as x = x % 4    -> x = 2
x **= 3; console.log(x);    // same as x = x ** 3   -> x = 8

// += operator can also used for string concat
let user = "susagar";
user += " divi";
console.log(user);