function storeProvision (inventory, delivery){
    let warehouse={};
for (let i = 0; i < inventory.length; i+=2) {
    let productName=inventory[i];
    let qty= Number(inventory[i+1]);
    warehouse[productName]= qty;
}

for (let i = 0; i < delivery.length; i+=2) {
    let productName=delivery[i];
    let qty= Number(delivery[i+1]);
    if(warehouse.hasOwnProperty(productName)){ //if (product in warehouse)
        warehouse[productName]+= qty;
    }else{
        warehouse[productName]= qty;
    }
}

for(let productName in warehouse){
    console.log(`${productName} -> ${warehouse[productName]}`);
}
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ]
    );

    // storeProvision([
    //     'Salt', '2', 'Fanta', '4', 'Apple', '14',
    //     'Water', '4', 'Juice', '5'
    //     ],
    //     [
    //     'Sugar', '44', 'Oil', '12', 'Apple', '7',
    //     'Tomatoes', '7', 'Bananas', '30'
    //     ])