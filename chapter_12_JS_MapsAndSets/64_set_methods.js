/* Part-2: Set

What is a Set?
    A Set automatically filters out duplicates. If we try to add the same value twice, the second attempt is simply ignored. Like Map, Set also remebers the original insertion order of its elements.
*/
// Standard way of Declaration and Intialize with default values
let allowedBrowsers = new Set(['chromium', 'firefox', 'webkit', 'chromium']);
console.log(allowedBrowsers);  // Set(3) { 'chromium', 'firefox', 'webkit' }
console.log(allowedBrowsers.size);  // 3

// Add or Create new values into the Set
allowedBrowsers.add('edge');
allowedBrowsers.add('brave');

console.log(allowedBrowsers);   // Set(5) { 'chromium', 'firefox', 'webkit', 'edge', 'brave' }
console.log([...allowedBrowsers]); // Convert Set to Array [...set] 
                                   // [ 'chromium', 'firefox', 'webkit', 'edge', 'brave' ]
console.log('*'.repeat(50))
// Delete the value from the Set
allowedBrowsers.delete('brave');
console.log(allowedBrowsers);

// Size of the Set
console.log('Size of the Set: ',allowedBrowsers.size);
console.log('*'.repeat(50))

// Checking value is present or not using has()
console.log(allowedBrowsers.has('edge'));   // true
console.log(allowedBrowsers.has('brave'));  // false
console.log('*'.repeat(50))

// All values using values()
console.log(allowedBrowsers.values());  // [Set Iterator] { 'chromium', 'firefox', 'webkit', 'edge' }
console.log('*'.repeat(50))
// Iterating the values

for (let b of allowedBrowsers) {
    console.log(b);
}

for (let b of allowedBrowsers.values()) {
    console.log(b);
}

console.log('*'.repeat(50))
allowedBrowsers.forEach((b) => console.log(b) );

console.log('*'.repeat(50))
// Clear the values from Set
allowedBrowsers.clear();
console.log(allowedBrowsers);