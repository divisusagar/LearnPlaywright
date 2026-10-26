// Array: is dynamic, at runtime more values can be added
let names: string[] = ["Tom", "Peter", "John", "Smith"];
names.push("Jonny");
names.forEach((n) => {console.log(n);});

// using Generics:
let empNames: Array<string> = ["Tom", "Peter", "John", "Smith"];
let empIds: Array<number> = [1, 2, 3, 4];
let empInfo: Array<any> = [1, "Devops", null, true];

// Multi-type array:
let values: (string | number)[] = ["Tom", 100, "Naveen", 200];
values.forEach(v => console.log(v));
let valGen: Array<string | boolean> = ["Peter", true];
valGen.forEach((v) => {console.log(v);});

// first array declaration and initialization
let users: Array<string>;
users = ["Peter", "Naveen"];

let employees: Array<string> = ["Tom", "Peter", "John", "Smith"];
// array elements iteration using standard for loop
for (let i=0; i <= employees.length; i++){
    console.log(i + " , " + employees[i]);
}
console.log('*'.repeat(50));
// array elements iteration using for...in
for (let e in employees) {
    console.log(e + " , "+ employees[e]);   // 0 , Tom
}
console.log('*'.repeat(50));
// array elements iteration using for...of
for (let e of employees){
    console.log(e);
}
console.log('*'.repeat(50));
// array elements iteration using forEach()
employees.forEach(n => {console.log(n);});

console.log('*'.repeat(50));
// Hard to read: what does position 2 mean?
let u1: [string, number, string, boolean] = ["Priya", 30, "QA", true];
let u2: [string, number, string, boolean][] = [["Priya", 30, "QA", true], ["Simran", 25, "DevOps", false]];
console.log(u1);
console.log(u1[2]);
