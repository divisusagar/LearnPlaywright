// Reverse a number
// 12345 => 54321
function reverseNumber(num){
    if (num >=0 & num <=9) {
        return num;
    }
    let reverseNum = 0
    while(num!=0){
        reverseNum = reverseNum * 10 + (num % 10); 
        num = Math.floor(arrNum/10);
    }
    return reverseNum;
}
console.log(reverseNumber(0));
console.log(reverseNumber(1));
console.log(reverseNumber(9));
console.log(reverseNumber(54));
console.log(reverseNumber(54321));