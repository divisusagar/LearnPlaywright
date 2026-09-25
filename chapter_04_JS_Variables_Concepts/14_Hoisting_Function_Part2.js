greet();

function greet(){
    console.log("Hello !");
}

/*

// ---- Compilation phase ----
function greet() {          // ← entire function moved to the top, complete
  console.log("Hello!");
}

// ---- Execution phase starts now, running your code top to bottom ----
greet();  // this is really line 1, but greet() already fully exists above it

*/