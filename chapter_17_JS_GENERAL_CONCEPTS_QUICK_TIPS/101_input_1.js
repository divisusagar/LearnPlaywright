// Program-1:
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is your name? ', (name) => {
readline.question('What is your age? ', (age) => {    
  console.log(`Hello, ${name}!${age}!! Nice to meet you.`);
  readline.close(); // Closes the prompt stream so the program can exit
})});