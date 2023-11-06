function wordsOccurences(input){
let wordCounts= new Map();
for(let word of input){
    if(wordCounts.has(word)){
        wordCounts.set(word, wordCounts.get(word) + 1);
    }else{
        wordCounts.set(word, 1);
    }
}
let sortedWordCounts=Array.from(wordCounts).sort((a,b)=> b[1]-a[1])
for(let [word, occurs] of sortedWordCounts){
    console.log(`${word} -> ${occurs} times`);
}
}
wordsOccurences(["Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]
);
