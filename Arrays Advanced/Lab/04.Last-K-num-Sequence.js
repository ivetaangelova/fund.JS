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