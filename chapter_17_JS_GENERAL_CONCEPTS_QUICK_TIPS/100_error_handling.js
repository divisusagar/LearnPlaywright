/*
Error = An Object that created to represent a problem that occurs with user input or establish a connection
      -> Errors can be generated for all sort of issues such as Network Issues, Promise Rejection, Security Errors
      -> To handle these kindo of errors, we can do that with try, catch and finally blocks

try { } = Encloses code that might potentially cause an error
catch { } = Catch and handle any thrown Errors from try { } block
finally { } = (optional) Always executes. Used monstly for clean-up 
              ex, close file, close connection, release resources
*/

// compile-time error : eg. syntax error
    //console.log('Hello';    // SyntaxError: missing ) after argument list

// runtime-error => ex. Reference error
    // console.log(x);       // ReferenceError: x is not defined

// Program-1:
// try{
//     //console.log(x);
//     console.log("Hello");
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("You always executes finally");
// }
// console.log("You have reached the end!")

// Program-2:
try {
    const divident = window.prompt("Enter a divident: ");
    const divisor = window.prompt("Enter a divisor: ");
    if(divisor == 0) {
        throw new Error("You can't divide by Zero!");
    }
    const result = divident / divisor;
    console.log(result);

}
catch(error) {
    console.error(error)
}
finally {
    console.log("You always executes finally")
}