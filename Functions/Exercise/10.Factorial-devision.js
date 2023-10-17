// Write a function that receives two integer numbers. Calculate the factorial
//  of each number. Divide the first result by the second and print
//  the division formatted to the second decimal point.
function resultFactorialDevision(num1, num2) {
    function factorialDevision(num) {
        let result=1;
        for (let multiplier = 1; multiplier <= num; multiplier++) {
          result= result * multiplier;
        }
        return(result);
    }
    let num1factorial=factorialDevision(num1);
    let num2factorial=factorialDevision(num2);
    let result=num1factorial/num2factorial;
    console.log(result.toFixed(2));
}
resultFactorialDevision(5, 2);
resultFactorialDevision(6, 2);
