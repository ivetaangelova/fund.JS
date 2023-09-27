// • Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// • Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
// • Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price
// by 5%

function vacation (count, type, day){
let priceForPerson=0;
if(type =="Students"){
switch (day) {
    case "Friday":
        priceForPerson= 8.45;
        break;
    case "Saturday":
        priceForPerson= 9.80;
    break;
    default:
        priceForPerson=10.46
        break;
}
}else if(type=="Business"){
    switch (day) {
        case "Friday":
            priceForPerson= 10.90;
            break;
        case "Saturday":
            priceForPerson= 15.60;
        break;
        default:
            priceForPerson=16
            break;
    }
}else if(type=="Regular"){
    switch (day) {
        case "Friday":
            priceForPerson= 15;
            break;
        case "Saturday":
            priceForPerson= 20;
        break;
        default:
            priceForPerson=22.50;
            break;
    }
}
let totalPrice= priceForPerson*count;
if (count>=30&& type=="Students"){
    totalPrice*=0.85;
}else if(count>=100&&type=="Business"){
    totalPrice=(count-10)*priceForPerson
}else if((count>=10&&count<=20)&& type=="Regular"){
    totalPrice*=0.95;

}
console.log(`Total price: ${totalPrice.toFixed(2)}`)
}
vacation(40,
    "Regular",
    "Saturday"
    )