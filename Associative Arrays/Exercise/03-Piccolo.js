function carPiccolo(input) {

    let parkedCars = {};

    for (let carInfo of input) {
        let [direction, carNum] = carInfo.split(`, `);
        if (direction == 'IN') {
            parkedCars[carNum] = `Parked`;
        } else if (parkedCars.hasOwnProperty(carNum)) {
            delete parkedCars[carNum];
        }

    }
    let parkedCarsKeys = Object.keys(parkedCars);

    if (parkedCarsKeys.length == 0) {
        console.log(`Parking Lot is Empty`);
        return;
    }
    let sortedParkedCars = parkedCarsKeys.sort((a, b) => {
        let numOfA = parseInt(a.match(/\d{4}/));
        let numOfB = parseInt(b.match(/\d{4}/));
        return numOfA - numOfB;
    });
    console.log(sortedParkedCars.join(`\n`));

}
carPiccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

carPiccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)