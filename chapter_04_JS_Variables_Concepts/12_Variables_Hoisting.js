/* JS Engine
   LINE BY LINE, , JIT Compilation

Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope (function or block) before the code actually runs — during a phase called the "compilation" or "creation" phase, which happens before execution.

JavaScript scans your code first, sets aside memory for variables/functions it finds, and then runs the code line by line.

IMP: Only the declaration is hoisted, not the initialization (the assigned value). The value assignment still happens at the exact line you wrote it.
*/

/*
Note: 
With let/const, JavaScript stops you immediately and tells you exactly where the problem is, which makes debugging much easier. 
With var, especially valuable as you write more automation/test scripts where a silent undefined could cause a test to pass or fail incorrectly without you noticing why.

var skips the TDZ entirely (hoisted + auto-set to undefined). Both let and const go through the exact same TDZ mechanism — the only thing that differs between let and const is whether you're allowed to reassign the variable after it's been declared, not how it behaves before.

*/

// ####################################################################################

console.log(x);
var x = 5;
console.log(x);

/*
What JavaScript actually does internally (conceptually):

var x;           // declaration hoisted to the top, auto-initialized as undefined
console.log(x);  // undefined
x = 5;           // assignment stays in place
console.log(x);  // 5
*/

// ####################################################################################

// console.log(y);
// let y = 10;

/* 
---- Compilation phase ----
let y;  → hoisted, but NOT usable yet — sits in TDZ (Temporal Dead Zone)
(no value assigned, not even undefined)

---- Execution phase ----
console.log(y);
// JS engine checks: "Is y declared in this scope?" → Yes.
// "Has y's declaration line been executed yet?" → No, still in TDZ.
// Result: throws "ReferenceError: Cannot access 'y' before initialization" immediately, execution stops here.

let y = 10;
// This line never runs — the error above already stopped the script.

*/

// ####################################################################################

// console.log(z);
// const z = 10;



