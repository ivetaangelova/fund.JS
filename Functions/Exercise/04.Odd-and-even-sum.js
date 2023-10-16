// You will receive a single number. You have to write a function, that returns the
//  sum of all even and all odd digits from that number. 
function oddAndEvenSum (num){
let sumOfOdd=0;
let sumOfEven=0;
function splitNumToDigits(num) {
    let numAsString=num.toString();
    let digits=[...numAsString].map(Number);
    return(digits);
}
let digits= splitNumToDigits(num);
for (let i = 0; i < digits.length; i++) {
    let currDigit=digits[i];
 if (currDigit%2==0) {
    sumOfEven+=currDigit;
 }else{
    sumOfOdd+=currDigit
 }
}
return(`Odd sum = ${sumOfOdd}, Even sum = ${sumOfEven}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);