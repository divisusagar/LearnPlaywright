/* Compares two values, returns a boolean
Category	        Operators
===========         =========================
Comparison	        == === != !== > < >= <=
*/

console.log(5 == "5");  // true     loose equality (type coercion)
console.log(5 == '5');  // true     loose equality (type coercion)
console.log(5 === "5"); // false    strict equality (no coercion)
console.log(5 != "5");  // false    loose not-equal
console.log(5 !== "5"); // true     strict not-equal
console.log("=======")
console.log(5 > 3);       // true
console.log(5 < 3);       // false
console.log(5 >= 5);      // true
console.log(5 <= 4);      // false