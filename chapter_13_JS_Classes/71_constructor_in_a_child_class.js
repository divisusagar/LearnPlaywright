/* Constructor in a child class
-> A child class (created with 'extends') inherits from a parent class.
-> When a child class defines its own constructor, it must call super(...) before using this. That call runs the parent's constructor, which creates the inheritied properties.

*/
class Person {
    constructor(name, address) {
        this.pName = name;
        this.pAddress = address;
    }
    introduce() {
        console.log('Entered into Parent Class: Person');
        console.log(`I am ${this.pName} from ${this.pAddress}`);
    }
}

class Student extends Person {
    constructor(name, address, course){
        // this.sCourse = course; // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(name, address);
        this.sCourse = course;
    }
    learnCourse(){
        console.log('Entered into Child Class: Student');
        console.log(`${this.pName} is learning ${this.sCourse}`);
    }
}

const ss = new Student('Susagar','Machilipatnam','Playwright with JS/TS');
ss.introduce();
ss.learnCourse();
console.log(ss);

/*
Output:
-------
Entered into Parent Class: Person
I am Susagar from Machilipatnam
Entered into Child Class: Student
Susagar is learning Playwright with JS/TS
Student {
  pName: 'Susagar',
  pAddress: 'Machilipatnam',
  sCourse: 'Playwright with JS/TS'
}
*/

console.log('*'.repeat(50));

// Program-2:
// If the child has no constructor, then JS implictly add the default constructor(...args) having super(...args) in body-block

class Person1 {
    constructor(name, address) {
        this.pName = name;
        this.pAddress = address;
    }
    introduce() {
        console.log('Entered into Parent Class: Person');
        console.log(`I am ${this.pName} from ${this.pAddress}`);
    }
}

class Student1 extends Person1 {
    // implicit: constructor(...args) {super(...args);}
    learnCourse(course){
        this.sCourse = course;
        console.log('Entered into Child Class: Student1');
        console.log("Parent properties are Implicit fetch default child constructor() and super()");
        console.log(`I am ${this.pName} from ${this.pAddress}`);
    }
}
const s1 = new Student1('Priya', 'Chennai');
s1.learnCourse();
console.log('#'.repeat(25));
const ss1 = new Student1('Priya Mohon', 'Cochin');
ss1.learnCourse();
console.log('-'.repeat(10));
ss1.introduce();

console.log('*'.repeat(50));

// Program-3:
// If Child class method needs to call Parent Class method, the use super.methodName() in the child method body
class Person2 {
    constructor(name, address) {
        this.pName = name;
        this.pAddress = address;
    }
    introduce() {
        console.log('Entered into Parent Class: Person');
        console.log(`I am ${this.pName} from ${this.pAddress}`);
    }
}

class Student2 extends Person2 {
    // implicit: constructor(...args) {super(...args);}
    learnCourse(course){
      this.sCourse = course;
        console.log('Entered into Child Class: Student2');
        console.log("Parent properties are Implicit fetch default child constructor() and super()");
        console.log(`I am ${this.pName} from ${this.pAddress} learing ${this.sCourse}`);
        super.introduce();
    }
}
const ss2 = new Student2('Chandra', 'Madhurai');
ss2.learnCourse('DevOps');