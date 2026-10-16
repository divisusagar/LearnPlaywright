/* Objects
An object is a collection of key-value pairs. The keys are called ''properties', and when a property's value is a function, it is called a 'method'.

Anology: an ID card.
    Each field has a label(key) and value: Name -> Priya, City -> Hyderabad.
    The card can also do something like "show my details" (a method)
*/
const user = {
    name: 'Priya',      // property
    age: 30,            // property
    city: 'Hyderabad',  // property
    greet(){            // method
        console.log(`Hi, I am ${this.name}, ${this.age} years old from ${this.city}`);
    }
};
user.greet();

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
console.log(user1.name);          // Susagar  (dot notation)
console.log(user1["name"]);       // Susagar  (bracket notation)
console.log(user1["home city"]);  // Hyderabad  (brackets needed: key has space)

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