/*
Callback hell / pyramid of doom:

Callback hell is what happens when you nest callbacks inside callbacks, because each step needs the result of the previous one. The code drifts to the right and forms a pyramid shape, which is why it’s also called the pyramid of doom.

Analogy: a chain of “call me back” messages. You ask Person A to call you back, and only after that call can you ask Person B, and only after B calls back can you ask Person C. Each step is stuck inside the previous one.
*/

setTimeout(() => {
  console.log("1. Boil water");

  setTimeout(() => {
    console.log("2. Add tea powder");

    setTimeout(() => {
      console.log("3. Add milk");

      setTimeout(() => {
        console.log("4. Serve tea");
      }, 4000);

    }, 3000);

  }, 2000);

}, 1000);

/*
Why it’s a problem:-
Hard to read: you have to trace the indentation to see the order.
Hard to change: adding or reordering a step means re-nesting everything.
Error handling is repeated at every level (if (error) inside each callback).
Hard to debug: with more steps, it’s easy to lose track of which brace closes what.
*/

// To resolve the Callback hell problem, JS came-up with 'Promise Chaining'
asyncFunction1()
    .then(result1 => asyncfunction2(result1))
    .then(result2 => asyncfunction3(result2))
    .then(result3 => asyncfunction3(result3))
    .then(result4 => {
        // code here
    })
    .catch(error => {
        // Error Handling
    })


// To make it more readability with the promises and callback function on async operations, JS introduced 'async and await' concept

async function myFunction(){
    try {
        const result1 = await asyncFunction1();
        const result2 = await asyncfunction2(result1);
        const result3 = await asyncfunction3(result2);
        const result4 = await asyncfunction4(result3);
    } catch (error) {
        // Error Handling
    }
} 