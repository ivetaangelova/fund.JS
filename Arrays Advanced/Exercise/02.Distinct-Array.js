function distinctArr(arr) {
  let withoutDuplicates = arr.filter((value, index, arr) => arr.indexOf(value) === index);
  if (withoutDuplicates.length == arr.length) {
    console.log(`No repeating elements`);
  } else {
    console.log(withoutDuplicates.join(` `));
  }

}
distinctArr([20, 8, 12, 13, 4, 4, 8, 5]);
distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArr([1, 2, 3, 4]);