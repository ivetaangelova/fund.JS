function topIns (nums){
let topNums=[];
for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let isTop=true;
    for (let j = i+1; j < nums.length; j++) {
        let rightNum = nums[j];
        if(num<=rightNum){
            isTop=false;
            break;
        }
    }
    if(isTop){
        topNums.push(num);
    }
}
console.log(topNums.join(` `));
}

// topIns([1, 4, 3, 2])
topIns([14, 24, 3, 19, 15, 17])
// topIns([41, 41, 34, 20])
// topIns([27, 19, 42, 2, 13, 45, 48])