// production will be for 30days - for loop <=30
//every 3rd day only 75% production; if not integer to lower
//calculate how much more or less you peoduce to other factory (in percentage)
function biscFactory(arr) {
    let [biscPerWorker, workersCount, compFactProduce] = arr
    let productionPerDay = biscPerWorker * workersCount;
    let everyThirdDayProduction = Math.floor(productionPerDay * 0.75);
    let biscSum = 0;
    for (let i = 1; i <= 30; i++) {

        if (i % 3 == 0) {
            biscSum += everyThirdDayProduction;
        } else {
            biscSum += productionPerDay;
        }

    }

    console.log(`You have produced ${biscSum} biscuits for the past month.`);

    let difference = biscSum - compFactProduce;
    let percentage = difference / compFactProduce * 100;

    if (difference < 0) {
        percentage = Math.abs(percentage)
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    } else {
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    }
}
biscFactory(["65",

    "12",

    "26000"])