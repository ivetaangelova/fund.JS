function printRepeatString (str, times){
    function repeatStr(str, times){
            if (times < 1) {
                return '';
            }
            return str.repeat(times);
        } 
    console.log(repeatStr(str, times));
}