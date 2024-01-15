function solve (word, text){
let textToLower=text.toLowerCase();
let wordToLower=word.toLowerCase()
if(textToLower.includes(wordToLower)){
    console.log(word);
    return;
}else{
    console.log(`${word} not found!`);
}
}
solve('javascript', 'JavaScript is the best programming language');
solve('python', 'JavaScript is the best programming language');