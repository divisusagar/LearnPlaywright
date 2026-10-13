let num1 = [2, 12, 5, 1, 90, 55]

// standard iteration using for loop
console.log('using standard for loop')
for (let i = 0; i < num1.length; i++) {
    console.log(num1[i])
}

console.log('*'.repeat(10))
// using for of
console.log('using for of')
for (let n of num1){
    console.log(n)
}

console.log('*'.repeat(10))
// using for each
console.log('using for each')
num1.forEach((n) => console.log(n))

console.log('*'.repeat(10))
console.log('using for each')
let str1 = ['P', 'F', 'Z', 'A', 'G']
str1.forEach((s) => console.log(s))