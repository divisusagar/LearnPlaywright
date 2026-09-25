console.log("Number.MAX_VALUE : ",Number.MAX_VALUE);
console.log("Number.MAX_SAFE_INTEGER : ",Number.MAX_SAFE_INTEGER);
let greaterMaxSafeIntegerPlus = 9007199254740998;
console.log("greaterMaxSafeIntegerPlus :", greaterMaxSafeIntegerPlus);
let greaterMaxSafeIntegerPlus1 = 9007199254740999;
console.log("greaterMaxSafeIntegerPlus1 :", greaterMaxSafeIntegerPlus1);

console.log(Number.isSafeInteger(9007199254740991)); // true  — within safe range
console.log(Number.isSafeInteger(9007199254740998)); // false — outside safe range (even if it happened to print correctly)
console.log(Number.isSafeInteger(9007199254740999)); // false — outside safe range, and rounded

console.log(9007199254740998 === 9007199254740998 + 0); // true (didn't round this time)
console.log(9007199254740999 === 9007199254741000);     // true!! ← proves precision was lost

// Safe alternative using BigInt
let safeBigNumber = 9007199254740999n; // exact, no rounding
console.log(safeBigNumber); // 9007199254740999n