// Find the largest number in an array i.e. [50, 2, 10, 25, 20, 30, 60]
// Way-1:
function findLargestNumber(numbers){
    let largestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber){
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}
console.log(findLargestNumber([50, 2, 10, 25, 20, 30, 60]));

// Way-2:
// let numbers2 = [50, 2, 10, 25, 20, 30, 60];
const numbers2 = [-10, -8, -6, -4, -2];
let largestNumber2 = numbers2[0];
for (const number2 of numbers2) {
    if (number2 > largestNumber2) {
        largestNumber2 = number2;
    }
}
console.log(largestNumber2);


// Way-3:
// let numbers3 = [50, 2, 10, 25, 20, 30, 60];
const numbers3 = [-10, -8, -6, -4, -2];
let largestNumber3 = numbers3[0];
numbers3.forEach((n) => {
    if (n > largestNumber3) {
        largestNumber3 = n;
    }
});
console.log(largestNumber3);

// Way-4:
// let numbers4 = [50, 2, 10, 25, 20, 30, 60];
const numbers4 = [-10, -8, -6, -4, -2];
const largestNumber4 = numbers4.reduce((max, n) => (n > max ? n : max));
console.log(largestNumber4);