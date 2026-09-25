/*
TRUTHY -> Any String, Empty [] {}
TRUTHY -> Any + or - Number, except 0 i.e. 1, 2, 3, -5, -100
TRUTHY -> true
FALSY   -> 0
FALSY   -> false, 0, -0, 0n, "", null, undefined, NaN
*/

if ("susagar") {
    console.log("String Word - Truthy");
} else {
    console.log("String Word - Falsy");
}

if (106) {
    console.log("Number - Truthy");
} else {
    console.log("Number - Falsy");
}

if (true) {
    console.log("true - Truthy");
} else {
    console.log("true - Falsy");
}

if ([]) {
    console.log("Empty Array - Truthy");
} else {
    console.log("Empty Array - Falsy");
}

if ({}) {
    console.log("Empty Object - Truthy");
} else {
    console.log("Empty Object - Falsy");
}

console.log("==========");

let num = 0;
if (num) {
    console.log("0 - Truthy");
} else {
    console.log("0 - Falsy");
}

if (-0) {
    console.log("-0 Truthy");
} else {
    console.log("-0 Falsy");
}

if (0n) {
    console.log("0n - Truthy");
} else {
    console.log("0n - Falsy");
}


if ('') {
    console.log("Empty SingleQuote - Truthy");
} else {
    console.log("Empty SingleQuote - Falsy");
}

if ("") {
    console.log("Empty DoubleQuote - Truthy");
} else {
    console.log("Empty DoubleQuote - Falsy");
}

if (null) {
    console.log("null - Truthy");
} else {
    console.log("null - Falsy");
}

if (undefined) {
    console.log("undefined - Truthy");
} else {
    console.log("undefined - Falsy");
}

if (NaN) {
    console.log("NaN - Truthy");
} else {
    console.log("NaN - Falsy");
}

if (false) {
    console.log("false - Truthy");
} else {
    console.log("false - Falsy");
}
