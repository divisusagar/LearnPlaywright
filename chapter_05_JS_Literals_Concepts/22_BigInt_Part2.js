let x = 20;
let y = 200n;
console.log(typeof x, typeof y);
// console.log(x+y);   // TypeError: Cannot mix BigInt and other types, use explicit conversions
let z = 20n;
console.log(y+z);