/* 
Category	        Operators
===========         ==========
Spread/Rest	        ...
*/

/* Spread
A spread operator takes sometimes that holds multiple values (an array, string, Set or object) and expands it into individual items at that spot

Tip: if ... building or passing something, it's a Spread
*/
let nums = [1, 2, 3];
console.log(nums);  // [ 1, 2, 3 ]
console.log(...nums); // 1 2 3

// 1. Spread with arrays
// a. Copy an array
let original = [1, 2, 3]
let copy = [...original];  
console.log(copy);   // [ 1, 2, 3]

copy.push(4);
console.log(copy);  // [ 1, 2, 3, 4 ]

let copyAndAppend = [...copy, 5, 6];
console.log(copyAndAppend); // [ 1, 2, 3, 4, 5, 6 ]

// b. Merge arrays
const a = [1, 2];
const b = [3, 4];
console.log([...a, ...b]);        // [ 1, 2, 3, 4 ]
console.log(...a, ...b);          // 1 2 3 4
console.log([0, ...a, 99, ...b]); // [ 0, 1, 2, 99, 3, 4 ]

// c. Add or remove without changing the original
const list = ['a', 'b', 'c'];
console.log("Original list: ", list);
const added = [...list, 'd'];
console.log("Added list: ", added);
const prepended = ['z', ...list];
console.log("Prepended list: ",prepended);
const removed = list.filter( (x) => x !== 'b' );
console.log("Removed list: ", removed);
 
// d. Convert other things into arrays
console.log([..."Hello"]); // [ 'H', 'e', 'l', 'l', 'o' ]
console.log([...new Set([1, 2, 2, 3, 3, 3, 4, 1])]);    // [ 1, 2, 3, 4 ]
console.log( [...new Map( [["a", 1], ['b', 2], ['c', 3]] )] );

// 2. Spread with objects
let obj1 = {a: 1};
console.log(obj1);  // { a: 1 }
let obj2 = {...obj1};
console.log(obj2);  // { a: 1 }

// Add / Append
let obj3 = {...obj2, b: 2, c: 3};
console.log(obj3);

// Merge objects (later keys win)
const defaults = { browser: "chromium", headless: true, timeout: 5000};
const custom = { headless: false};

const config = { ...defaults, ...custom };
console.log(config); // { browser: 'chromium', headless: false, timeout: 5000 }

// Override or add one property
const user = { name: 'Priya', role: 'QA'};
console.log(user);      // { name: 'Priya', role: 'QA' }
const admin = { ...user, role: 'Admininstrator'};
console.log(admin);     // { name: 'Priya', role: 'Admininstrator' }
const withCity = { ...user, city: 'Hyderabad' };
console.log(withCity);  // { name: 'Priya', role: 'QA', city: 'Hyderabad' }

// Order matters: The last wins
console.log({ ...user, role: 'Admin' });    // { name: 'Priya', role: 'Admin' }
console.log({ role: 'Admin', ...user});     // { role: 'QA', name: 'Priya' }

// 3. Spread in function calls
// Spread tunrs an array into seperate arguments
const scores = [45, 82, 67];
console.log(Math.max(scores));      // NaN
console.log(Math.max(...scores));   // 82

const add = (a, b, c) => a + b + c;
const values = [1, 2, 3];
console.log(...values); // Output: 1 2 3
console.log(add(...values)); // Output: 6

// REST
// Rest: Collects items into a collection
// Tip: if ... receiving or collecting something, it's a Rest
const sum = (...numbers) => numbers.reduce((t,n) => t+n, 0);
// Spread: Expand an array into arguments
console.log(sum(...[1,2,3,4,5]));

// REST in destructing: collects the remaining items
const [first, ...others] = [1,2,3,4];
console.log(first);
console.log(others);

const {name, ...rest} = {name: 'Priya', role:'QA', city:'Hyderabad'};
console.log(name);  // Priya
console.log(rest);  // { role: 'QA', city: 'Hyderabad' }

/*
Quick Rule:=
if ... building or passing something, it's a Spread
if ... receiving or collecting something, it's a Rest
*/