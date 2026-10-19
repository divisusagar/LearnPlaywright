// Program-1:
// async function without await
async function f1() {
    console.log("This is async function without await step, but has explicit simple return");
    return 42; // always returns a promise(resolve) on top of 42
}

f1()
.then(result => {
    console.log(result);
})

// Program-2:
// async function without await, but with error
async function f2() {
    console.log("This is a async fundtion without await step, but has explicit Error throw");
    throw new Error("ERROR: Unexpected error occured"); // returns promise(reject)
}
f2()
.catch(error => {
    console.error(error.message);
})

// Program-3:
// async function with resolved/rejected promise
function getInfo(){
    return new Promise((resolve, reject) => {
        const randomNum = Math.random();
        setTimeout(() =>{
            if(randomNum < 0.5) {
                resolve(randomNum);
            }
            else {
                reject(new Error("Wrong value error"))
            }

        },2000);
    });
}
// create async function  with is calling getInfo()
async function getNumberInfo() {
    try {
        const result = await getInfo();
        console.log("Random result: ", result);
    }
    catch(error) {
        console.error(error.message);
    }
}
//call getNumberInfo();
getNumberInfo();
