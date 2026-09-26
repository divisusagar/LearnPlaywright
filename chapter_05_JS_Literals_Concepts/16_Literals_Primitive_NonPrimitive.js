// 1. Number Literals
let a = 100;          // Integer
let b = 3.14;         // Floating-point / decimal
let c = 1.5e3;        // Exponential notation → 1500
let d = 0b1010;       // Binary → 10
let e = 0o17;         // Octal → 15
let f = 0xFF;         // Hexadecimal → 255
let g = 123n;         // BigInt (for very large numbers) — note the "n" suffix
let million = 1e6;
let tiny = 1.5e-4;
console.log("1. Number Literals");
console.log(a, b, c, d, e, f, g, million, tiny)
console.log(typeof(a), typeof(b), typeof(c), typeof(d), typeof(e), typeof(f), typeof(g), typeof(million), typeof(tiny));

console.log("Number.MAX_VALUE : ",Number.MAX_VALUE);
console.log("Number.MAX_SAFE_INTEGER : ",Number.MAX_SAFE_INTEGER);
let numberMaxSafeIntegerPlus1 = 9007199254740998;
console.log("numberMaxSafeIntegerPlus1 :", numberMaxSafeIntegerPlus1);

// 2. String Literals
let a1 = 'Single quotes';
let b1 = "Double quotes";
let c1 = `Template literal — allows ${a} interpolation and multi-line`;
console.log("2. String Literals");
console.log(a1, b1, c1);
console.log(typeof(a1), typeof(b1), typeof(c1));

// 3. Boolean Literals
let isActive = true;
let isDelete = false;
console.log(" 3. Boolean Literals");
console.log(isActive, isDelete);
console.log(typeof(isActive), typeof(isDelete));


// 4. Null Literal
let a2 = null;   // represents "intentionally empty" value
console.log("4. Null Literal");
console.log(a2);
console.log(typeof(a2));

// 5. Undefined (technically a primitive value, not a "typed" literal)
let a3;
console.log("5. Undefined ");
console.log(a3); // undefined — no value assigned yet
console.log(typeof(a3));

// 6. BigInt
let a4 = 0n;
console.log("6.  BigInt");
console.log(a4);
console.log(typeof a4);

// Non-Primitive Data types
console.log("Non-Primitive Data types")
// 1. Array Literals
let mixedArr = [123, "four", true, null];  // mixed types allowed
let emptyArr = [];
console.log("1. Array Literals");
console.log(mixedArr, emptyArr);
console.log(typeof(mixedArr), typeof(emptyArr));

// 2. Object Literals
let user = {
  name: "susagar",
  age: 35,
  isActive: true
};
console.log("2. Object Literals");
console.log(user);
console.log(typeof(user));


// 3. Function Literals (Function Expressions)
let greet = function() {
  console.log("Hello greet function");
};
console.log(" 9. Function Literals");
console.log(greet);
console.log(typeof(greet));

greet();