/* Performs Mathematical Calculations
Category	        Operators
===========         =========================
Arithmetic	        + - * / % ** ++ --
*/

let a = 10, b = 3;
console.log(a + b);   // 13   addition
console.log(a - b);   // 7    subtraction
console.log(a * b);   // 30   multiplication
console.log(a / b);   // 3.333...  division
console.log(a % b);   // 1    modulus (remainder)
console.log(a ** b);  // 1000 exponentiation (a to the power b)

let c = 5;
console.log(c++);     // 5 (prints, THEN increments) → c is now 6
console.log(++c);     // 7 (increments FIRST, then prints)
console.log(c--);     // 7 (prints, THEN decrements) → c is now 6
console.log(--c);     // 5 (decrements first, then prints)

console.log("10" +3);    // "103"  → number 103 becomes a string, then concatenated
console.log("10" -3);    // 7      → string "7" becomes a number here instead
console.log("10" * 3);   // 30     → string become number
console.log("10" / 3);   //  3.33  -> string become number
console.log("10" % 3);   //  1     -> string become number and remainder is printed
console.log("10" ** 3);  // 1000   -> string becomes number and exponentiation is printed

let evenNum = 12;
let oddNum = 13;
console.log(evenNum % 2);   // N % 2 Remainder 0 = Even
console.log(oddNum % 2);    // N % 2 Remainder 1 = Odd