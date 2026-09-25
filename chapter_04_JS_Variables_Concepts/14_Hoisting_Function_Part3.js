greet();
var greet = function(){
    console.log("Hello ! Hai");
}

/*
// ---- Compilation phase ----
var greet;              // ← only the name is hoisted, set to undefined
                          //   (the function body is NOT moved up)

// ---- Execution phase — runs your actual lines, top to bottom ----
greet();                 // greet is currently undefined — NOT a function yet

greet = function() {     // NOW, at this exact line, the function is created
  console.log("Hello!"); //   and assigned to greet
};

*/

/*
// What JS internally treats it as:
var greet;              // hoisted (declaration only)
greet();                // undefined() → TypeError: greet is not a function
greet = function() {    // assignment happens here, too late
  console.log("Hello!");
};
*/