let isLoggedIn = true;
let userRole = "Guest";

if (isLoggedIn){
    if (userRole == "Admin") {
        console.log("Welcome Admin, you have all permissions");
    } else if (userRole == "Editor") {
        console.log("Welcome Editor - you have limited edited permissions");
    } else if (userRole == "Viewer") {
        console.log("Welcome Viewer - you have read-only permissions");
    } else {
        console.log("Welcome Guest - please wait until you get permissions to access")
    }
} else {
    console.log("You are not logged in");
}

let statusCode = 503;
if (statusCode === 200) {
    console.log("API is Working, OK");
} else if (statusCode === 404) {
    console.log("API is Not Working, 404");
} else {
    console.log("No status code match");
}

