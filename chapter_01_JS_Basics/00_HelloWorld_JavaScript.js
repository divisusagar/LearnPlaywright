// console.log("Hello World, This is JavaScript");

var message = "Hello World";
console.log(message);

// var message1: string = "Hello World";    // SyntaxError: Unexpected token ':' 

/* add type annotations
    which JS doesn't supportadd type annotations, 
    but supports only in TS
 
    If you try to add : string in a plain .js file, it'll throw a syntax error — that annotation only works in .ts files, since it's checked by the TypeScript compiler (tsc) before your code ever gets converted to plain JS. */
// console.log(message1);