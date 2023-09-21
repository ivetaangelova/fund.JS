function printNsum(start, end) {
    let numAsString = "";
    let sum = 0;
    for (let i = start; i <= end; i++) {
        numAsString += i + " ";
       
        sum += i
    }
    console.log(numAsString);
    console.log(`Sum: ${sum}`);
}
printNsum(5, 10)