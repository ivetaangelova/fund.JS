function perfectNum (num){
let aliquotSum=0;
for (let dev=1; dev<num; dev++) {
    if (num%dev==0) {
        aliquotSum+=dev;
    }
}
if (aliquotSum==num) {
   console.log("We have a perfect number!");
}else{
    console.log("It's not so perfect.");
}
}
perfectNum(6);
perfectNum(28);
perfectNum(1236498);