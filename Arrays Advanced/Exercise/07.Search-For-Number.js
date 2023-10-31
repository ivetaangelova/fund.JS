// function searchNum(arr, elements) {
// const [toTake, deleteCount,searchNum] = elements;
// const newArr= arr.slice(0, toTake);
// newArr.splice(0, deleteCount);
// let occursCount=0;
// for(num of newArr){
//     if(num==searchNum){
//         occursCount++;
//     }
// }
// console.log(`Number ${searchNum} occurs ${occursCount} times.`)
// }
function searchNum(arr, elements) {
    const [newArrLenght, remove, number] = elements;
    const newArr = arr.slice(0, newArrLenght);
    newArr.splice(0, remove);
    const occursCount = newArr.filter(x => x == number).length;
    console.log(`Number ${number} occurs ${occursCount} times.`);
}
searchNum(
    [7, 1, 5, 8, 2, 7],
    [3, 1, 5]
);
searchNum(
    [5, 2, 3, 4, 1, 6],
    [5, 2, 3]
);