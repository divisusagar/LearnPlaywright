/*
Purpose:
    break    --- exist the loop immediately, regardless of the condition
    continue --- skips the rest of current iteration and moves to the next
    Both works inside for, while, do...while loops.
*/

// break
// 1 to 100: print "hi" when you see the multiplciation of 5 and break

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

let num = 1;
while(num <= 100) {
    console.log(num);
    if(num%5 === 0) {
        console.log("hi --- bye");
        break;
    }
    num++;
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0 ) break;
    console.log(i);
}

const browsers = ["chrome", "firefox", "edge", "IE"];
for (const browser of browsers) {
    // console.log(browser);
    if (browser == "edge"){
        console.log("launch edge...");
        break;
    }
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
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