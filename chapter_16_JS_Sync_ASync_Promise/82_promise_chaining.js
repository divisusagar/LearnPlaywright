/*
Chaining: Promises can be easily chained together using .then(), allows you to sequence asynchronous operations. This is often referred to as "Promise Chaining".

*/ 
function getEvenNumber(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(value %2 === 0){
                resolve(value);
            }
            else {
                reject(new Error('Value is not even number'));
            }
        }, delay);
    });
}

// promise chaining
getEvenNumber(4, 1000)
    .then(result => {
        console.log("Step 1: Getting the result with even number: ", result);
        return getEvenNumber(7, 2000);
    })
    .then(result => {
        console.log("Step2: getting the result with even number: ", result);
    })
    .catch(error => {
        console.error("Promise chain error: ", error.message);
    })