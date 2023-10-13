function printResultOfGrade(grade) {
    function formatGrade(grade) {
        if (grade < 3) {
            return ("Fail");
        } else if (grade < 3.5) {
            return ('Poor')
        } else if (grade < 4.5) {
            return ('Good')
        } else if (grade < 5.5) {
            return ('Very good')
        } else {
            return ('Exelent')
        }
    }
    function checkGrade(grade) {
        if (grade < 3) {
            return (`(${2})`)
        } else {
            return (`(${grade.toFixed(2)})`);
        }
    }
    console.log(`${formatGrade(grade)} ${checkGrade(grade)} `)
}
printResultOfGrade(2.50)
printResultOfGrade(3.49)
printResultOfGrade(3.51)
printResultOfGrade(5)
// • < 3.00 - "Fail"
// • >= 3.00 and < 3.50 - "Poor"
// • >= 3.50 and < 4.50 - "Good"
// • >= 4.50 and < 5.50 - "Very good"
// • >= 5.50 - "Excellent"
