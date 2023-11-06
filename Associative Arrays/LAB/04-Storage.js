function createStorage(input){
let storage={};
for(let info of input){
    let [product, qty]=info.split(` `);
    qty=Number(qty);
    if(product in storage){
        storage[product]+=qty;
    }else{
        storage[product]=qty
    }
}
let storageEntries=Object.entries(storage);
storageEntries.map(([product, qty])=>{
    console.log(`${product} -> ${qty}`);
})
}
createStorage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);