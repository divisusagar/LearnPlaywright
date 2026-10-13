let str = 'susagar';
console.log(str);
console.log(typeof str);

/* 3 ways of creating strings
    single quote, double quote, template literal
*/
let way1 = 'QA'
let way2 = "Masters"
let way3 = `Welcome to ${way1}-${way2} Playwright course`
console.log(way3)

// accessing a string
let str1 = 'sairam' // stores in sequence of characters / array of characters
    // memory is allocated to str1 with sequence of characters
console.log(`Length of str1 = $str1 is `, str1.length)
console.log(str1[0]) // s
console.log(str1[1]) // a
console.log(str1[2]) // i
console.log(str1[-1]) // undefined
console.log(str1[str1.length-1]) // m
str1[0] = 'j'
console.log(str1)

/* Strings are Immutable, why?
We can't changes/update the individual chars within the string i.e. str[0] = 'j' // doesn't happen 
eventhough there is not compilation & execution phase 
the assigned string still remains same. Hence string is Immutable

But we can totally update/change the string a whole using re-assignment
*/
str1 = 'balaji'
console.log(str1)