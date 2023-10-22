
function houseParty(list) {
    let guestsList = [];
    for (let i = 0; i < list.length; i++) {

        const elements = list[i].split(` `);
        let name = elements[0];
        let comand = elements[2];
        if (comand == `going!`) {
            if (!guestsList.includes(name)) {
                guestsList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (guestsList.includes(name)) {
                let notGoing = guestsList.indexOf(name);
                guestsList.splice(notGoing, 1);

            } else {
                console.log(`${name} is not in the list!`);;
            }
        }
    }
    console.log(guestsList.join(`\n`));

}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);