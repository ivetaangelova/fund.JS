function convertToJSON(firstName, lastName, hairColor) {
    let obj = {};
    obj.name = firstName;
    obj.lastName = lastName;
    obj.hairColor = hairColor;

    let result = JSON.stringify(obj);
    console.log(result);

}
convertToJSON('Peter', 'Smith',
    'Blond');


convertToJSON('George', 'Jones',
    'Brown');