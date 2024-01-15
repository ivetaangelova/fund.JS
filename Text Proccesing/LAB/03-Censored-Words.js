function consoredWord (text, toBeCensored){
let ceonsor= `*`.repeat(toBeCensored.length);
let censoredText=text;
while (censoredText.includes(toBeCensored)) {
    censoredText= censoredText.replace(toBeCensored, ceonsor)
}
console.log(censoredText);
}
consoredWord('Find the hidden word hidden', 'hidden')