function solve(lostFightCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let brokedShieldCounter = 0;
    let shieldAdded = false;


    // Every second lost game, his helmet is broken.----
    // • Every third lost game, his sword is broken.----
    // • When both his sword and helmet are broken in the same lost fight, his shield also breaks.---
    // • Every second time, when his shield brakes, his armor also needs to be repaired. 
    for (let fightCounter = 1; fightCounter <= lostFightCount; fightCounter++) {
        if (fightCounter % 2 === 0) {
            expenses += helmetPrice;
        }
        if (fightCounter % 3 === 0) {
            expenses += swordPrice;
        }
        if (fightCounter % 2 === 0 && fightCounter % 3 === 0) {
            expenses += shieldPrice;
            brokedShieldCounter++;
            shieldAdded = true;
        }
        if (brokedShieldCounter % 2 === 0 && brokedShieldCounter !== 0 && shieldAdded == true) {
            expenses += armorPrice;
            shieldAdded = false;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
solve(23, 12.50, 21.50, 40, 200)