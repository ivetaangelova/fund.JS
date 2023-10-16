function loadingBar (num){
    let loadingReadyPoints=num/10;
    let loadingNotRdyPoints=10-loadingReadyPoints;
    let ready= `%`.repeat(loadingReadyPoints);
    let notReady= `.`.repeat(loadingNotRdyPoints);
if (num==100){
    console.log(`${num}% Complete!`);
    console.log(`[${ready}]`);
}else{
console.log(`${num}% ` + `[${ready+notReady}]`);
console.log(`Still loading...`);
}    

}
loadingBar(30);
// 30% [%%%.......]
// Still loading...

loadingBar(50);
loadingBar(100);
//100% Complete!
//[%%%%%%%%%%]
