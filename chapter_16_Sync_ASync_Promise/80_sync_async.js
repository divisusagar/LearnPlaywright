/* sync vs async behavior

In synchronous programming, JavaScript execute the code in linear and sequential manner.
Each line of code executed one after the other, and the program wait each operation to complete before moving to the next.
This can lead to "blocking" behavior, where long-running operations can cause the entire program or user interface to become unresponsive until thise operations finish

*/

console.log("Start");
for (let i = 0; i < 3000 ; i++){
    console.log(i);
}
console.log("End");

/* Async:
In asynchronous programming, JS allows tasks to be started and continue in the background while the program executes other code.
This is especially useful for tasks that my take some time, like fetching data from a server or reading files.

*/
console.log("Start");
setTimeout( () => {
    console.log('Timeout is done ...')
},10000 );
console.log("End")