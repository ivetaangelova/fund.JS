function solve(num){
    let numAsString= num.toString();
    let sym=0;
    for(i=0; i<numAsString.length; i++){
    sym+= Number(numAsString[i]);
    }
    let result= sym.toString().includes('9');
    console.log(result? `${num} Amazing? True` : `${num} Amazing? False`)
}
solve(999)