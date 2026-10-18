/*
In JS, promises are a way to handle asyncronous operations in a more organized and readable manner.
They provide a clear syntax for dealing with asynchronous code compared to traditional callback-based approaches.

Promises are widely used for tasks like making network requests, reading/writing files, and other operations that don't block the main thread.

A promise represents a value that may not available yet but will be resolved at some point in future.

It can be one the 3 states: 'pending', 'fulfilled', or 'rejected'

Once a promise is fulfilled or rejected, its considered settled and its state cannot change.

Pending -> with a value -> Resolved
Pending -> with a reason -> Rejected

Asynchornous Operations: Promises are a way to handle asynchronous operation in JS. They provide a structure for managing and chaining async task.

States: 3 states -> pending (start) -> fulfilled (success) or rejected (fails)

Callbacks: Promises use .then() and .catch() methods to specify callbacks for when promises is fulfilled or rejected. This promotes a more structured and readable code flow
*/
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    // if successful, call 'resolve' with a result
    // if an error occurs, call 'reject' with a reason/error
});
myPromise
    .then(result => {
        // Handle the fulfilled promise
    })
    .catch(error => {
        // Handle the rejected promise
    });

/*
Chaining: Promises can be easily chained together using .then(), allows you to sequence asynchronous operations. This is often referred to as "Promise Chaining".

Error Handling: Promises have built-in error handling via the .catch() method, making it easy to handle and propagate erros in async code.

Other features in Promises:-
    Promise.all();
    Promise.race();
    async/await
    Error Propagation
    Backward Compatability
    Readable Code
    Promise.then() Return
    Cancelable
    Microtasks
    Native Support

*/

// How to create a Promise
const randomNumberPromise = new Promise((resolve, reject) => {
    // async operation
    setTimeout( () => {
        const randomValue = Math.random(); // Math.random() returns either 0 or decimal in the range 0 <= n < 1
        if(randomValue >= 0.5) {
            resolve(randomValue);
        } else {
            reject(new Error("Value is too small"));
        }

    },2000)
});

randomNumberPromise
            .then(result => { // handler
                console.log(`Promise is Fulfiled with value: ${result}`);
            })
            .catch(error => { // handler
                console.error(`Promise is Rejected with reason: ${error}`);
            });