// array/objects ----> variables

// array
const numbers = [1, 2, 3, 4]
const [a, b, c, d] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

const lang = ['JavaScript', 'Java', 'Ruby', 'Python', 'GO'];
const [lang1, lang2, ...otherlang] = lang;
console.log(lang1);
console.log(lang2);
console.log(otherlang);

// Object
const user = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30
};
const {firstName, lastName, city="California", age} = user;
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
    console.log(firstName);
    // console.log(lastName);
}
const person1 = {
    firstName: "Susagar",
    lastName: 'Divi'
};
printUserName1(person1);