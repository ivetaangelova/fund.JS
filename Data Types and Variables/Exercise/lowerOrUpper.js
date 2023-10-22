function lowerOrUpper (char){
    let charNum=char.charCodeAt(0);
    if (charNum>=65 && charNum<=81){
        console.log("upper-case");
    }else{
        console.log("lower-case"); 
    }
}
lowerOrUpper('A');
lowerOrUpper('Q');
lowerOrUpper(`a`);
lowerOrUpper('q');