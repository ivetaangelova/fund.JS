function login (input){
    let username= input[0];
    let currectPass = username.split("").reverse().join("")
    let guessCount=0;
    let guess=input[1];
    let index=2;
    while(guess!==currectPass){
        guessCount++
        if(guessCount==4){
            console.log(`User ${username} blocked!`)
            return
        }
        guess=input[index]
        index++;
        console.log("Incorrect password. Try again.")
    }
    console.log(`User ${username} logged in.`)
}

login(['sunny','rainy','cloudy','sunny','not sunny'])