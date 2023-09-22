function solve(num){
let numAsString= String(num);
let sum=0;
 for(let dig=0; dig<numAsString.length; dig++){
    sum+=Number(numAsString[dig]);
 }
 console.log(sum);
}
solve(245678);
solve(97561);
solve(543);