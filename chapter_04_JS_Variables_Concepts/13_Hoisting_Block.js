let x = "global";
if (true){
    // TDZ for block-scoped "x" starts here
    // console.log(x);  // ReferenceError: Cannot access 'c' before initialization
    let x = "block";    // TDZ ends
    console.log(x);     // Output: block

}

