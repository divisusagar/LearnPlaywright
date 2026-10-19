/*
Promise.race(): 
This method takes an array of promises and resolves or rejects as soon as one of the promise in the array resolves or rejects.
It's useful for scenarios where you want to respond to the first completed task
*/

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("Data from getData")
        }, 5000);
    });
};

const getError = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            reject("Error: Data is not available from getError")
        }, 10000);
    });
};

Promise.race([getData(), 
              getError()
            ])
            .then( result => {
                console.log("Result: ", result);
            })
            .catch( error => {
                console.log("Error: ", error);
            });