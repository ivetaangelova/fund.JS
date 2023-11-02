// function printObj (obj){
// let objAsArr= Object.entries(obj);
// for(let pairs of objAsArr){
//     let result =pairs.join(` -> `);
//     console.log(result);

// }
// }
function printObj(obj) {
    let objAsArr= Object.entries(obj);
    let newObj=objAsArr.map(pairs => pairs.join(` -> `));
    console.log(newObj.join(`\n`));
}
printObj({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
   })