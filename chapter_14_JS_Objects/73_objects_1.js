/* Objects
An object is a collection of key-value pairs. The keys are called ''properties', and when a property's value is a function, it is called a 'method'.

Anology: an ID card.
    Each field has a label(key) and value: Name -> Priya, City -> Hyderabad.
    The card can also do something like "show my details" (a method)
*/
class Student {

}

// 1. Creating Objects

// a. Object literal
const a = { name: 'Priya'};

// b. From a class
const b = new Student("Priya");

// c. new Object() : works, but literals are preferred
const c = new Object();
c.name = 'Priya'
console.log(c); // { name: 'Priya' }

// d. Object.create() : set the prototype; rare in everyday code
const d = Object.create( {role: 'QA'} );

// 2. Accessing properties: dot vs bracket
const user1 = { name: 'Susagar', "home city": "Hyderabad" };
console.log("user1.name is ", user1.name);          // Susagar  (dot notation)
console.log('user1["name"] is ', user1["name"]);       // Susagar  (bracket notation)
console.log('user1["home city"] is ', user1["home city"]);  // Hyderabad  (brackets needed: key has space)

const key = "name";
console.log(user1[key]);        // Susagar      (brackets needed: key is a variable)
console.log(user1.key);         // undefined    looks for property literally named "key"

// 3. add, update, delete
const user2 = { name: 'Pavan'};
user2.age = 30;
user2.name = 'Pavan Divi';
user2.city = 'Hyderabad'
console.log(user2);         // { name: 'Pavan Divi', age: 30, city: 'Hyderabad' }
delete user2.age;
console.log(user2);         // { name: 'Pavan Divi', city: 'Hyderabad' }
// Objects declared with const can still changed this way, because const locks the variable, not the content

// 4. Checking if property exists
const user3 = { name: 'Sharan', age: 0, city: undefined};
console.log(user3.name);
console.log("name" in user3);   // true (also checks inherited properties)
console.log(Object.hasOwn(user3, "name"));  // true (own properties only; modern, preferred)
console.log(user3.hasOwnProperty("name"));  // true (older equivalent)
console.log(Object.hasOwn(user3, "address")); // false

console.log(user3.age === 0);   // true
console.log(user3.city == undefined);  // false

// 5. Shorthand and Computed keys
const UserName = 'Joe';
const Age = 30;
const user4 = {UserName, Age};
const field = "Email";
const EmailInfo = {[field]: "joe@gmail.com"};
console.log(user4);
console.log(EmailInfo);

// 6. Methods and this
//  A method is a function stored in a property. Inside it, this refers to the object that called it.
const user5 = {
    name: 'Priya',      // property
    age: 30,            // property
    city: 'Hyderabad',  // property
    greet(){            // method
        console.log(`Hi, I am ${this.name}, ${this.age} years old from ${this.city}`);
    }
};
user5.greet();

// Do not use arrow function as an object method. Arrows doesn't have their own this
const user6 = {
    name: 'Priya',
    greet: () => console.log(this.name)
};
user6.greet(); // undefined

// 7. Getter and setter in an object literal
const rect = {
    width: 4,
    height: 5,
    get area() { return this.width * this.height; }
};
console.log(rect.area); // 20

// 8. Nested Objects
const user7 = {
    name: 'Priya',
    address: {
        city: 'Hyderabad',
        pincode: 500050
    },
    skills: ["Selenium", "Playwright"]
};
console.log(user7);
console.log(user7.address.city);
console.log(user7.skills[1]);
console.log(user7.address?.country);

// 9. Looping through an object
const user8 = { name: 'Priya', role: 'QA', city: 'Hyderabad'};
console.log(Object.keys(user8));
console.log(Object.values(user8));
console.log(Object.entries(user8));
console.log(user8);
for (const key in user8) {
    console.log(key, user8[key]);
}

for (const [key, value] of Object.entries(user8)) {
    console.log(`${key} -> ${value}`);
}
// Objectes aren't directly iterable with for...of, so convert them with Object.entries() first.
// Arrays have .map/.filter, object doesn't, so convert, then use those:
const prices = { apple: 10, banana: 5 };
const doubled = Object.fromEntries(
                    Object.entries(prices).map(([item, price]) => [item, price *2 ])
);
console.log(doubled);

// 10. JSON: objects <==> text
// Test data files, API responses and config files use JSON

const user9 = { name: "Priya", age: 30, skills: ["JS", "TS"] };
console.log("JSON/object: ", user9);// JSON/object:  { name: 'Priya', age: 30, skills: [ 'JS', 'TS' ] }
console.log(typeof user9);  // object
console.log(user9.name);    // Priya
console.log(user9.age);     // 30
console.log(user9.skills);  // [ 'JS', 'TS' ]

const text = JSON.stringify(user9);     // Object -> String
console.log("Text :",text);             // Text : {"name":"Priya","age":30,"skills":["JS","TS"]}
console.log(typeof text);               // String

// Text -> object
const obj = JSON.parse(text);
console.log(obj);
 


// 11. Important Object methods
/*
Method                              What it does
Object.keys(o)                      Array of keys
Object.values(o)                    Array of values
Object.entries(o)                   Array of [key,value] pairs
Object.fromEntries(pairs)           Pair back into an object
Object.assign(target, ....source)   Copy properties into target (mutates it)
Object.hasOwn(o, key)               Does it have its own property
Object.freeze(o)                    Block adds, changes and deletes (shallow)
Object.seal(o)                      Block adds and deletes, allow value changes
Object.isForzen(o)                  Check if frozen
*/