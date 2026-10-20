const numbers = [1, 2, 2, 3, 3, 3, 5, 5, 4, 4, 6, 7, 7, 1];
const names = ["Naveen", "Tom", "Lisa", "Naveen", "Peter", "Tom", "Raj", "Tom"];

const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

const uniqueNames = [...new Set(names)];
console.log(uniqueNames);