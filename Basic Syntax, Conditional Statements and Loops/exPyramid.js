function pyramid (base, increment){
let lenght=base;
let width=base;
let height= increment;
let blockVolume= 1 * 1 * height;
let marble=0;
let stone=0;
let lapis=0;
let gold=0;
let heightOfPyramid=height;
let countLayer=0;

for(let layer=base;layer!== 1 && layer!== 2; layer-=2){
heightOfPyramid+=height;
countLayer++;
lenght=layer;
width=layer;
let outlayer=(lenght*4-4)*blockVolume;
let insidelayer=((lenght-2)*(width-2))*blockVolume;
if(countLayer%5!==0){
    marble+=outlayer;
    stone+=insidelayer;

}else {
    lapis+=outlayer;
    stone+=insidelayer;
}
gold=((layer-2)*(layer-2))*height;
}

console.log(`Stone required: ${Math.ceil(stone)}`);
console.log(`Marble required: ${marble}`);
console.log(`Lapis Lazuli required: ${lapis}`);
console.log(`Gold required: ${Math.ceil(gold)}`);
console.log(`Final pyramid height: ${Math.floor(heightOfPyramid)}`);
}
pyramid(23, 0.5);