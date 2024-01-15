function solve (text, searchedWord){
    let splitText=text.split(` `);
    let counter=0;
    for(let word of splitText){
        if (word==searchedWord) {
            counter++
        }
    }
    console.log(counter);
}