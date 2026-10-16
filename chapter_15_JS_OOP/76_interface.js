/* INTERFACE 
JavaScript ha no "interface" keyword. Interfaces exists only in TypeScript
In plan JS we get the same effect by convention (Duct typing)
   
Duck typing: if it walks like a duck and quacks like a duck, it's a duck

JavaScript doesn't care 'what type' an object is or 'which class' created it. It only cares whether the object 'has the property or method you are trying to use'
*/

// Program: 1
function printUser(user) {
    console.log(`${user.name} - ${user.email}`);
}
printUser( {name: 'Priya', email: 'p@ymail.com'} ) ;    // Priya - p@ymail.com
printUser( {name: 'Lalitha'} ); // Lalitha - undefined

// Program: 2
// Step-1:
const duck = {
    speak() { console.log("Quack"); }
};

const person = {
    speak() { console.log("Hello"); }
};

const robot = {
    speak() { console.log("Beep boop") }
};
// Three unrelated objects, but all have a speak() method

const rock = {color: "grey"};

//Step-2: A function that doesn't check the type
function makeItSpeak(thing) {
    thing.speak();
}
makeItSpeak(duck);      // Quack
makeItSpeak(person);    // Hello
makeItSpeak(robot);     // Beep boop
// makeItSpeak(rock);      // TypeError: thing.speak is not a function