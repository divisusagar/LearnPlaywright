/**
 * Destructuring

Destructuring is a shorthand for pulling values out of an array or object and storing them in separate variables, in one line.

Analogy: unpacking a lunch box. Instead of reaching in once for each item (box.rice, box.curry, box.sweet), you open it and place every item on the table at once.
 */

const user = { uname: "Priya", role: "QA", city: "Hyderabad" };

// Without destructuring
// const uname = user.uname;
// const urole = user.urole;

// With destructuring
// const { uname, role } = user;
// console.log(uname);  // Priya
// console.log(role);  // QA
/**
 *  The names inside { } must match the property names.
    Order doesn’t matter.
    You can pick only the properties you need.
 */

//  Rename: { property: newName }
const { uname: userName, role: designation, city: location } = user;
console.log(userName);   // Priya
console.log(designation)        // QA
console.log(location);   // Hyderabad

// Default value: { property = fallback }
const { aged = 25 } = user;
console.log(aged);   // 25 (user has no age)

// Rename and default together
const { aged: years = 25 } = user;
console.log(`${userName}, ${designation}, ${location}, ${aged}`);
console.log(user);

const {uname, ...others} = user;
console.log('uname: ',uname);
console.log('others: ', others);

console.log('*'.repeat(50));

const skills = ["JS", "TS", "Playwright"];

const [first, second] = skills;
console.log(first);    // JS
console.log(second);   // 

const [a1, , c1] = skills;
console.log(c1);   // Playwright

const [head, ...tail] = skills;                // head = "JS", tail = ["TS", "Playwright"]
console.log(head);
console.log(tail);

const [x, y, z, extra = "none"] = skills;      // extra = "none"

console.log('*'.repeat(50));

let p = 1, q = 2;
[p, q] = [q, p];
console.log(p, q);   // 2 1

// Note: You used this in the Fibonacci program ([a, b] = [b, a + b]).

console.log('*'.repeat(50));
// array/objects ----> variables

// array
const numbers = [1, 2, 3, 4]
const [a, b, c, d] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// Rest ... => collect the leftovers 
const lang = ['JavaScript', 'Java', 'Ruby', 'Python', 'GO'];
const [lang1, lang2, ...otherlang] = lang;
console.log(lang1);
console.log(lang2);
console.log(otherlang);

// Object
const user1 = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30
};
const {firstName, lastName, city="California", age} = user1; // Default value: { property = fallback }
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(city);

// 
function printUserName(person) {
    console.log(person.firstName);
    console.log(person.lastName);
}
const person = {
    firstName: "John",
    lastName: 'Smith'
};
printUserName(person);

// with destrucring
function printUserName1({firstName, lastName}){
    console.log(firstName, lastName);
    // console.log(lastName);
}
const person1 = {
    firstName: "Susagar",
    lastName: 'Divi'
};
printUserName1(person1);

// Program-2
//const greet = ({ name, role = "Guest" }) => `Hi ${name}, ${role}`;
const greet = ({ name = "Guest" } = {}) => name;
console.log(greet({ name: "Priya", role: "QA" }));
console.log(greet({ name: "Reddy" }));
console.log(greet());              

/**
 * Quick summary
You want to	            Write
Pull properties out	    const { a, b } = obj
Rename	                const { a: x } = obj
Add a default	        const { a = 5 } = obj
Collect the rest	    const { a, ...rest } = obj
Pull array items	    const [x, y] = arr
Skip an item	        const [x, , z] = arr
Swap	                [a, b] = [b, a]
Use in a parameter	    ({ name, role }) => ...
 */