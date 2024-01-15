function wordsTracker (input){
let wordsTracked=input.shift().split(` `);
let wordsTrackedObj={};
for(let word of wordsTracked){
    wordsTrackedObj[word]=0;
}
for(let word of input){
    if(word in wordsTrackedObj){
        wordsTrackedObj[word]++
    }
}
let wordsTrackedEntries=Object.entries(wordsTrackedObj).sort((a,b)=> b[1]- a[1])
for(let [word, occurrences] of wordsTrackedEntries){
console.log(`${word} - ${occurrences}`);
}
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]
    );
