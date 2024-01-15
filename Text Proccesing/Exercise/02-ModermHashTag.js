function solve (str){
let regex = /#\w+/g;
let matchedWords= str.match(regex);
let validSpecialWords=matchedWords.filter((word) => /^[a-zA-Z]+$/.test(word.substring(1)));
for(let word of validSpecialWords){
    console.log(word.substring(1));//taking word without first sumbol;
}


}
solve('Nowadays everyone uses #123 to tag a #special word in #socialMedia');

solve('The symbol # is known #variously in English-speaking #regions as the #number sign');