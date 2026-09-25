let status_code = "Open";

function getUserStatus(){
    console.log("Welcome to getUserStatus function");
    // TDZ for block-scoped "status_code" starts here
    
    console.log(status_code);
    let status_code = "Active";
    console.log(status_code);
}
getUserStatus();
console.log(status_code);
