// let sentence = "I am learning web dev";
// let reverse = "";
// for(const letter of sentence){
//     reverse = letter + reverse;
// }
// console.log(reverse)
//--------------------------------------------------------
// let sentence = "I am learning web dev";
// let reverse = "";
// for(i=0; i<sentence.length; i++){
//     letter = sentence[i];
//     reverse = letter + reverse;
// }
// console.log(reverse);
//--------------------------------------------------------
// let sentence = "I am learning web dev";
// let i = 0;
// let store = "";
// while (i < sentence.length){
//     let found = sentence[i];
//     store = found + store;
//     i++;
// }
// console.log(store);
//--------------------------------------------------------
let sentence = "I am learning web dev";
const reverse = sentence.split('').reverse().join("");
console.log(reverse)
