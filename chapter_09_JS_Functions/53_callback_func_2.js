/* Callback Function:-
Definition: a callback is a function, you pass as an argument to another function, so that function can be call it later

async call/task - once this task is completed, then only callback function will be called
*/

// basic callback:
function greet(name, callback) {
    console.log(`Hello ${name}`); // normal/sync step/task
    callback();
}

function welcome(){
    console.log('Welcome...');
}

greet('Susagar',welcome);

// callback with async function
function printInfo(name, callback){
    console.log("Loading data ...........")
    // async function/task/step
    setTimeout( function(){
        console.log("Printing info for: ", name);
        callback('Please call me back...');
    }, 2000);
}

//callback function
function displayMessage(message) {
    console.log(message);
}
printInfo('Priya', displayMessage);

//
function fetchUserData(userId, callback) {
    setTimeout( function() {
        const users = {
            1: {id: 1, name: 'Susagar'},
            2: {id: 2, name: 'Pavan'}
        };
        const user = users[userId];
        console.log(user);
        if (user) {
            callback(null, user);
        }
        else {
            callback("User Not Found...", null);
        }
    }, 2000);
}
//callback function
function handleUserData(error, user) {
    if(error) {
        console.error('Error: ',error);
    }
    else {
        console.log("User: ",user);
    }
}
fetchUserData(1, handleUserData);
fetchUserData(2, handleUserData);
fetchUserData(3, handleUserData);