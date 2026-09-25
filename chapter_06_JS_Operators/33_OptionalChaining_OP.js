/*
Category	        Operators
===========         ==========
Optional chaining	?.
*/
/*
Safely access nested object properties without manually checking each level for null/undefined
*/

let user = { profile: {name: "susagar"}};
console.log(user.profile?.name);
console.log(user.address?.city);
// console.log(user.address.city);  // TypeError: Cannot read properties of undefined (reading 'city')
