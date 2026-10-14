/* Map and Set in JavaScript
Both are build-in collections, like arrays, but each solves a specific problem

            Array                   Map                     Set
            ------------------      --------------------    -------------------
stores      Orderd list values      Key->value pair         Unique values only
Duplicates  Allowed                 Keys must be unique     Not allowed
Access by   Index(arr[0])           Key(map.get("name"))    Check with has()

Analogy:
    Map = Phone contacts. We have to look up a name(key) to get a number(value). Each name appears once
    Set = Exclusive VIP guest list. A name is either on the list or not. Writing the same name twice doesn't add a second enry

*/

/* Part-1: Map

What is a Map?
    A Map holds key=>value pairs where a key can look up a value instantly and remembers the original insertion order of the keys and allows any data type (like boolean, objects, or numbers) to be a key.
*/

// Standard way of Declaration and Intialize with default values
const studentDetails = new Map([
    ['Susagar','Playwright'],
    ['Rajashekar','Performance'],
    ['Madhusudhan','Playwright'],
    ['Pavandutt','Python']
]);
console.log(studentDetails);
/*
Map(4) {
  'Susagar' => 'Playwright',
  'Rajashekar' => 'Performance',
  'Madhusudhan' => 'Playwright',
  'Pavandutt' => 'Python'
}
*/

console.log('*'.repeat(50));

// Declartion and Initialize values using set() method
const userRoles = new Map();
userRoles.set("Pavan","QA");
userRoles.set("Ramesh","Dev");
userRoles.set("Arjun","QA");
console.log(userRoles); // Map(3) { 'Pavan' => 'QA', 'Ramesh' => 'Dev', 'Arjun' => 'QA' }

console.log('*'.repeat(50));
console.log('*'.repeat(50));


/* Part-2: Set

What is a Set?
    A Set automatically filters out duplicates. If we try to add the same value twice, the second attempt is simply ignored. Like Map, Set also remebers the original insertion order of its elements.
*/

// Standard way of Declaration and Intialize with default values
let allowedBrowsers = new Set(['chromium', 'firefox', 'webkit', 'chromium']);
console.log(allowedBrowsers);  // Set(3) { 'chromium', 'firefox', 'webkit' }
console.log(allowedBrowsers.size);  // 3

console.log('*'.repeat(50));

// Declartion and Initialize values using add() method
let testTags = new Set();
// Adding unique values
testTags.add('@smoke');
testTags.add('@sanity');
testTags.add('@regression');
testTags.add('@smoke'); // Ignored! It's alreadu in the set.
console.log(testTags)   // Set(3) { '@smoke', '@sanity', '@regression' }