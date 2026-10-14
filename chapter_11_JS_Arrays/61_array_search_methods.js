/*
Method          Question it answers                                 Returns
----------      ------------------------------------------------    --------------------------
includes()      Is this value in the array?                         true / false
indexOf()       At what position is this value?                     index, or -1 if not found
find()          Give me the first item that matches a condition?    the item, or undefined
findIndex()     At what position is the first match?                index, or -1
some()          Does at least one item match?                       true / false
every()         Do all items match?                                 true / false
filter()        Give me all items that match?                       new array (empty if none)
*/

// 1. includes(): is the value present
const browsers = ['Chrome', 'Edge', 'Firefox', 'Chrome']
console.log(browsers.includes('Edge'))      // true
console.log(browsers.includes('Safari'))    // false
console.log(browsers.includes('firefox'))   // false due to Case-Sentivite
console.log(browsers.includes('Firefox Mozilla'))   // false - array item must equal exactly

/*
Playwright example: verify a value exists in a list of dropdown options
const options = await page.locator('#country option').allTextContents();
expect(options.include('India')).toBe(true)
*/

// 2. indexOf(): where is it?

console.log(browsers.indexOf('Chrome'))    // search starts from 0th index, so output is 0
console.log(browsers.indexOf('Chrome',2))    // search starts from 2nd index, so output is 3 
console.log(browsers.indexOf('Safari'))    // Couldn't find the value, so output is -1
console.log(browsers.lastIndexOf('Chrome')) // 3

// 3. find(): first item that matches a condition
//    findLast(): last item that matches a condition
// Works with objects too, which is why more powerful than includes
let arrNum = [10, 20, 40]
console.log(arrNum.find(n => n>15))     // 20
console.log(arrNum.findLast(n => n>15)) // 40

const users = [
    {name: 'Priya', role: 'QA'},
    {name: 'Reddy', role: 'Dev'},
    {name: 'Arjun', role: 'QA'},
];
const firstQA = users.find((u) => u.role === 'QA' );
console.log(firstQA)    // { name: 'Priya', role: 'QA' }
const manager = users.find((u) => u.role === 'Manager')
console.log(manager)    // undefined

/*
Playwright example: pick a specific rows data from a list
const texts = await page.locator('.product-name').allTextContents();
const laptops = texts.find((t) => t.includes('Laptop'));

*/

// 4. findIndex(): position of the first match
const user1 = [
    { name: 'Pavan'},
    { name: 'Reddy'},
    { name: 'Arjun'},
];
console.log(user1.findIndex((u) => u.name === 'Reddy'))     // 1
console.log(user1.findIndex((u) => u.name === 'Unknown'))   // -1

/*
Playwright use: find which row number holder a value, then use that index to click the matching button in the same row
const names = await page.locator('table tr td:first-child').allTextContents();
const rowIndex = names.findIndex((n) => === 'Priya');
await page.locator('table tr').nth(rowIndex).locator('button').click();
*/

// 5. some(): does atleast one match?
//          : its like find(), but returns true or false
const scores = [45, 82, 30];
console.log(scores.some((s) => s>80));  // true
console.log(scores.some((s) => s>100)); // false

// 6. every(): do all match?
const scores1 = [46, 84, 62];
console.log(scores1.every((s) => s>=45));   // true
console.log(scores1.every((s) => s>=50));   // false
/*
Playwright use: validate every item in a list
const prices = await page.locator('.price').allTextContents();
const allHaveDollor = prices.every((p) => p.startsWith('$'));
expect(allHaveDollor).toBe(true);
*/

// 7. filter(): all matches
const links = ['Home', 'About', 'Contacts', 'About Us'];
console.log(links.filter((l) => l.includes("About")))   // [ 'About', 'About Us' ]
/*
Playwright use: count or collect all matching items
const texts = await page.locator('a').allTextContents();
const blogLinks = texts.filter((t) => t.toLowerCase().includes('blog));
console.log(blogLinks.length);
*/


console.log(["Priya Sharma"].includes("Priya"));                // true
console.log(["Priya Sharma"].some((n) => n.includes("Priya"))); // false

/*
Which one to pick: 

Need true/false only?
 ├─ one specific value ........................ includes()
 ├─ does ANY item pass a rule ................. some()
 └─ do ALL items pass a rule .................. every()

Need the item itself?
 ├─ first match only .......................... find()
 └─ every match ............................... filter()

Need the position?
 ├─ of a specific value ....................... indexOf()
 └─ of the first item passing a rule .......... findIndex()

*/