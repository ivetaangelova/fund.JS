// Write a function that finds the longest sequence of equal elements in an arr of numbers.
// If several longest sequences exist, print the leftmost one.

function maxSequenceOfEqualElements (arr){
let longestSq=[];
let currSq=[arr[0]];
for (let i = 1; i < arr.length; i++) {
if (arr[i]==arr[i-1]) {
    currSq.push(arr[i]);
}else{
    currSq=[arr[i]];
}
  if (currSq.length>longestSq.length) {
    longestSq= currSq.slice()
  }  
}
console.log(longestSq.join(` `));
}
// maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
// maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
// maxSequenceOfEqualElements([4, 4, 4, 4])
// maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])
