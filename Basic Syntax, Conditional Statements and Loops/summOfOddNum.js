function summOfOddNum (n){
    let brick=1;
    let summ=0;
    for(let i=1;brick<=n;i+=2){
            console.log(i);
            brick++;
            summ= summ + i;
    
    }
 console.log(`Sum: ${summ}`)
}summOfOddNum(3)