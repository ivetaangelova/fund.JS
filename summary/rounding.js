function rounding (num, prec){  
    if(prec>15){
        prec=15
    }
    num =num.toFixed(prec);
    console.log(parseFloat(num))
}
rounding(3.1415926535897932384626433832795,2)