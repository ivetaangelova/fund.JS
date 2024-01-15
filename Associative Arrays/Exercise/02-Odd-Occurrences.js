function oddOccurrences(input) {
    let OccurrencesCount = {};
    let occursArray = input.toLowerCase().split(` `);


    for (let word of occursArray) {
        if (word in OccurrencesCount) {
            OccurrencesCount[word]++;
        } else {
            OccurrencesCount[word] = 1;
        }
    }

    let oddOccurs = Object.keys(OccurrencesCount).filter(key => OccurrencesCount[key] % 2 !== 0);
    let sortedOddOccurs = oddOccurs.sort((a, b) => OccurrencesCount[b] - OccurrencesCount[a]);

    console.log(sortedOddOccurs.join(` `));

}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");

oddOccurrences("Cake IS SWEET is Soft CAKE sweet Food");