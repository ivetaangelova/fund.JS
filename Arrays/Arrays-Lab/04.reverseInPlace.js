function swap(arr){
    let n= arr.length
    for(let i=0; i<Math.floor(n/2); i++){
        let temp= arr[i];
        arr[i]=arr[n-i-1];
        arr[n-i-1]=temp;
    }
    console.log(arr.join(` `));
}
swap(['33', '123', '0', 'dd']);
swap(['abc', 'def', 'hig', 'klm', 'nop']) ;
swap(['a', 'b', 'c', 'd', 'e']);
