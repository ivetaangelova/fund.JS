function simpleCalculator(num1, num2, operator) {
    function calculateResult(a, b, operator) {
        let result = 0;
        switch (operator) {
            case 'subtract':
                result = a - b;
                break;
            case 'add':
                result = a + b;
                break;
            case 'divide':
                result = a / b;
                break;
            case 'multiply':
                result = a * b;
                break;
        }
        return(result);
    }
    console.log(calculateResult(num1, num2, operator));
}
simpleCalculator(5, 5, 'multiply')
simpleCalculator(40, 8, 'divide')
simpleCalculator(12, 19, 'add')
simpleCalculator(50, 13, 'subtract')