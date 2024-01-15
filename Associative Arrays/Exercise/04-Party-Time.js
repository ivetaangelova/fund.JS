function party(input) {
    let guestsList = {
        vip: [],
        regular: []
    }
    let isParty = false;
    for (let name of input) {
        let isVip = name.match(/^\d/);//check if start with digit
        if (name == "PARTY") {
            isParty = true;
            break;
        }
        if (!isParty) {
            if (!isVip) {
                guestsList.regular.push(name);
            } else {
                guestsList.vip.push(name);
            }
        }
    }

    for (let i = input.indexOf("PARTY")+1; i< input.length; i++) {
     let guest=input[i];
     
     if(guestsList.vip.includes(guest)){
        guestsList.vip.splice(guestsList.vip.indexOf(guest), 1)
     }else if(guestsList.regular.includes(guest)){
        guestsList.regular.splice(guestsList.regular.indexOf(guest), 1)
     }
    }
    let totalCount= guestsList.regular.length+ guestsList.vip.length;
    console.log(totalCount);
    console.log(guestsList.vip.join(`\n`));
    console.log(guestsList.regular.join(`\n`));

}
party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])