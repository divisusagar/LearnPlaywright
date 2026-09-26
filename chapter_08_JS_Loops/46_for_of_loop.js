 /*
Purpose:
    Cleanest way to interate arrays, strings, Maps and Sets
    We can get each VALUE directly -- no index variable needed
    Cannot break out it or access the index directly without extra code
 */

// Loop over Array
let cities = ['Hyderabad', 'Mumbai', 'Chennai', 'Delhi'];
for (let city of cities) {
    console.log('City: ', city);
}

// Count Vowels in a String
let str = 'JavaScript';
let vowCount = 0;
let vowels = 'aeiouAeiou';
for (let char of str) {
    if (vowels.includes(char)) {
        vowCount++;
    }
}
console.log('Vowels in "'+ str + '": ',vowCount);

// Sum of Array using for...of
let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (num of numbers) {
    sum += num;
}
console.log(sum);

let word = 'hello'
let result = '';
for (let ch of word) {
    result = ch + result;
}
console.log(result);