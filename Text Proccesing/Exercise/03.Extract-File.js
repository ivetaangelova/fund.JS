function solve (string){
let lastSlashIndex=string.lastIndexOf(`\\`);
let fileNameAndExtension= string.substring(lastSlashIndex+1);
let extensionIndex=fileNameAndExtension.lastIndexOf(`.`);
let extension= fileNameAndExtension.substring(extensionIndex+1);
let fileName=fileNameAndExtension.substring(0,extensionIndex);
console.log(`File name: ${fileName}`);
console.log(`File extension: ${extension}`);
}
solve('C:\\Internal\\training-internal\\Template.doc.pptx')
solve('C:\\Internal\\training-internal\\Template.pptx')