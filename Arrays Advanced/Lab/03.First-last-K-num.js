function printFirstAndLastKElements(arr) {
    const k = arr[0];
    const numbers = arr.slice(1);

    const firstK = numbers.slice(0, k);
    const lastK = numbers.slice(-k);

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
printFirstAndLastKElements([2, 7, 8, 9])
printFirstAndLastKElements([3,6, 7, 8, 9])