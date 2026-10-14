/* Part-1: Map

What is a Map?
    A Map holds key=>value pairs where a key can look up a value instantly and remembers the original insertion order of the keys and allows any data type (like boolean, objects, or numbers) to be a key.
*/

// Declartion and Initialize values using set() method
const userRoles = new Map();
userRoles.set("Pavan","QA");
userRoles.set("Ramesh","Dev");
userRoles.set("Arjun","QA");
console.log(userRoles); // Map(3) { 'Pavan' => 'QA', 'Ramesh' => 'Dev', 'Arjun' => 'QA' }

// Updating the value of a key using set() method
userRoles.set("Ramesh","Developer");
console.log(userRoles); // Map(3) { 'Pavan' => 'QA', 'Ramesh' => 'Developer', 'Arjun' => 'QA' }
userRoles.set("Madhu","Manager");
console.log(userRoles);

// Size of the Map using size
console.log('Size of the userRoles map:',userRoles.size);    // 4

// Deleting the key and its value from Map using delete()
userRoles.delete('Arjun')
console.log(userRoles);

// Fetch the value of a key using get() method
console.log(userRoles.get('Madhu'));    // Manager

// Checking key is present or not using has()
console.log(userRoles.has('Pavan'));    // true
console.log(userRoles.has('Susagar'));  // false

console.log('*'.repeat(50))
console.log(userRoles);
console.log('*'.repeat(50))

// Map Iterator the Keys and Values
console.log(userRoles.keys());      // [Map Iterator] { 'Pavan', 'Ramesh', 'Madhu' }
console.log(userRoles.values());    // [Map Iterator] { 'QA', 'Developer', 'Manager' }

console.log([...userRoles.keys()]);     // [ 'Pavan', 'Ramesh', 'Madhu' ]     
console.log([...userRoles.values()]);   // [ 'QA', 'Developer', 'Manager' ]  

console.log(userRoles.entries())

console.log('*'.repeat(50))

// Iterating the individual Keys and Values using loops

for (let key of userRoles.keys()) {
    console.log(key + ' its value is: ' + userRoles.get(key));
}

for (let value of userRoles.values()){
    console.log(value)
}

console.log('*'.repeat(50));

for (let [name, role] of userRoles) {
    console.log(`${name} -> ${role}`)
}

console.log('*'.repeat(50));

userRoles.forEach((role, name) => {
    console.log(`${role} <- ${name}`);
    console.log(name, role);
    console.log();
})

console.log('*'.repeat(50));

// Remove everything using clear() method
userRoles.clear();
console.log(userRoles);