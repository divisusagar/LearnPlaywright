/*

Promise.all() is commonly used when you want to perform multiple async operations in parallel and wait for all the items to complete before moving on.

*/

/* Case-1 
 fun1() -> resolve
 fun2() -> resolve
 fun3() -> resolve
*/

const function1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            // resolve("Data from function1")
            const data = [1, 2, 3, 4]
            resolve(data);

        }, 2000);
    });
};

const function2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
           //  resolve("Data from function2")
           const data = [5, 6, 7, 8];
           resolve(data);

        }, 2000);
    });
};

const function3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            // resolve("Data from function3")
            const data = [9, 10, 11, 12];
            resolve(data);

        }, 2000);
    });
};

Promise.all([function1(), 
             function2(), 
             function3()
            ])
            .then(dataArray => {
                console.log("All data from different functions: ", dataArray)
            })
            .catch(error => {
                console.log("Error in promise", error);
            })


            console.log('*'.repeat(50));

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

Promise.all([
    getData(), 
    getError()
    ])
    .then( dataArray => {
        console.log("All data fetched: ", dataArray);
    })
    .catch( error => {
        console.log("Error occured: ", error);
    })