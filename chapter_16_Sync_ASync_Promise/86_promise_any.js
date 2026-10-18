/*
It is used for handling multiple promises and resolving with the value of the first fulfilled/resolved promise, similar to Promise.race()
However, unlike Promise.race(), Promise.any() doesn't reject immediately when the first promise rejects;
instead, it waits until at least one promise fulfills/resolved.

*/

const getMessage = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            // resolve("get Message from API 1");
            reject("Error: get Message could not be fetched");
        }, 1000);
    })
};

const getUsers = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            reject("Error: User Data could not be fetched");
            // resolve("User Info is available from API 2");
        },500)
    });
};

const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            reject("Error: Product Info could not be fetched");
            // resolve("Product Info is available from API 3")
        },200)
    });
};

Promise.any([getMessage(), getUsers(), getProducts()])
       .then( result => {
            console.log("First successful result: ", result);
       })
       .catch(errors => {
            console.error("All promises rejected: ", errors);
       });

