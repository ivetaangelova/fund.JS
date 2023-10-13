// Write a function, which prints all unique pairs in an array of 
// integers whose sum is equal to a given number.
function equalPairSumInArray(arr, sumOfEquals) {

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        for(let j = i+1; j<arr.length; j++){
            let nums=arr[j];
            if (num + nums==sumOfEquals) {
                console.log(arr[i], nums);
            }
        }
        
    }
}
// equalPairSumInArray([1, 7, 6, 2, 19, 23], 8)
// equalPairSumInArray([14, 20, 60, 13, 7, 19, 8], 27)
equalPairSumInArray([1, 2, 3, 4, 5, 6], 6)