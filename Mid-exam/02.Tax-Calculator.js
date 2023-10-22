function taxCalculator(arr) {
    let information = arr[0].split(`>>`);
    let taxCollected=0;
    for (let i = 0; i < information.length; i++) {
        let tokens = information[i].split(` `);
        let type = tokens[0];
        let years = Number(tokens[1]);
        let kilometers = Number(tokens[2]);
        let tax=0;
        let increases=0
        switch (type) {
            case "family":
                tax=50-(years*5);
                increases= Math.floor(kilometers/3000) * 12;
                tax+=increases;
                break;
            case "heavyDuty":
                tax=80-(years*8);
                increases=Math.floor(kilometers/9000) *14;
                tax+=increases;
                break;
            case "sports":
                tax=100-(years*9);
                increases=Math.floor(kilometers/2000) *18;
                tax+=increases;
                break;
            default:
                console.log("Invalid car type.");
                continue
        }
        console.log(`A ${type} car will pay ${tax.toFixed(2)} euros in taxes.`);
       taxCollected+=tax;
    }
    console.log(`The National Revenue Agency will collect ${taxCollected.toFixed(2)} euros in taxes.`);  

}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])