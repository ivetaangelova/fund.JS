function cat(catsAsString) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;

        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let cats = catsAsString.map(cat => {
        const catInfo = cat.split(` `);
        const name = catInfo[0];
        const age = Number(catInfo[1]);
        return new Cat(name, age);
        
    })

    for(let cat of cats){
        cat.meow();
    }
}
cat(['Candy 1', 'Poppy 3', 'Nyx 2']);