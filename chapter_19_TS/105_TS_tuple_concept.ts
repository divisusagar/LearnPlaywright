// Array: is dynamic, at runtime more values can be added
/**
 * Every element has the same type (or a union), and TypeScript doesn’t care how many there are.
 */
let arr: string[] = ["a", "b", "c"];      // any length, all strings

let names: string[] = ["Tom", "Peter", "John", "Smith"];
names.push("Jonny");
// names.push(5);      // ❌ number is not a string
names.forEach((n) => {console.log(n);});

let scores: number[] = [10, 20, 30];
scores.push(40);


// # Tuple: fixed size, and order matters
let tup: [string, number] = ["a", 1];     // exactly 2 items: string first, number second

let personInfo: [string, number] = ["Priya", 30];

personInfo[0];            // string  ("Priya")
personInfo[1];            // number  (30)

// personInfo = [30, "Priya"];       // ❌ wrong order: position 0 must be a string
// personInfo = ["Priya"];           // ❌ missing the second element
// personInfo = ["Priya", 30, true]; // ❌ too many elements
// personInfo[2];                    // ❌ Tuple type of length 2 has no element at index 2
/**
 * Position matters: TypeScript knows the exact type at each index, so personInfo[0].toUpperCase() is accepted and personInfo[1].toUpperCase() is flagged.
 */

let person: [string, number] = ["Susagar", 100]; // valid : values should match the order & size of types
console.log(person[0]);
console.log(person[1]);
// let person1: [string, number] = ["Susagar", "Pavan"]; // invalid - 2nd value should be number only
// let person2: [string, number] = ["Susagar", 100, "Pavan"]; // invalid i.e in values we have intialize that size
let user: [string, number, boolean] = ["Pavan", 200, true]; // valid - the passed arguments are matching perfectly

/**
 * tuple vs array : Both are the same ordinary JS array at runtime. The difference exists only in TypeScript’s type checking.
 */

// a. Array of tuples
let data: [string, number][] = [["Naveen", 100], ["Automation", 200]];
// console.log(data[0]);   // [ 'Naveen', 100 ]
// console.log(data[1]);   // [ 'Automation', 200 ]
// console.log(data[0]![0]);
// console.log(data[0]![1]);
for (const [name, score] of data){
    console.log(`${name} , ${score}`);   // destructuring gives each part its own type
}

let customer: [string, number][] = [["Nelson", 100]];
customer.push(["Mandela", 200]);
console.log(customer); // [ [ 'Nelson', 100 ], [ 'Mandela', 200 ] ]

/**
 Read it as: “an array, where each item is a [string, number] tuple.” In [string, number][], the [] at the end means “array of”, and [string, number] is the tuple.
 */

// b. Tuple features : Named elements (readable, and hovering shows the labels)
let user1: [name: string, age: number] = ["Priya", 30];
// Names are documentation only. They don’t change how you access items (user1[0]).

// c. Optional elements
let point: [number, number, number?] = [1, 2];     // third value optional
for (const p of point) {
    console.log(p);
}

// d. Rest elements
let row: [string, ...number[]] = ["Priya", 10, 20, 30];   // one string, then any numbers
for (const r of row) {
    console.log(r);
}

// e. Readonly tuples
let fixed: readonly [string, number] = ["Priya", 30];
console.log(fixed[0]);
console.log(fixed[1]);
//fixed[0] = "Reddy";           // ❌ cannot assign to a read-only property

// Destructuring
let person1: [string, number] = ["Susagar", 100];
const [pName, pAge] = person1;                // pname: string, page: number
console.log(pName,' , ', pAge);
const [first, , third] = [1, 2, 3];        // skip with a gap
console.log(first, ' , ', third);          // 1 , 3
const [head, ...tail] = [1, 2, 3, 4];      // head = 1, tail = [2, 3, 4]
console.log(head);
console.log(tail);

// Returning two values from a function
function minMax(nums: number[]): [number, number] {
    return [Math.min(...nums), Math.max(...nums)];

}
const [min, max] = minMax([4, 9, 2]);
console.log(`Minimal number: ${min}`);
console.log(`Maximum number: ${max}`);

