console.log("----- START -----");

function add(a, b){
	return a+b;
}

let result;
for (let i = 0; i < 10 ; i++){
	result = add(i, i+1);
}

console.log("After 19 calls:", result);

console.log("----- END -----");