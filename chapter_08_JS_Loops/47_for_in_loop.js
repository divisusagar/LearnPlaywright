/*
Purpose:
    Literates over the KEYS (propery names) of an object
    Keys are always returned as strings
    Do NOT use for...in on arrays --- use for...of or regular for loop instead
*/

let student = {
    name: 'Arjun',
    age: 22,
    course: 'Computer Science',
    city: 'Hyderabad'
};
for (let key in student) {
    console.log(key + ': ' + student[key]);
}

let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2023,
    color: 'white',
    carnum: 'TS 09 EW 6020'
}
let count = 0;
for (let key in car) {
    count++;
}
console.log(count);