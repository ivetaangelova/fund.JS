// write 2- for loops for each side;
//compration for index and entry point
//compration for cheap or expensive
// check which bigger

function printValueOfDamgedItems(arr, entryP, type) {
    let leftSum = 0;
    let rightSum = 0;
  
    for (let i = 0; i < entryP; i++) {
      if (type == 'cheap' && arr[i] < arr[entryP]) {
        leftSum += arr[i];
      } else if (type == 'expensive' && arr[i] >= arr[entryP]) {
        leftSum += arr[i];
      }
    }
  
    for (let i = entryP + 1; i < arr.length; i++) {
      if (type == 'cheap' && arr[i] < arr[entryP]) {
        rightSum += arr[i];
      } else if (type == 'expensive' && arr[i] >= arr[entryP]) {
        rightSum += arr[i];
      }
    }
  
    let position = leftSum >= rightSum ? 'Left' : 'Right';

    let sum = Math.max(leftSum, rightSum);
  
    console.log(`${position} - ${sum}`);
  }
  
  printValueOfDamgedItems([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive")
  