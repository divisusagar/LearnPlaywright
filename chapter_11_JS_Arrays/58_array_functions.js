let fruits = [];
console.log(fruits, typeof fruits);

let fresh_fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fresh_fruits.length);
console.log(fresh_fruits);
console.log(fresh_fruits[0]);
console.log(fresh_fruits[1]);
console.log(fresh_fruits[2]);
fresh_fruits[3] = 'Mango'
console.log(fresh_fruits[3]);

console.log('*'.repeat(10))

let browsers = new Array(3); // here 3 is the length
browsers[0] = "Chrome";
browsers[1] = "Edge";
browsers[2] = "Opera"
browsers[3] = "Firefox";
browsers[4] = "Safari";
console.log(browsers);
console.log(browsers.length); // 5 (automatically grew from 3 to 5)

console.log('*'.repeat(10))

let a = new Array(3);        // creates array with LENGTH 3, empty slots — NOT [3]
console.log(a);               // [ <3 empty items> ]

let b = new Array(1, 2, 3);  // creates an array WITH these 3 actual values
console.log(b);               // [ 1, 2, 3 ]

let c = new Array("3", '4', 5);      // single STRING argument → creates ["3"], not length 3
console.log(c);               // [ '3' ]

console.log('*'.repeat(10))

// Iterating elements in the Array using forEach()
let mobiles = new Array('Nokia', 'Samsung', 'Apple')
console.log(mobiles)        // [ 'Nokia', 'Samsung', 'Apple' ]
mobiles.forEach((mobile) => {
    console.log(mobile);
});

// push method: to insert the elements into the array
mobiles.push('Xiomi', 'Redmi', 'Motorola')
console.log(mobiles)        // [ 'Nokia', 'Samsung', 'Apple', 'Xiomi', 'Redmi', 'Motorola' ]
mobiles.forEach((mobile) => {
    console.log(mobile);
});

// pop method: remove last element of an array
console.log(mobiles.pop()); // Motorola
console.log(mobiles)    // [ 'Nokia', 'Samsung', 'Apple', 'Xiomi', 'Redmi' ]

// shift method: removes and return first element
console.log(mobiles.shift()); // Nokia
console.log(mobiles)    // [ 'Samsung', 'Apple', 'Xiomi', 'Redmi' ]

// unshift method: add elements at the starting
console.log(mobiles.unshift('lava', 'jio'))
console.log(mobiles)    // [ 'lava', 'jio', 'Samsung', 'Apple', 'Xiomi', 'Redmi' ]

// includes: check value is exists in the array or not
if (mobiles.includes('Apple')) {
    console.log('Apple is available in the array list')
}

// indexOf
console.log(mobiles.indexOf('Apple'))

// slice
console.log('*'.repeat(12))
console.log(mobiles.slice(1,3))     // [ 'jio', 'Samsung' ]

console.log(mobiles)
//concat
let laptops = ['Dell', 'Lenovo', 'Mac ']
console.log(laptops)
let devices = laptops.concat(mobiles)
console.log(devices)
console.log(devices[0])
console.log(laptops)    // [ 'Dell', 'Lenovo', 'Mac ' ]

// reverse method : is a mutable method
console.log(laptops.reverse()); 
console.log(laptops);

console.log('*'.repeat(10))

// sort method : mutable 
/* while using sort method on Number values, then we need comparator by pass argument and expression to sort i.e. sort((a,b) => a-b) 
here a-b give ascending order
     b-a gives decending order
*/
let num1 = [89, 25, 1, -1, 70]
console.log(num1.sort((a,b) => b-a))    // [ 89, 70, 25, 1, -1 ]
console.log(num1)   // [ 89, 70, 25, 1, -1 ]

let names1 = ['Susagar', 'Ajay', 'Pavan']
console.log(names1.sort())  // [ 'Ajay', 'Pavan', 'Susagar' ]
console.log(names1)         // [ 'Ajay', 'Pavan', 'Susagar' ]

console.log('*'.repeat(10))
// Splice -> mutate method -> it will add, remove, replace
// Syntax:- array.splice(start, deletecount,item1, item2,...)
console.log('***** Before Splice *****')
let arr = [3, 4, 5, 6, 7, 8]
console.log(arr)
console.log('***** After Splice *****')
console.log('Spliced Deleted Elements: ',arr.splice(2,3)) // Deleted [ 5, 6, 7 ]
console.log('Remained Elements in arr', arr)    // [ 3, 4, 8 ]

// want to insert/add element 6 after the element 4
arr.splice(2,0,6)   // i.e 2 is the index position of after 4 number, 0 indicates no more deletion, 6 indicates to insert number 6 in the 2nd postion
console.log(arr)    // [ 3, 4, 6, 8 ]

// replace element i.e. 3 is th index, 1 indicates - remove 1 element, 10 is the replacement in 3rd index
arr.splice(3,1,10)
console.log(arr)    // [ 3, 4, 6, 10 ]

// replace elements i.e 1 indicates start index, 3 indicates - removes 3 elements and add new elements 6,9,12
arr.splice(1,3,6,9,12)
console.log(arr)    // [ 3, 6, 9, 12 ]

console.log('*'.repeat(10))
let testStatus = ['pass', 'fail', 'skip'];
console.log(testStatus)     // [ 'pass', 'fail', 'skip' ]

console.log(testStatus[0])  // pass
console.log(testStatus[1])  // fail
console.log(testStatus[2])  // skip
console.log(testStatus[3])  // undefined
console.log(testStatus.at(-1))  // skip
console.log(testStatus.at(-2))  // fail
console.log(testStatus.at(-3))  // pass     
console.log(testStatus.includes("skips"))   // false
console.log(testStatus.at(0))               // pass
console.log(testStatus.indexOf("fail"))     // 1