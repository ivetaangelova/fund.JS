function equalArrays (arr1AsStr, arr2AsStr){
    let arr1= arr1AsStr.map(Number);
    let arr2=arr2AsStr.map(Number);
let boolean=true;
let sum=0;
let index=0;
for (let i=0;i<arr1.length; i++){
    if(arr1[i]==arr2[i]){
        sum+=arr1[i];
    }else{
        boolean=false;
        index=i;
        break;
    }
}
if (boolean==true){
    console.log(`Arrays are identical. Sum: ${sum}`);
}else{
    console.log(`Arrays are not identical. Found difference at ${index} index`);

}
}
// equalArrays(['10','20','30'],
// ['10','20','30'])
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']
)
equalArrays(['1'], ['10'])