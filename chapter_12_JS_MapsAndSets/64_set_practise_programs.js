// Convert Array of Duplicate Numbers into Unquie Numbers
let arrNums = [1, 2, 2, 3, 3, 3, 4, 5, 5, 6];
console.log('Original Array of Numbers', arrNums)
let uniqueNums = new Set();
for (let n of arrNums) {
    uniqueNums.add(n);
}
console.log(uniqueNums);
console.log([...uniqueNums]);


let arrNums2 = [1, 2, 2, 3, 3, 3, 4, 5, 5, 6];
console.log('Original Array of Numbers', arrNums2);
let uniqueNums2 = new Set();
let duplicates = new Set();
for (let n of arrNums2) {
    if (uniqueNums2.has(n)) {
        duplicates.add(n);
    } uniqueNums2.add(n);
}
console.log('Uniques: ', uniqueNums2)
console.log('Duplicates: ',duplicates);