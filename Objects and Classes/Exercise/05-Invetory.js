function createHeroRegister(heroesData) {
    let heroes = [];

    for (let heroInfo of heroesData) {
        let tokens = heroInfo.split(` / `);
        // let heroName= tokens.shift();
        // let heroLevel =Number(tokens.shift());
        // let items= tokens.shift();
        // for(let item of tokens){
        //     items+= item;
        // }
        let heroName = tokens[0];
        let heroLevel = Number(tokens[1]);
        let items = tokens.slice(2);
        let heroObj = {
            heroName: heroName,
            heroLevel: heroLevel,
            items: items
        };
        heroes.push(heroObj);

    }
    heroes.sort((a, b) => a.heroLevel - b.heroLevel);
    for (let hero of heroes) {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.items}`);
    }
}
createHeroRegister([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);
// inventory([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ]);