// You are given two integers n and k. Write a function that generates and prints the following sequence:
// • The first element is 1.
// • Every following element equals the sum of the previous k elements.
// • The length of the sequence is n elements.
// The input comes as two number arguments. The first element represents the number n, and the second – the
// number k.
// The output is printed on the console on a single line, separated by space.

function LastK_numSequence(n, k) {
    let sequence = [1];
    let summ = 1;
    for (let curr = 1; curr < n; curr++) {
        let start = Math.max(0, curr - k);
        let end = curr - 1;
      
        for (let j = start; j < end; j++) {
        summ+=sequence[j];
        
       }
       sequence.push(summ);

    }
    console.log(sequence.join(` `));
}
LastK_numSequence(6, 3);
LastK_numSequence(8, 2);