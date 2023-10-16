// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// // •	It should have at least 2 digits 

// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"



function passwordValidator(pass) {
    let IsValidLength = checkLength(pass);
    let isValidChars = CheckIfOnlyLetersDigits(pass);
    let isValidDigits = checkIfTwoDigits(pass);

    if (isValidChars && isValidDigits && IsValidLength) {
        console.log("Password is valid");
    }
    function checkLength(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
            return false;
        }
    }
    function CheckIfOnlyLetersDigits(pass) {
        for (let char of pass) {
            let code = char.charCodeAt(0);
            
            if (
                !((code >= 48 && code <= 57) ||
                (code >= 65 && code <= 90) ||
                (code >= 97 && code <= 122))
                ) {
                console.log("Password must consist only of letters and digits");
                return false;
            }

        }
        return true;
    }
    function checkIfTwoDigits(pass) {
        let digCount = 0;
        for (char of pass) {
            let code = char.charCodeAt(0);
            if (code >= 48 && code <= 57) {
                digCount++;
            }
        }
        if (digCount >= 2) {
            return true;
        } else {
            console.log("Password must have at least 2 digits");
            return false;
        }
    }

}
// passwordValidator('logIn');
passwordValidator('MyPass123');
console.log(`-------------------`);
passwordValidator('Pa$s$s');