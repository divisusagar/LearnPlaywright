/* map, reduce and reduce
All three loops over an array and take a callback function

Method    Question it answer                     Returns
map     = Change every item                      A new array, same length
filter  = Keep only some item                    A new array, same or shorter
reduce  = Combine all items into a one result    A single value (number, string, object, array,....)

Analogy : A fruit factory
Raw Fruits -> [MAP: wash and cut each one] -> [FILTER: keep only ripe ones] -> [REDUCE: blend all into one juice]
*/

// 1. map: transform every item
// map will take the array function
// syntax:- arr.map((element, index, array)=> SingleLinelogic)
    // without braces the return is automatic
// syntax:- arr.map((element) => {return value}) 
    // with braces {} we need to explict return
const arr1 = [1, 2, 3, 4, 5]
console.log(arr1)
const doubelearr1 = arr1.map(num => num *2) // automatic return
console.log(doubelearr1)

const names = ['susagar', 'pavan', 'divi']
// names.map((name1) => {
//     console.log(name1, name1.length)
// })
let lenNames = names.map((ele,indx,arr) => {
    console.log(ele);
    console.log(indx);
    // console.log(arr)
    return ele.length   // explicit return
})
console.log(lenNames)

console.log(names.map(name1 => name1.toUpperCase()))

// Tempature F -> C
// (f-32) * (5/9)

let fahTemp = [32, 50, 72, 100, 200];
console.log("Fah Temp: ", fahTemp)
function fahToCel(fah){
    return (fah - 32) * (5/9);
}
let celTemp = fahTemp.map(fahToCel);
console.log("Cel Temp: ", celTemp);


// 2. filter: keep items that pass the test
// the callback must return true (keep) or false (drop)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]
console.log('Numbers array: ',numbers)
const even = numbers.filter((n) => n%2 === 0);
console.log('Even Numbers in array: ',even)

const scores = [45, 82, 67, 91, 30];
console.log(scores.filter((s) => s>= 50));

let employee = [
    {name: 'John', age: 30, gender: 'male'},
    {name: 'Joshep', age: 35, gender: 'male'},
    {name: 'Stella', age: 34, gender: 'female'},
    {name: 'Jessica', age: 25, gender: 'female'},
    {name: 'Peter', age: 36, gender: 'male'},
];

let femaleEmp = employee.filter( (emp) => {
        return emp.gender === 'female' && emp.age >20;
});
console.log(femaleEmp);



// 3. reduce: combine everything into one value
// syntax: array.reduce( (accumulator, currentItem, index, array) => login, initialValueForAccumulator )
const numbers1 = [1, 2, 3, 4, 5];
const total = numbers1.reduce((sum,n) => sum+n, 0) // sum is accumulator, n is current item of array, 0 is the starting value of sum
console.log(total)

const words = ['Hello', 'JS', 'World']
console.log(words.reduce((text, w) => text + ' '+w))

const number2 = [5, 12, 80, 20, 3]
console.log(number2.reduce((max,n) => (n>max ? n : max)));
// const maxNum = number2.reduce( (max,n) => {
//     if(n>max) {
//         return n;
//     } else {
//         return max;
//     }
// }, number2[0] );
// console.log("Maximum Number is: ",maxNum);
console.log(number2.reduce( (min,n) => (n<min) ? n : min));
// const minNum = number2.reduce( (min,n) => {
//     if(n<min){
//         return n;
//     } else {
//         return min;
//     }
// }, number2[0])
// console.log("Minimal Number is: ",minNum);

const number3 = [1, 2, 3, 4, 5, 6];
const result = number3
        .filter((n) => n%2 === 0)   // [2, 4, 6]
        .map((n) => n * 10)         // [20, 40, 60]
        .reduce((sum,n) => sum+n,0 );   // 120
console.log(result) // 120

// An Autmation-flavored example
const prices = ['$10', '$25', '$5', '$40'] // text read from a page
const totalP = prices
        .map((p) => Number(p.replace('$','')))
        .filter((p) => p > 5 )
        .reduce((sum,p) => sum+p,0 );
console.log(totalP) // 75