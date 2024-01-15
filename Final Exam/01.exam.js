function solve(input) {
    let initialString = input[0];

    for (let i = 1; i < input.length; i++) {
        const command = input[i].split(' ');

        if (command[0] === 'Easter') {
            break;
        }

        switch (command[0]) {
            case 'Replace':
                initialString = initialString.split(command[1]).join(command[2]);
                console.log(initialString);
                break;
            case 'Remove':
                initialString = initialString.split(command[1]).join('');
                console.log(initialString);
                break;
            case 'Includes':
                console.log(initialString.includes(command[1]));
                break;
            case 'Change':
                initialString = (command[1] === 'Lower') ? initialString.toLowerCase() : initialString.toUpperCase();
                console.log(initialString);
                break;
            case 'Reverse':
                const startIndex = parseInt(command[1]);
                const endIndex = parseInt(command[2]);
                if (startIndex >= 0 && endIndex < initialString.length && startIndex <= endIndex) {
                    const reversedSubstring = initialString.substring(startIndex, endIndex + 1).split('').reverse().join('');
                    console.log(reversedSubstring);
                } else {
                    continue;
                }
                break;
        }
    }
}
solve(['Easterbscomming',
'Replace b I',
'Remove commIng',
'Change Upper',
'Reverse 0 5',
'Easter'])



