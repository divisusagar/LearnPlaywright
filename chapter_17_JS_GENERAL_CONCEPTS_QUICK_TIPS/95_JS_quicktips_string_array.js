// 1. find the unique values from a array
const array = [1, 2, 3, 2, 2, 4, 3, 4, 5, 5, 6, 6]
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);
/*
Explanation:=
new Set(array) creates a Set from the array. 
A Set only keeps unique values, so repeated values are ignored. It becomes Set(6) { 1, 2, 3, 4, 5, 6 }, keeping the order of first appearance.
... (spread operator) takes the Set and expands its values one by one.
[ ... ] collects those values into a new array: [1, 2, 3, 4, 5, 6].
*/

// 2. int to string
const num = 32;
const numStr = num + ''; // '32'
console.log(numStr+10);  // '3210'
// or
const numStr1 = String(num);    // '32'
console.log(numStr1+10);        // '3210'

// 3. Float to Integer
const floatNum = 3.76;
const intNum = parseInt(floatNum);
console.log(intNum);    // 3

// 4. String to Float
const strNum = '32.01';
const x = parseFloat(strNum);
console.log(x, typeof x);
const y = parseInt(strNum);
console.log(y, typeof y);

// 5. Check if a variable is a Number
const value = 10;
if(typeof value === 'number' && !isNaN(value)) {
    console.log(value + ' is a number');
} else console.log(value + ' is Not a Number');

// 6. Swap variables
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(a, b);

// 7. Check if an Object has a property
const person = {
    name: 'John',
    age: 28
}
if(person.hasOwnProperty('age')){
    console.log('has age property')
}

// 8. Remove Falsy values from an array : use filter(Boolean)
// falsy values are (false, 0, "", null, undefined, NaN)
const values = [0, 1, 2, 'JS', false, true, "", '', undefined, NaN, 3.14];
const newValues = values.filter(Boolean);
console.log(newValues);

// 9. String --> UpperCase, LowerCase
const str = 'Susagar Divi';
const upperStr = str.toUpperCase(str);
const lowerStr = str.toLowerCase(str);
console.log(upperStr);
console.log(lowerStr);

// 10. check if Array contains a value
const lang = ['java', 'javascript', 'python', 'ruby']
if(lang.includes('javascript')){
    console.log('found')
}

// 11. check if Array is Empty
const empty = [];
if(empty.length === 0)
    console.log("Array is Empty")

// 12. Generate a random number between 10 and 20
// const min = 10;
// const max = 20;
// const randomNum = Math.floor(Math.random() * (max-min+1)) + min;
// console.log(randomNum);
const randomNum = (min, max) =>  Math.floor(Math.random() * (max-min+1)) + min;
console.log(randomNum(10, 20));
console.log(randomNum(1, 6));
console.log(randomNum(1, 99));

// 13. Join array elements into String
const words = ['Hello', 'User', 'Welcome','to', 'JS', 'Programming' ];
const sentence_space = words.join(' ');
console.log(sentence_space);    // Hello User Welcome to JS Programming
const sentence_comma = words.join(',');
console.log(sentence_comma); // Hello,User,Welcome,to,JS,Programming

// 14. get object property
const user = {
    name: 'Tom',
    age: 36,
    dob: '08-10-1990'
};
console.log(user['name']);
console.log(user['dob']);

// 15. Clone an array or object
const marks = [10, 35, 47, 62, 89, 95];
console.log(marks);
const marksDuplicate = [...marks];
console.log(marksDuplicate);

const duplicateUser = { ...user };
console.log(duplicateUser);

// 16. Convert the object to array
const employee = {
    name: 'Tom',
    age: 36,
    dob: '08-10-1990'
};
// a. keys arrray
const keysArray = Object.keys(employee);
console.log(keysArray);     // [ 'name', 'age', 'dob' ]
// b. values array
const valuesArray = Object.values(employee);
console.log(valuesArray);   // [ 'Tom', 36, '08-10-1990' ]
// c. entries array
const keyValArray = Object.entries(employee);
console.log(keyValArray);   // [ [ 'name', 'Tom' ], [ 'age', 36 ], [ 'dob', '08-10-1990' ] ]

// 17. Current Date and Time
const currentDate = new Date();
console.log(currentDate);                       // 2026-10-18T07:59:23.538Z
console.log(currentDate.toLocaleString());      // 18/10/2026, 1:29:23 pm
console.log(currentDate.toLocaleDateString());  // 18/10/2026
console.log(currentDate.toLocaleTimeString());  // 1:29:23 pm

// 18. check variable is defined or not
let i;
// console.log(i, typeof i); // undefined undefined
if (typeof i === 'undefined'){
    console.log('variable is undefined');
}

// 19. truncate an array
const testing = [0, 1, 2, 3, 4, 5, 6, 7];
console.log('testing array: ', testing); // [0, 1, 2, 3, 4, 5, 6, 7]
console.log(testing.length); // 8
testing.length = 3;
console.log(testing); // [ 0, 1, 2 ]

// 20. Last item of an array
const pop = [0, 10, 20, 30, 40, 50, 60, 70];
console.log(pop[1]); // 10
console.log(pop[pop.length-1]); // 70
console.log(pop.slice(-1)); // [70]