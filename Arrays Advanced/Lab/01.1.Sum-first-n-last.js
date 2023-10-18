function sumFirstAndLast (arr){
    let firstN= Number(arr.shift());
    let lastN= Number(arr.pop());
    console.log(firstN+lastN);
}
sumFirstAndLast([`2`, `4`, `8`])