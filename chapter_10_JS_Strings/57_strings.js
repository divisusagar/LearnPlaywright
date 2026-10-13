let str18 = 'susagar'
let charCount = {};
// charCount['a']=1;
// charCount['b']=1;
// charCount['b']=3;
// console.log(charCount)  // { a: 1, b: 3 }
// console.log(charCount[a])  // ReferenceError: a is not defined
// console.log(charCount['a']) // 1
for (let char of str18) {
    if (charCount[char]) {
        charCount[char] = charCount[char]+1
    } else {
        charCount[char] = 1
    }
}
console.log(charCount)

for (let c in charCount) {
    if (charCount[c] === 1)
    console.log(c + ' : occurance is '+ charCount[c])
}

for (let c in charCount) {
    if (charCount[c] > 1)
    console.log(c + ' : occurance is '+ charCount[c])
}