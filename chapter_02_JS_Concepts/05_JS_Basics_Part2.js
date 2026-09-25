// Implicit coercion (JS does this automatically)
console.log("5" + 3);      // "53"   → number 3 becomes a string, then concatenated
console.log("5" - 3);      // 2      → string "5" becomes a number here instead
console.log("5" * "2");    // 10     → both strings become numbers
console.log(1 + true);     // 2      → true becomes 1
console.log(1 + false);    // 1      → false becomes 0

console.log("5" == 5);   // true  — coercion makes these "equal"
console.log("5" === 5);  // false — strict equality, no coercion, different types