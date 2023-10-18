// You will receive an array of products. Print a
//  numbered array of all the products
//  ordered by name.

function orderListByName (arr){
arr.sort((a, b) => a.localeCompare(b));
let arrList=[];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const order= `${i+1}.` +element
    arrList.push(order);
}
console.log(arrList.join(`\n`));
}
orderListByName(['Potatoes',`ananas`, 'Tomatoes', 'Onions', 'Apples']);
// 1.Apples
// 2.Onions
// 3.Potatoes
// 4.Tomatoes
orderListByName(['Watermelon', 'Banana', 'Apples'] );1