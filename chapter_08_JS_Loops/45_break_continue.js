/*
Purpose:
    break    --- exist the loop immediately, regardless of the condition
    continue --- skips the rest of current iteration and moves to the next
    Both works inside for, while, do...while loops.
*/


for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0 ) continue;
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0 ) break;
    console.log(i);
}