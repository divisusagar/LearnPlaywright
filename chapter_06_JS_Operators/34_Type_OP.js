/*
Category	        Operators
===========         =========================
Type checking	    typeof, instanceof, in
*/

console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof NaN);        // "number"
console.log(typeof null);       // "object"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof [1,2,3]);     // "object"  (arrays are technically objects)
console.log(typeof function(){}); // "function"

let arr = [1, 2, 3];
console.log(3 in arr);          // false — checks if index/key exists (index 3 doesn't exist in a 3-item array: 0,1,2)
console.log(2 in arr);
console.log(arr instanceof Array); // true — checks the prototype chain