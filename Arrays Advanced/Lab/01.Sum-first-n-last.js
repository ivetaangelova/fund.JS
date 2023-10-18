// Write a function that calculates and prints the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console.

function sumFirstAndLast(arr) {
    let firstNum= Number(arr[0]);
    let lastNum= Number(arr[arr.length-1]);
    console.log(firstNum+lastNum);
}
sumFirstAndLast(['20', '30', '40'] )
sumFirstAndLast([`10`, `2`, `10`])