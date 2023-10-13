function solve (num){
    let daysOfWeek= [
        'Monday',
        `Tuesday`,
        `Wednesday`,
        `Thursday`,
        `Friday`,
        `Saturday`,
        `Sunday`
    ]
    if (num<=7 && num>=1){
        console.log(daysOfWeek[num-1]);
    }else{
        console.log("Invalid day!");
    }
}
solve(8)