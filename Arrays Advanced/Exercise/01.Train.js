
// The rest of the elements will be commands in the following format:

// · {passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)

// At the end, print the final state of the train (all the wagons separated by a space).

function train (arr){
    let wagons= arr.shift().split(` `).map(Number);
    let maxCapacity = arr.shift();
for (let arrElem of arr) {
   let elementsIfArr= arrElem.split(` `);
   if (elementsIfArr.length>1) {
    let newWagon= Number(elementsIfArr[1]);
    wagons.push(newWagon);
   }else{
    let boardingPassengers= Number(arrElem);
    for(let i =0; i<wagons.length;i++){
        let currWagon= wagons[i];
        if (currWagon+boardingPassengers<=maxCapacity) {
            wagons[i]+=boardingPassengers;
            break;
        }
    }

   }
    
}
console.log(wagons.join(` `));
}
// train(['32 54 21 12 4 0 23',

// '75',

// 'Add 10',

// 'Add 0',

// '30',

// '10',

// '75']);
train
(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6']);