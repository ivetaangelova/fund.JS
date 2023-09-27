function GBPtoUSD (GBP){
    // Write a function that converts British pounds to dollars formatted to the 3rd decimal point.
    // • 1 British Pound = 1.31 Dollars
let USDfromGBP= (GBP*1.31).toFixed(3);
console.log(USDfromGBP);
}
GBPtoUSD(80);
GBPtoUSD(39);