function bombNums(sequence, bombInfo) {
    let [bomb, powerOfBomb] = bombInfo
    while (sequence.includes(bomb)) {
        let indexOfBomb = sequence.indexOf(bomb);
        let startIndex = Math.max(indexOfBomb - powerOfBomb, 0);
        let endIndex = powerOfBomb * 2 + 1;
        sequence.splice(startIndex, endIndex)
    }
    let sum = 0;
    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i];

    }
    console.log(sum);
}
bombNums(
    [4, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);
bombNums(
    [1, 4, 4, 2, 8, 9, 1],
    [9, 3]
);
bombNums(
    [1, 7, 7, 1, 2, 3],
    [7, 1]
);
bombNums(
    [1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
);