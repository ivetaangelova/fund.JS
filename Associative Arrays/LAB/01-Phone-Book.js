function phoneBookStr (listOfUsers){
let phoneBook={};
for(let user of listOfUsers){
    let [userName, userNumber]= user.split(` `);
    phoneBook[userName]= userNumber;
}
let phoneBookEntries = Object.entries(phoneBook);

phoneBookEntries.map(([userName, userNumber]) => {
  console.log(`${userName} -> ${userNumber}`);
})
}
phoneBookStr(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);
