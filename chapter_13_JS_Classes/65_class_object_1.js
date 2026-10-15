/* Class and Object
Anology: a house blueprint
-> Class = the blueprint. It describes what every house will have (rooms, doors) abd what it can do (open the doorm turn of the lights). We can't live in a blueprint
-> Object = an actual house built from the blueprint. You can build many houses fro one blueprint, and each has its own details(color, address) evethough thery share the same design.

Class (blueprint) -> new -> Object 1 (house at address A)
                         -> Object 2 (house at address B)

Technical: The technical term for an object created from a class is an instance.                         

*/

// 1. Object: the basics
//             An object is a collection of properties (data) and methods (functions that belongs to it)

const user = {
    firstname: 'Priya',
    role: 'QA',
    greet() {
        console.log(`Hi, I am ${this.firstname} working as a ${this.role}`);
    }
};
console.log(user);           // { firstname: 'Priya', role: 'QA', greet: [Function: greet] }
console.log(user.firstname); // Priya
user.greet();                // Hi, I am Priya working as a QA


console.log('*'.repeat(50));

/* 2. Class: the blueprint
        Each object has its own data (name, role) but shares the same methods from the class.
    
    a. Rules for Defining Properties & Variables
        -> NO var/let/const inside the class body: We can't declare properities using block-scoped keywords directly
        -> Properties are declared as plain identiers (propertyName = value) or initialized inside the constructor
        -> Always use the 'this' keyword: Must always use this.propertyName to refer them
        -> Always use the 'new' keyword: To create an object from a class blueprint, we must use 'new'

*/
class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    greet() {
        console.log(`Hi, I am ${this.name} working as a ${this.role}`);
    }
}

const user1 = new User("Priya", "QA");
const user2 = new User("Susagar", "DevOps");
user1.greet();
user2.greet();
console.log(user1.name);
console.log(user2.name);