function solve(inputString) {

    // Initialize an empty string to store the result
    let result = '';

    // Iterate through each character in the inputString
    for (let i = 0; i < inputString.length; i++) {
        // Append the current character to the result if it's different from the previous character
        if (i === 0 || inputString[i] !== inputString[i - 1]) {
            result += inputString[i];
        }
    }

    console.log(result);
}

solve(`aaasssddddcccceeee`)