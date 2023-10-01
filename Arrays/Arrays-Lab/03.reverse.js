
function reverse(n, arr) {
let array=[];
for(i=0; i<n;i++){
    array.push(arr[i]);
}
console.log(array.reverse().join(` `));
} 
// function reverse(n, arr){
//     console.log(arr.slice(0, n).reverse(). join(` `));
// }

reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
reverse(2, [66, 43, 75, 89, 47]);