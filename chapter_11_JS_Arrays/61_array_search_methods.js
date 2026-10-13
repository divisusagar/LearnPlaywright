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