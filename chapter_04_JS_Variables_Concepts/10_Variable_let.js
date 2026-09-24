let x = 10;
console.log("let 'x' in Declared & Assigned in Global Scope: ", x);
// let x = 11; // Identifier 'x' has already been declared i.e already Declared let variable can't be Redeclared
x = 12;
console.log("let 'x' value is updated in Global Scope: ", x);

let y;
y = 15;
console.log("let 'y' value is in Global Scope: ", y);

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("'retryCount' in Global Scope:", retryCount);

let testStatus = "pending";
if (testStatus == "pending"){
    console.log("Test Status is: ",testStatus);
    let retryCount = 5;
    console.log("Declared and Assigned the let 'retrycount' value in IF block: ",retryCount);
    let executionTime = 1200;
    console.log("Inside IF block - Declared & Assigned 'executionTime' value: ", executionTime);
}

// console.log("Outside IF block - 'executionTime' value: ", executionTime); // ReferenceError: executionTime is not defined
console.log("'retryCount' in Global Scope:", retryCount);
