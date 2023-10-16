// Write a function that receives a single integer number n and prints nxn matrix with that number.
function nXnMatrix(num) {
    for (let i = 0; i < num; i++) {
        let currRow= `${num} `.repeat(num);
        console.log(currRow);
        
    }
    
}
nXnMatrix(3);