function solve (input){

    let listOfEmployee={};

    for(let name of input){
        let personalNum=name.length;
        listOfEmployee[name] = personalNum;
    }
   for(let key in listOfEmployee){
    console.log(`Name: ${key} -- Personal Number: ${listOfEmployee[key]}`)
   }

// Object.entries(listOfEmployee).forEach(([name, personalNum])=>
// console.log(`Name: ${name} -- Personal Number: ${personalNum}`)
// )
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);

    // solve([
    //     'Samuel Jackson',
    //     'Will Smith',
    //     'Bruce Willis',
    //     'Tom Holland'
    //     ]
    //     )