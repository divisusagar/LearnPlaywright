let str = 'SusagarDivi'

console.log(`${str} lowercase `, str.toLowerCase())
console.log(`${str} uppercase `,str.toUpperCase())
console.log(`${str} length `,str.length)    // 11
console.log(`${str} charAt(7) `,str.charAt(7))  // D
console.log(`${str} charAt(7) `,str.charAt(17)) // 
console.log(`${str} indexOf('a') `,str.indexOf('a'))    // 3
console.log(`${str} indexOf('z') `,str.indexOf('z'))    // -1

// includes
console.log('I am susagar'.includes('am'));   // true

console.log('I am susagar'.includes('am',4)); // false i.e. explicit search starts from 4th position


let logMessage = `INFO : Its a INFO message
WARN : Its a WARNING message
ERROR : Its a ERROR message
DEBUG : Its a Debug message`
console.log(logMessage,typeof logMessage)

let subStr = logMessage.split('\n')
console.log(subStr, typeof subStr)

for (ss of subStr) {
    console.log(ss, typeof ss)
    subStr.sta
} 

let message = "warning: its a warning message"
if (message.startsWith('warning')){
    console.log("Its a Warning message")
} else if (message.startsWith('error')){
    console.log("Its a Error Message")
}

console.log('Susagar'.substring(0)) // Susagar
console.log('Susagar'.substring(1)) // usagar
console.log('Susagar'.substring(1,4)) // usa

console.log('Reena'.replace('e','a')); // Reana
console.log('Reena'.replaceAll('e','a')); // Raana

//Slice
let str1 = 'playwright'
console.log(str1.slice(0,4)); // play
console.log(str1.slice(4,9)); // wrigh

//Split: it will take delimeter and split the string into array of string
let str2 = 'I am Susagar';
let splitStr2 = str2.split(' ');
console.log(splitStr2)

let str3 = 'Rannavarama'
console.log(str3.split('a')) // [ 'R', 'nn', 'v', 'r', 'm', '' ]

let str4 = '*'
console.log(str4.repeat(20))

// trim
let str5 = '    fruits      '
console.log(str5.trim())

//padding
console.log("5".padStart(3,'0')) // 005
console.log("5".padEnd(3,'0'))  // 500

//carcatinate
console.log('hello'+ ' '+'world')
console.log('hello'.concat('universe'))
console.log('hello'.concat(' ','universe',' this is beautiful'))

let str6 = '    ramesh and raju are good friends    '
let str7 = (str6.trim().split(' '));
console.log(str7[str7.length-1])

// reverse
let str8 = 'pavan';
let rev = '';
for (let char of str8) {
    rev = char + rev
}
console.log(rev)

let rev1 = ''
for (let i = str8.length-1; i>=0; i--) {
    rev1 = rev1 + str8[i]
}
console.log(rev1)

console.log("pavan".split('').reverse().join(''))