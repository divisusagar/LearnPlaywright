async/await => modern way if handling async calls/tasks/stepo
               used with Promises
               async keyword to use before function name
               await keyword to use before async steps

Eg-1: Proper way of writing async function with await operations
async function functionName(){
 step1 - sync task - no need of await
    console.log("Hello");
 step2 - async task - need await
    await const getUserData = getUserDatafromAPI();
 step3 - async task - need await
    await const processedData = processUserData(getUserData);
 step4 - sync task - no need of await
    displayUserData(processedData);
}

Eg-2: await keyword of operations/tasks shouldn't be used inside the non async function
function functionName() {                               // Regular sync function (without async)
    step1 - sync task - no need of await
        console.log("Hello");
    step2 - async task - need await
        await const getUserData = getUserDatafromAPI(); // Invalid: we can't use await keyword, inside a function without having async
}

Eg-3:
async function functionName() {
    return 42; // valid
               // wrapped 42 in the resolved/fulfilled promise and then return
}

async function functionName() {
    throw new Error("errorMsg"); // valid
                                 // wrap the error in a rejected promise and return
}

Eg-4:
async function functionName() {
    - doesn't have a await (async) step/task // YES - valid
}

Eg-5:
function f1() {
    return new Promise( (resolve, reject) => {return 42;} );
}
async function f2() {
    await f1(); 
        //here f1() is returning a promise i.e. its a async operation, so we must use await while calling the f1();
        // hence we added await, then f2() must become/add the async
}
