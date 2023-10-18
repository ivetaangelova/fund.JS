function arrayManipulation(arr) {
    let manipulatedArr = arr.shift().split(` `).map(Number);
    for (let i = 0; i < arr.length; i++) {
        const elements = arr[i].split(` `);
        const command = elements[0];
        const num = Number(elements[1]);

        switch (command) {
            case `Add`:

                manipulatedArr.push(num);
                break;

            case `RemoveAt`:
                manipulatedArr.splice(num, 1)
                break;

            case `Insert`:

                let index = Number(elements[2]);
                manipulatedArr.splice(index, 0, num)
                break;

            default:
               manipulatedArr= manipulatedArr.filter((x) => x !== num)
                break;
        }

    }
    console.log(manipulatedArr.join(` `));
}

arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);

arrayManipulation(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
);