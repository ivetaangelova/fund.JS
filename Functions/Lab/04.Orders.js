function printFinalPrice(product, count) {
    function checkProductPrice(product) {
        switch (product) {
            case `coffee`:
                price=1.5;
                break;
            case `coke`:
                price=1.4;
                break;
            case `snacks`:
                price=2;
                break;
            case `water`:
                price=1;
                break;
        }
        return (price.toFixed(2))
    }
    function calculateFinalPrice(count){
        return((checkProductPrice(product) * count).toFixed(2));
    }
    console.log(calculateFinalPrice(count));
}
printFinalPrice("coffee", 2 )
printFinalPrice("water", 5 )