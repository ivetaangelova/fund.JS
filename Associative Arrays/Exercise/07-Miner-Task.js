function minerTask (input){
let resources={};
for (let i = 0; i < input.length; i+=2) {
    let resource=input[i];
    let qty=Number(input[i+1]);
    if(resource in resources){
        resources[resource]+=qty;
    }else{
        resources[resource]=qty;
    }
}
let metalsEntries=Object.entries(resources);
for(let [resource, qty] of metalsEntries){
    console.log(`${resource} -> ${qty}`);
}
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    
    );
