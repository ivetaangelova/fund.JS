function processEmployees(input) {
    const n = Number(input[0]);

    const isValidName = /^[A-Z][a-z]+ [A-Z][a-z]+/
    const isValidPosition = /#+[A-Z][a-zA-Z]+(?:&[A-Z][a-zA-Z]+)?(?:&[A-Z][a-zA-Z]+)?/
    const isValidCompany = /[0-9]{2}[A-Za-z]+ *(JSC|Ltd\.)/
for(let i=1; i<=n; i++){
    let employeeData=input[i];
let name=employeeData.match(isValidName);
let position=employeeData.match(isValidPosition);
let company=employeeData.match(isValidCompany);

if(name && company && position){
    let clearPosition = position[0].replace(/[^A-Za-z&]/g, '');
    let cleanedPosition= clearPosition.split(`&`).join(` `);
    let cleanedCompany = company[0].replace(/[0-9]{2}/g, ``)
 
console.log(`${name[0]} is ${cleanedPosition} at ${cleanedCompany}`);
}
}
}
processEmployees(["4",
"Tanya Petrova##Dental&Assistants25Health Ltd.",
"Kalina Mihova#Occupational&Therapy&Aides00Health Ltd.",
"George Fill####Orderlies99Health JSC",
"Lily petrova#Speech&Pathology&Assistants60Health Ltd."])




