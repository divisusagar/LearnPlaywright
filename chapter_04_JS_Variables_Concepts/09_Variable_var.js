// 3 type of variables in JS i.e. var, let, const

/* var 
    -- Function-scoped (or global if outside a function)
    -- Redeclaration is allowed
    -- Legacy code / old codebases you're maintaining, then dont introduce new ones

*/

var a = 10; // Global Scope
console.log("First Declaration 'a' value in Global Scope: ",a);
var a = 12;
console.log("Redeclaration 'a' value in Global Scope: ",a);

console.log(b); // undefined (not an error — var is hoisted and initialized as undefined)
var b = 30;

function printHello(){
    console.log("'Hello' from inside printHello function");
    var a = 20; // Local Scope
    console.log("Redeclaration 'a' value in printHello Function Local Scope: ",a);
    if(true){
         a = 25;
        console.log("Redeclaration updated 'a' value in printHello Function Local Scope",a);
        var c = 40;
    }
    console.log(c);
    var d = 50;
}

printHello();

console.log("'Hello' from outside function");
console.log("a value is",a);
console.log("b value is",b);
// console.log("c value is",c); // ReferenceError: c is not defined
// console.log("d value is",d); // ReferenceError: d is not defined