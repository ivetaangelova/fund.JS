function processOddNum(arr) {
    const result = arr.filter((_, i) => i % 2 == 1)
        .map(i => i * 2)
        .reverse()
        .join(` `);
        console.log(result);
}
processOddNum([10, 15, 20, 25]);
processOddNum([3, 0, 10, 4, 7, 3]);