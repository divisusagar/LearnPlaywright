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

console.log('*'.repeat(50));

const user = {
    name: "John",
    age: 38,
    city: "New York"
};
for (const k in user){
    console.log(k + ": "+ user[k]);

}

console.log('*'.repeat(50));

const browsers = ["chrome", "firefox", "edge", "IE"];
for (const browser in browsers) {               // since we are using for...in on array
    console.log(browser); // Output: 0 1 2 3    // here index are printed
    console.log(browsers[browser]);             // here we need to use array[element] to print the value
}