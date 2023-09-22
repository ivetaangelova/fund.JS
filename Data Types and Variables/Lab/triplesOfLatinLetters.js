function solve(nAsString) {
    let num = Number(nAsString);
    let chars = `abcdefghijklmnopqrstuvwxyz`
    for (let n1 = 0; n1 < num; n1++) {
         
        for (let n2 = 0; n2 < num; n2++) {

            for (let n3 = 0; n3 < num; n3++) {
                console.log(chars[n1] + chars[n2] + chars[n3]);
            }
        }
    }
    // let latter=String.fromCharCode(97+ ...arguments.)
}
solve('3')