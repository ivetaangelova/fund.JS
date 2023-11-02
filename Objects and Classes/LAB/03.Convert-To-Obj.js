function convertToObj(str){
    let obj = JSON.parse(str);
    let objAsArr= Object.entries(obj);
    let newObj=objAsArr.map(pairs => pairs.join(`: `));
    console.log(newObj.join(`\n`));
}
convertToObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}'
);
convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');