function meetingGrafic(arrMettings){
let sqeduelMeetings={};
for(let request of arrMettings){
    let [dayOfWeek, name]= request.split(` `);
    if(dayOfWeek in sqeduelMeetings){
console.log(`Conflict on ${dayOfWeek}!`);
    }else{
    sqeduelMeetings[dayOfWeek]=name;
    console.log(`Scheduled for ${dayOfWeek}`);
    }
}
let sqeduelMeetingsEtries=Object.entries(sqeduelMeetings);
sqeduelMeetingsEtries.map(([name, dayOfWeek])=>{
    console.log(`${name} -> ${dayOfWeek}`);
})
}
meetingGrafic(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);
// meetingGrafic(['Friday Bob',
// 'Saturday Ted',
// 'Monday Bill',
// 'Monday John',
// 'Wednesday George']
// );