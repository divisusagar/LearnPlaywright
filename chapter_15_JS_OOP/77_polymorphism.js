/* POLYMORPHISM
Polymorphism means "many forms". The same method name gives different behavior depending on which object call it. The caller doesn't need to know which kind of object it has.

Anology: the "Start" button
Cars, Bikes, Washing Machines all have a start button, and you press it the same way. What happens behind it is different from each
*/

// 1. Method overriding (the main form in JS)
//  - a child class replaces the parent's method with its own version

class Animal {
    speak() { console.log("Some Sound");  }
}
class Dog extends Animal {
    speak() { console.log("Woof"); }
}
class Cat extends Animal {
    speak() { console.log("Meow"); }
}

const animals = [ new Dog (), new Cat(), new Animal() ];
animals.forEach( (a) => a.speak() );

// 2. Extending instead of replacing (super.method())
class Person {
    introduce() {
        console.log("I am a Person");
    }
}
class Student extends Person {
    introduce(){
        super.introduce();
        console.log("I am also a Student");
    }
}
new Student().introduce();

// 3. Polymorphism without inhertance (duck typing)
//      Unrelated classes work too, as long as they have same method name
class Email {
    send(msg) { console.log(`Email: ${msg}`); }
}
class Sms {
    send(msg) { console.log(`SMS: ${msg}`); }
}
const notify = (channel, msg) => channel.send(msg);

notify(new Email(), "Test passed");
notify(new Sms(), "Test Passed");

/* 4. Why JS does NOT have: method overloading
In Java, we can define serveral methids with the same name and different paramenters.
In JS cannot, The last definition silently wins.
*/
class Calc {
    add(a, b) { return a + b; }
    add(a, b, c) { return a + b + c; } // replace the one above
}
console.log(new Calc().add(2,3,5)); // 10
console.log(new Calc().add(10,20)); // NaN

// Common workaround handle the variations inside a method
class AddValues{
    add(...values) {
        return values.reduce( (result,v) => result+v );
    }
}
console.log(new AddValues().add(2,3,5)); // 10
console.log(new AddValues().add(10,20)); // 30
console.log(new AddValues().add("Hello ","JavaScript", " Programing")); // Hello JavaScript Programing
console.log(new AddValues().add("Hello ",'User', 1)); // Hello User1