let fruits = [];
console.log(fruits, typeof fruits);

let fresh_fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fresh_fruits.length);
console.log(fresh_fruits);
console.log(fresh_fruits[0]);
console.log(fresh_fruits[1]);
console.log(fresh_fruits[2]);

let browsers = new Array(3); // here 3 is the length
browsers[0] = "Chrome";
browsers[1] = "Edge";
browsers[2] = "Opera"
browsers[3] = "Firefox";
browsers[4] = "Safari";
console.log(browsers);
console.log(browsers.length); // 5 (automatically grew from 3 to 5)

let a = new Array(3);        // creates array with LENGTH 3, empty slots — NOT [3]
console.log(a);               // [ <3 empty items> ]

let b = new Array(1, 2, 3);  // creates an array WITH these 3 actual values
console.log(b);               // [ 1, 2, 3 ]

let c = new Array("3", '4', 5);      // single STRING argument → creates ["3"], not length 3
console.log(c);               // [ '3' ]