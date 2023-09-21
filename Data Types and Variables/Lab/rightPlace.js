function righttPlate(word, symbol, match) {
    let result = "";
    for (i = 0; i < word.length; i++) {
        if (word[i] == `_`) {
            result += symbol
        } else {
            result += word[i];
        }
    }
    if(result==match){
        console.log(`Matched`);
    }else{
        console.log(`Not Matched`)
    }
}
righttPlate('Str_ng', 'I',
'Strong' )
righttPlate('Str_ng', 'i',
'String' )