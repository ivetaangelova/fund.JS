// A palindrome is a number, which reads the same backward as forward, 
// such as 323 or 1001. Write a function, which receives an array of positive integers and checks
//  if each integer is a palindrome or not.

function checkIfPalindrome (arr){

    for (let i = 0; i < arr.length; i++) {
        let currNumAsString =String( arr[i]);
        let reversedNum=currNumAsString.split(``).reverse().join('');
        return(currNumAsString===reversedNum);  
    }
}
checkIfPalindrome([123,323,421,121]);
checkIfPalindrome([32,2,232,1010]);