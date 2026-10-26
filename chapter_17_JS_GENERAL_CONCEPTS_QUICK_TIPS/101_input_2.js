const readline = require('readline');

// Create the interface for terminal input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// First question: Ask for Name
rl.question('Enter your name: ', (name) => {
  
  // Second question: Ask for Age (nested inside the first callback)
  rl.question('Enter your age: ', (age) => {
    
    // Print the final summary output
    console.log('\n--- Summary of Input ---');
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    
    // Always close the interface so the Node process can exit cleanly
    rl.close();
  });
});