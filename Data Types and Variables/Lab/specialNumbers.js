function solve(n){

    for(let currNum=1; currNum<=n; currNum++){
        let sum=0;
        let num=currNum;
        while(num>0){
            let lastDig=num%10;
            sum+=lastDig;
            num=parseInt(num/10);

        }
        if(sum==5 || sum==7 || sum==11){
            console.log(`${currNum} -> True`);
        }else{
            console.log(`${currNum} -> False`);
        }
    }
}
solve(15);

  