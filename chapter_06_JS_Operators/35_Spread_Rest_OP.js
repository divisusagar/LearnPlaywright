/* 
Category	        Operators
===========         ==========
Spread/Rest	        ...
*/

// Spread - expands an array/object into the indivial elements
let nums = [1, 2, 3];
console.log(nums);
let newNums = [...nums, 4, 5];
console.log(newNums);

let obj1 = {a: 1};
console.log(obj1);
let obj2 = {...obj1, b: 2, c: 3};
console.log(obj2);
