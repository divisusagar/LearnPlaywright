// Promise.allSettled():

// Behavior:
// It returns a single promise that is fulfilled with an array of result objects, one for each promise.
// Each result object contains:
// a status (either "fulfilled" or "rejected") and
// a value (fulfilled value) or reason (rejected reason)

// Usecase:
// Useful when you want to process all promises, whether they success or fail,
// any you want to gather information about the outcome of each promise

/* Case-2:
// func1 -- resolve
// func2 -- reject
if both of the Promises is resolve, then only Promise.all() will be processed, then only comes to the handler, otherwise it goes to the catch block
if one of the Promise is not fullfilled, then Promise.all() , it will always go to catch block
*/

const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("Data from getData")
        }, 2000);
    });
};

const getError = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            reject("Error: Data is not available from getError")
        }, 2000);
    });
};

const getData1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("Data from getData1")
        }, 2000);
    });
};

Promise.allSettled([getData(), 
                    getError(),
                    getData1()
                  ])
                  .then(results => {
                        results.forEach( (result) => {
                            if(result.status === 'fulfilled'){
                                console.log("value: ", result.value);
                            }
                            else {
                                console.error("Reason for rejection: ", result.reason);
                            }
                        })
                  })