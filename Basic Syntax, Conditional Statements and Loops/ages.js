function ages(age) {
    //         0-2 (age) – is a baby;
    // • 3-13 (age) – is a child;
    // • 14-19 (age) – is a teenager;
    // • 20-65 (age) – is an adult;
    // • >=66 (age) – is an elder; 
    category = ""
    if (age < 0) {
        console.log("out of bounds")
    } else if (age <= 2) {
        category = "baby"
    }
    else if (age <= 13) {
        category = "child"
    } else if (age <= 19) {
        category = "teenager"
    } else if (age <= 65) {
        category = "adult"
    } else {
        category = "elder"
    }
    console.log(category)
}ages(-5)