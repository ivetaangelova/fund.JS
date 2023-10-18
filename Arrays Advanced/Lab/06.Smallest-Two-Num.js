// arr1=> arr1.sort((a, b) => a-b).slice(0,2).join(` `);
function printTwoSmallestNum(arr) {
   let result =arr.sort((a, b) => a-b)
   .slice(0,2)
   .join(` `);

   console.log(result);
    
}
printTwoSmallestNum([30, 15, 50, 5]);
printTwoSmallestNum([3, 0, 10, 4, 7, 3]);