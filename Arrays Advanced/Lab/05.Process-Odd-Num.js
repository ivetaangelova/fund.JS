// You are given an array of numbers. Write a function that prints the 
// elements at odd positions from the array,
// doubled and in reverse order.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.

function processOddNum(arr) {
    const result = arr.filter((_, i) => i % 2 == 1)
        .map(i => i * 2)
        .reverse()
        .join(` `);
        console.log(result);
}
processOddNum([10, 15, 20, 25]);
processOddNum([3, 0, 10, 4, 7, 3]);