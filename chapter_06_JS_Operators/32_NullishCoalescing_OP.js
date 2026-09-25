/*
Category	        Operators
===========         =========
Nullish coalescing	??
*/
/*
Returns the right-hand value only if the left side is null or undefined -- unlike ||, 
which also triggers on 0, "", false
*/
let count = 0;
console.log(count || 10);   // 10 -> unwanted! 0 is falsym so || override it
console.log(count ?? 10);   // 0  -> correct!  0 is not null/undefined, so it kept


let A2 = null;
console.log(A2 ?? 'Guest-null');

let A3 = undefined;
console.log(A3 ?? 'Guest-undefined');

let A4 = 0;
console.log(A4 ?? "Guest-0");

let A5 = "";
console.log(A5 ?? "Guest-EmptyDoubleQuotes");

let A6 = NaN;
console.log(A6 ?? "Guest-NaN");