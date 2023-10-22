// function sortBy2Criteria(arr) {
// arr.sort((a , b)=>{
//     let lengthComparison =a.length - b.length;
//     if (!lengthComparison==0) {
//         return lengthComparison;
//     }else{
//         return a.localeCompare(a, undefined, { sensitivity: 'base' });
//     }
// })
// console.log(arr.join(`\n`));
// }

function sortBy2Criteria(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(arr.join(`\n`));
}
sortBy2Criteria(['alpha',
    'beta',
    'gamma']
);
sortBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);
