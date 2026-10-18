/*
A static member belongs to the class itself, not to the objects created from it. We call it on the class name directly
'static' is only valid 'inside a class body'. It'a a keyword for class members, not for functions or variables
'static': best for Utilities, Counters, Shared Configs, Constants and Factory methods tha t don't need any object's data

*/
class Car{
    static wheels = 4;
    constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price;
        this.wheels =10;
    }

    static stop(){
        console.log("Car Stopped");
    }

    drive() {
        console.log(this.name + " is driving");
    }
}
const c1 = new Car("Honda", 2023, 50000);
console.log(`${c1.name}, ${c1.model}, ${c1.price}`);
console.log(Car.wheels);
console.log(c1.wheels);
c1.drive();
console.log(c1.wheels = 12);
Car.stop();
// c1.stop();  // TypeError: c1.stop is not a function
// Car.drive();   // TypeError: Car.drive is not a function


class Student {
    static schoolName = 'ABC school';
    constructor(name){
        this.name = name;
    }
}
console.log(Student.schoolName);
const s1 = new Student("Priya");
console.log(s1.name);   // Priya
console.log(s1.schoolName); // undefined

// 1. Static method
class MathHelper {
    static add(a, b){
        return a+b ;
    }
}
console.log(MathHelper.add(15,3)); // 18
const m1 = new MathHelper();
// m1.add(2,3);    // TypeError: m1.add is not a function

// 2. Static property
class Counter {
    static count = 0;
    constructor(){
        // count = count + 1; // ReferenceError: count is not defined
        Counter.count++;
    }
}
new Counter();
new Counter();
new Counter();
console.log(Counter.count); // 3

/* Tip
static var/function: call it by using class name
non static var/function: call it by using object refernce name
*/

// 3. this inside a static method
class UserClass {
    static urole = 'QA';
    uname = 'Priya';

    static showRole() {
        console.log(this.urole); // QA
        console.log(this.uname); // undefined
    }
}
UserClass.showRole();

class User{
    static role = 'QA';
    show(){
        console.log(User.role);
    }
}
console.log(User.role);
const u1 = new User();
u1.show();

// 4. Static factory methods
// Create objects through named static methods
class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    static createAdmin(name) {
        return new User(name, 'Admin role');
    }
    static createGuest() {
        return new User("guest",'Guest role')
    }
}
const admin = User.createAdmin("Pavan");
console.log(admin);
const guest = User.createGuest();
console.log(guest);

// 5. Static members are inherited
class Person {
    static species = "Human";
    static describe() { return "A person"; }
}
class Student extends Person{}
console.log(Student.species);
console.log(Student.describe());

// 6. Private Static members
class Config {
    static #secret = 'abc123'; // private static field

    static getHint(){
        return Config.#secret.slice(0,2);
    }
}
console.log(Config.getHint()); // ab