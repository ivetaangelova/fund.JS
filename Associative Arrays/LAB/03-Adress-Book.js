function createAdressBook (input){
    let adressBook={}
for(let personInfo of input){
    let [name, adress]= personInfo.split(`:`);
    adressBook[name]=adress;
}
let adressBookKeys= Object.keys(adressBook).sort((a, b) => a.localeCompare(b));
for(let name of adressBookKeys){
    console.log(`${name} -> ${adressBook[name]}`);
}
}
// createAdressBook(['Tim:Doe Crossing',
// 'Bill:Nelson Place',
// 'Peter:Carlyle Ave',
// 'Bill:Ornery Rd']
// );
createAdressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);