let stores={
    ke1: [1, 2, 3] ,
    key2: [4, 5 ,6]
}
let keys= Object.keys(stores)
for(let key of keys){
if(stores[key].includes(2)){
    console.log(`Valid`);
}
}
