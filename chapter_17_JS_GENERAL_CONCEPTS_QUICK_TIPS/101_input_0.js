import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function main() {
    // Create the readline interface
    const rl = readline.createInterface({ input, output });

    try {
        // 1. Reading a String (Line)
        const name = await rl.question('Enter your name: ');

        // 2. Reading a Number (Inputs come in as strings, so you must convert them)
        
        let age;
        while(true) {
            const ageInput = await rl.question('Enter your age: ');
            age = Number(ageInput.trim());
            if(Number.isInteger(age) && age>=1 && age<=120) {
                break;
            }
            console.error('Invalid age. Enter a whole number between 1 to 120.')
        }
        

        const heightInput = await rl.question('Enter your height (in meters): ');
        const height = parseFloat(heightInput);

        // Display the collected inputs
        console.log('\n--- Summary of Input ---');
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        console.log(`Height: ${height}m`);

    } finally {
        // Always close the readline interface when done
        rl.close();
    }
}

main();