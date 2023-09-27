// function monthPrinter(num) {
//     month = ""
//     if (num >= 1 && num <= 12) {
//         switch (num) {
//             case `1`:
//                 month = `January`
//                 break;
//             case `2`:
//                 month = `February`
//                 break;
//             case `3`:
//                 month = `March`
//                 break;
//             case `4`:
//                 month = `April`
//                 break;
//             case `5`:
//                 month = `May`
//                 break;
//             case `6`:
//                 month = `June`
//                 break;
//             case `7`:
//                 month = `July`
//                 break;
//             case `8`:
//                 month = `August`
//                 break;
//             case `9`:
//                 month = `September`
//                 break;
//             case `10`:
//                 month = `October`
//                 break;
//             case `11`:
//                 month = `November`
//                 break;
//             case `12`:
//                 month = `December`
//                 break;

//         }
//     console.log(month)
//     } else {
//         console.log("Error!")
//     }
// }
// monthPrinter(`0`)
function monthPrinter1 (num){
    const month = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
if ( num>=1 && num<=12){
    console.log(month[num - 1]);
}else {
    console.log(`Error!`);
}
}
monthPrinter1(`18`)