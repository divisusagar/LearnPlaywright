/* Program-1 */
// greet(); // TypeError: greet is not a function
// console.log(greet);
// var greet = function() {
//     console.log("Hello!");
// };

/*
Explaination of Program-1:
- The function call happend before assignment i.e.
  during JS compilation
    var greet = undefined;
    greet(); // undefined();
    var greet = function() {...};

*/

/* Program-2: */

var greet = function() {
  console.log("Hello!");
};
greet();

/*
*/

/*
Explanation for Program-2
- The function is stored before it is called
*/