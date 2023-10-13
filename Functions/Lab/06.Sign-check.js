function printSignOfResult(num1, num2, num3) {
    function checkProductSign(num1, num2, num3) {
        let numCount = [num1, num2, num3];
        let negativeCount = 0;
        for (let num of numCount) {
            if (num < 0) {
                negativeCount++;
            }
        }
        return negativeCount % 2 === 1 ? "Negative" : "Positive";
    }
    console.log(checkProductSign(num1,num2,num3)); 
}
printSignOfResult(5,
    12,
    -15
    )
printSignOfResult(-6,
    -12,
    14
    )
printSignOfResult(-5,
    1,
    1)