let firstName = "susagar";
let lastName = "divi";

// This is a "template literal"
let greeting = `Hello, ${firstName}!`;
console.log(greeting);
console.log(`Hello, ${firstName}!`);
console.log(`${lastName}`);

let env = "staging";
env = "prod";
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl);

// Logs
const testName = "Login Test";
const testStatus = "FAILED";
const testDuration = 2.3;
console.log(`[${testStatus}] ${testName} completed in ${testDuration}s`);

const username = "pramod";
const role = "admin";
const payload = `{
    "user": "$username",
    "role": "$role",
    "timestamp": "${new Date().toISOString()}"
}`;
console.log(payload);