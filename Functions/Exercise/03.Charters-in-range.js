// Write a function that receives two characters and prints on a single line all
//  the characters in between them according to the ASCII code. Keep in mind that the second character code
//  might be before the first one inside the ASCII table.
function charactersInRange(char1, char2) {
    let char1ToASCII = char1.charCodeAt(0);
    let char2ToASCII = char2.charCodeAt(0);
    let storageOfChars = '';

    if (char1ToASCII <= char2ToASCII) {
        for (let i = char1ToASCII + 1; i < char2ToASCII; i++) {
            let backToChar = String.fromCharCode(i);
            storageOfChars += backToChar + ' ';
        }
    } else {
        for (let i = char2ToASCII + 1; i < char1ToASCII; i++) {
            let backToChar = String.fromCharCode(i);
            storageOfChars += backToChar + ' ';
        }
    }

    console.log(storageOfChars);
}

charactersInRange('a', 'd');
charactersInRange('#', ':');

