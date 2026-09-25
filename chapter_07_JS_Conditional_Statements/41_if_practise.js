/*
TRUTHY -> Any + or - Number, except 0 i.e. 1, 2, 3, -5, -100
FALSY   -> 0
TRUTHY -> Any String
*/

let num = 0;
if (num) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if ('') {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if ("") {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if (null) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if (undefined) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if (NaN) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if ("susagar") {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if (106) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if (true) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

if (false) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}