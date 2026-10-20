// Here in TS, it is giving the error at the compile-time in the Editor  i.e. before run-time

//Program-1:
function getInfoTest() {
    if(firstName.length > 10) {
        console.log("PASS");
    }
    else {
        console.log("FAIL")
    }
}
getInfo();

console.log('*'.repeat(50));

//Program-2:
const user = {
    firstName: "Ram",
    age: 30
}
console.log(user.city);