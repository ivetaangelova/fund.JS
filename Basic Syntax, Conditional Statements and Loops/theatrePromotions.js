// function theatrePromotions(day, age) {
//    let price = ""

//     if (age >= 0 && age <= 18) {
//         switch (day) {
//             case `Weekday`:
//                 price = 12; break;
//             case `Weekend`:
//                 price = 15; break;
//             case `Holiday`:
//                 price = 5; break;
//         }
//         console.log(price+`$`)

//     } else if (age > 18 && age <= 64) {
//         switch (day) {
//             case `Weekday`:
//                 price = 18; break;
//             case `Weekend`:
//                 price = 20; break;
//             case `Holiday`:
//                 price = 12; break;
//         }
//         console.log(price+`$`)
//     } else if (age > 64 && age <= 122) {
//         switch (day) {
//             case `Weekday`:
//                 price = 12; break;
//             case `Weekend`:
//                 price = 15; break;
//             case `Holiday`:
//                 price = 10; break;
//         }
//         console.log(price+`$`)
//     }else{
//         console.log(`Error!`)
//     }
   
// }
// theatrePromotions('Holiday', 15)
function theatrePromotions(day,age){
    const prices = {
        0: { Weekday: 12, Weekend: 15, Holiday: 5 },
        1: { Weekday: 18, Weekend: 20, Holiday: 12 },
        2: { Weekday: 12, Weekend: 15, Holiday: 10 },
    }
 if (age>=0 && age<=122){
    const ageGroup = age<=18 ? 0 : age <=64 ? 1 : 2;
    const price= prices[ageGroup][day];
    if (price !== undefined) {
        console.log(price + "$");
    } else {
        console.log("Error!");
    }
} else {
    console.log("Error!");
}
 }
 theatrePromotions('Holiday', 122)
