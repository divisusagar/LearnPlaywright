// in JS, if we provide method overloading, then the last method is take highest presedence, the rest are ignored

function print(){
    console.log('Hello!!!');
}
// print(); // Hi undefined is undefined years old
function print(name){
    console.log(`Hi ${name} !!!`)
}

function print(name, age){
    console.log(`Hi ${name} is ${age} years old `)
}
// print(); // Hi undefined is undefined years old
print('Pavan'); // Hi Pavan is undefined years old 
print('Susagar', 36);   // Hi Susagar is 36 years old 

// The Alternate solution for Method Overloading in JS, is to use if...else condition in a function
// Eg: Run the testcases on Remote machine: browserName, browserVersion, remoteExecution
function displayBrowserInfo(browserName, browserVersion, remoteExecution){
    if (typeof browserVersion === 'number' && typeof remoteExecution === 'boolean'){
        console.log(`Browser: ${browserName}, version: ${browserVersion}, remoteExec: ${remoteExecution}`);
    } 
    else if (typeof browserVersion === 'number'){
         console.log(`Browser: ${browserName}, version: ${browserVersion}`);
    } 
    else {
        console.log(`Browser: ${browserName}`);
    }
}
displayBrowserInfo('chrome', 115, true);
displayBrowserInfo('chrome', 115);
displayBrowserInfo('edge');