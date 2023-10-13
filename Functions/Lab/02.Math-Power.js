function printMathPower (num, power){
    function myMathPow(num, power) {
        if (power === 0) {
            return 1;
        }
    
        let result = 1;
        for (let i = 0; i < Math.abs(power); i++) {
            result *= num;
        }
    
        if (power < 0) {
            return 1 / result;
        }
    
        return result;
    }
    console.log(myMathPow(num, power))
}
// printMathPower(2,8)
printMathPower(3,4)