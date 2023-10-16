function addAndSubtractPrint (num1, num2, num3){
    function add(num1, num2) {
        let result=num1+num2;
        return(result);
    }
    function subtract(a, b) {
        let result=a-b;
        return(result);

    }
    let addResult=add(num1,num2);
    let finalResult=subtract(addResult, num3);
    console.log(finalResult);
}
addAndSubtractPrint(23, 6, 10);
addAndSubtractPrint(-23, 6, 10);
