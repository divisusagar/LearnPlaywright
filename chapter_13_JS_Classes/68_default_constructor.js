/* Constructor:-
A constructor is a special method inside a class that runs automatically once when we create an object with 'new' keyword. Its job is to set up the object's starting data.

Rules for the Constructor:-
a) Name it 'constructor': The initialization method inside a class must literally be named 'constructor'. JavaScrip automatically executes this method when you initantiate an object using new keyword
b) A class can have ONLY ONE constructor method. If we declare 2 constructor, then JS immediately throws a Syntax Error (A class may only have one constructor)
c) Use parameters for dynamic data: Pass arguments into the constructor and assign them using 'this'

*/

// 1*. Default constructor (implicit)
class Student {
    // properties
    sName = 'Susagar';
    sAddress = 'Hyderabad';
    
    // method
    learnCourse(courseName) {
        console.log(`Student: ${this.sName} is from ${this.sAddress}`)
        console.log('Learning Course: ',courseName);
    }
}
let s1 = new Student();
s1.learnCourse('Playwright');

/* Above program is internally converted/recognized as below by JS engine
class Student {
    constructor() {                 // default constructor added by JS
        this.sName = 'Susagar';     // fields are initialized here
        this.sAddress = 'Hyderabad';
    }

    learnCourse(courseName) {       // stays on the class (shared prototype)
        console.log(`Student: ${this.sName} is from ${this.sAddress}`)
        console.log('Learning Course: ', courseName);
    }
}

Step-by-step execution:-

Class definition: JS reads class Student. It registers the constructor (the implicit empty one) and puts learnCourse on Student.prototype, so all objects share one copy of the method.

new Student(): JS creates a new empty object {} and sets this to point to it.

Constructor runs: the field initializers execute first, so the object becomes { sName: 'Susagar', sAddress: 'Hyderabad' }. The empty constructor body then runs and does nothing more.

Return: the new object is returned and stored in s1.

s1.learnCourse('Playwright'): JS doesn’t find learnCourse on s1 itself, so it looks up the prototype and finds it there. It runs with this = s1 and courseName = 'Playwright'.

Output:
Student: Susagar is from Hyderabad
Learning Course:  Playwright

Where the data lives
s1 (own properties)                Student.prototype
┌────────────────────────┐         ┌──────────────────────┐
│ sName: 'Susagar'       │ ──────► │ learnCourse()        │
│ sAddress: 'Hyderabad'  │         └──────────────────────┘
└────────────────────────┘

Properties are copied onto each object, while methods are shared through the prototype. You can confirm it:
*/

console.log(Object.keys(s1));                          // [ 'sName', 'sAddress' ]
console.log(s1.hasOwnProperty('learnCourse'));         // false (it's on the prototype)
console.log(Student.prototype.hasOwnProperty('learnCourse')); // true