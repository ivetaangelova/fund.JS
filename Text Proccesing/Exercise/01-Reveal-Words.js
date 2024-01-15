function solve (replacments, text){
let words=replacments.split(`, `);

for(let word of words){
    let wordLenght= word.length;
    let toBeReplaced="*".repeat(wordLenght)
if(text.includes(toBeReplaced)){
    text = text.replace(toBeReplaced, word);
}
}
console.log(text);
}
solve('great',
'softuni is ***** place for learning new programming languages'
);

solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)