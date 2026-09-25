/*
do...while
    - condition is checked after the block runs - so the loop body always executes at least once, even if the condition is false from the start
*/

let i = 10;
do {
    console.log(i);
    i++;
} while (i < 5);

// Compare the above do...while with the below while
/*
let j = 10;
while (j < 5) {
    console.log(j);
    j++;
}
*/

