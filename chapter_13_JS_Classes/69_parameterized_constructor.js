/* Constructor:-
A constructor is a special method inside a class that runs automatically once when we create an object with 'new' keyword. Its job is to set up the object's starting data.

Rules for the Constructor:-
a) Name it 'constructor': The initialization method inside a class must literally be named 'constructor'. JavaScrip automatically executes this method when you initantiate an object using new keyword
b) A class can have ONLY ONE constructor method. If we declare 2 constructor, then JS immediately throws a Syntax Error (A class may only have one constructor)
c) Use parameters for dynamic data: Pass arguments into the constructor and assign them using 'this'

*/ 

/* Parameterized constructor
A parameterized constructor is a constructor that accepts values(parameters) when you create the object, so the object can start with different data.
*/
class Student {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    learnCourse(courseName) {
        console.log(`Student: ${this.name} is from ${this.address}`);
        console.log('Learning Course: ',courseName);
    }
}

const s1 = new Student('Susagar', 'Hyderabad');
s1.learnCourse('Playwright');

const s2 = new Student('Pavan', 'Bangalore');
s2.learnCourse('Python');

console.log('*'.repeat(50));

class Student2 {
    constructor(name, address = 'Unknown') {
        this.name = name;
        this.address = address;
    }
}
console.log(new Student2('Siva'));  // Student2 { name: 'Siva', address: 'Unknown' }
console.log(new Student2('Mahesh','Delhi'));    // Student2 { name: 'Mahesh', address: 'Delhi' }
console.log(new Student2('Mouli','Chennai','FDA')); // Student2 { name: 'Mouli', address: 'Chennai' }