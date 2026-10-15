/* Constructor with an options object
Instead of passing many seperate arguments, we pass one object whose properties are the settings.
The constructor pulls out what it needs, using the destructed parameters and default values.

// The Problem it solves:
With positional arguments, we must remember the order and pass undefined to skip on

class Student {
    constructor(name, address, course, batch, active) { .... }
}
new Student('Susagar',undefined, undefined, 'Morning',true);    // hared to read & remember

What is true? What is undefined? Its easy to swap values by mistake
*/

// Solution for above Problem

class Student {
    constructor( {name, address = 'Hyderabad', course = 'Playwright'} = {}) {
        this.sName = name;
        this.sAddress = address;
        this.sCourse = course;
    }
}
const s1 = new Student({name: 'Susagar'});
console.log(s1);

const s2 =  new Student({address: 'Bangalore', name: 'Pavan'})
console.log(s2);

const s3 = new Student({course: 'DevOps', name: 'Vineel'});
console.log(s3);

const s4 = new Student();
console.log(s4);

/*
3. Reading the constructor line
constructor({ name, address = 'Hyderabad', course = 'Playwright' } = {})

Part	                    Meaning
{ name, address, course }	Destructuring: pull these properties out of the object passed in
address = 'Hyderabad'	    Default value used if that property is missing
= {} at the end	            Default for the whole argument, so new Student() with nothing doesn’t crash
*/

// Without = {}
class A {
    constructor({ name }) {}
}
new A();   // ❌ TypeError: Cannot destructure property 'name' of 'undefined'

// With = {}
class B {
    constructor({ name } = {}) {}
}
console.log(new B().name);   // ✅ works, name is undefined 