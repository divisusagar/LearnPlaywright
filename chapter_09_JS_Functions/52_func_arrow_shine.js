// Arrow functions shine as short callbacks
const numbers = [1, 2, 3, 4, 5];
console.log(numbers, typeof numbers);

const doubled = numbers.map(n => n *2);
console.log(doubled, typeof doubled);

const evens = numbers.filter(n => n%2==0)
console.log(evens, typeof evens);

const total = numbers.reduce((sum, n) => sum + n, 0)
console.log(total);