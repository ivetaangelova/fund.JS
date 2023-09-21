function solve(str, char, match){
    let result= str.replace(`_`, char);
    let output= result==match ? `Matched` : `Not Matched`;
    console.log(output);
}
solve('Str_ng', 'I',
'Strong' )
solve('Str_ng', 'o',
'Strong' )