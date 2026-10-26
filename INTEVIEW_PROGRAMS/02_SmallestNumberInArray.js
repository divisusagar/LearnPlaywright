// Find the smallest number in an array i.e. [50, 2, 10, 25, 20, 30, 60]
// Way-1:

function findSmallestNumber(numbers) {
    let smallestNumber = numbers[0];
    for (let i = 1; i < numbers.length ; i++) {
        if (numbers[i] < smallestNumber) {
            smallestNumber = numbers[i];
        }
    }
    return smallestNumber;
}
console.log(findSmallestNumber([50, 2, 10, 25, 20, 30, 60]));