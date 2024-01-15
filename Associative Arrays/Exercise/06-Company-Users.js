function companyUsers(input){
//make obj to store company name and company users
let companyArchive={};

//take each input split it and add new key of company name and add id if key excist add value, 

for(let info of input){

let [companyName, employeeId] = info.split(` -> `);

if(companyName in companyArchive){
    if(companyArchive[companyName].includes(employeeId)){
        continue;
    }
companyArchive[companyName].push(employeeId)
}else {
    companyArchive[companyName]=[employeeId];
}
}
let companyArchiveKeys= Object.keys(companyArchive).sort((a,b)=> a.localeCompare(b));
for(let companyName of companyArchiveKeys){
    console.log(companyName);
    companyArchive[companyName].forEach(employeeId => {
        console.log(`-- ${employeeId}`);
    });
}
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    );