// console.log("Hello World...");
// console.error("ERROR: loading data...");
// console.warn("WARN: loading data....");
// console.info("INFO: loading data....");

const user1 = {
    name: "john",
    age: 34,
    city: 'Bangalore',
    country: 'India'
};
// console.log(user1);  // Output: { name: 'john', age: 34, city: 'Bangalore', country: 'India' }
// console.table(user1);
/* Output:
┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ name    │ 'john'      │
│ age     │ 34          │
│ city    │ 'Bangalore' │
│ country │ 'India'     │
└─────────┴─────────────┘
*/

const user2 = {
    name: "Sera",
    age: 32,
    city: 'Hyderabad',
    country: 'India'
};
// console.table({user1, user2});
/* Output:
┌─────────┬────────┬─────┬─────────────┬─────────┐
│ (index) │ name   │ age │ city        │ country │
├─────────┼────────┼─────┼─────────────┼─────────┤
│ user1   │ 'john' │ 34  │ 'Bangalore' │ 'India' │
│ user2   │ 'Sera' │ 32  │ 'Hyderabad' │ 'India' │
└─────────┴────────┴─────┴─────────────┴─────────┘
*/

console.group("Login feature");
console.log("Password Reset");
console.log("Error login message");
console.log("Enter username/password");
console.groupEnd();
/* Output:
Login feature
  Password Reset
  Error login message
  Enter username/password

*/

// Measure the time to the completion task
// console.time("Time Taken");
// for (i = 1; i < 1000 ; i++){
//     console.log(i);
// }
// console.timeEnd("Time Taken");

// console.clear();

// console.count("hello");
// console.count("hello");
// console.count("hello");
/* Output:
hello: 1
hello: 2
hello: 3
*/

console.assert(10===20, 'this is FAILED'); // Assertion failed: this is FAILED
console.assert(10===10, 'this is FAILED'); // prints nothing, since assertion is pass

let flag = true;
console.assert(true, 'assertion failed message'); // print nothing
console.assert(false, 'assertion failed message'); // Assertion failed: assertion failed message

function testMyJob() {
    console.trace();
    const a = 'Susagar'
    const b = 'Divi'
    const c= a + b;
    console.log(c);
}
testMyJob();