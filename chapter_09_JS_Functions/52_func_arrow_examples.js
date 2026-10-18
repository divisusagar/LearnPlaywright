const square = n => n*n;
console.log(square(5));

const msg = () => 'Hello, Welcome to JS Programming';
console.log(msg());

const mul = (a, b) => a*b;
console.log(mul(5, 6));

const person = {
    firstName: "Susagar",
    lastName: "Divi" 
}
const personInfo = (p) => `I'm ${person.firstName} ${person.lastName}`;
console.log(personInfo(person));

// default values in arrow function
const greet = (username = 'guest', age = 0) => `Hello ${username}, you are ${age} years old`;
const g1 = greet();
console.log(g1);
const g2 = greet('susagar', 36);
console.log(g2);

// rest parameters ... varargs
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num , 0);
const total = sum(10,20,30);
console.log(total);

//
const browserInfo = (browser = 'chrome', ...details) => {
    console.log(`Browser: ${browser}`);
    console.log('other details: ',details);
}
browserInfo();
browserInfo('firefox', '115.11', 'mozilla', 'headless');

// max number using Math
const findMaxNumber = (a, b, c) => {
    return Math.max(a,b,c);
};
const maxValue = findMaxNumber(10, 30, 50);
console.log(maxValue);