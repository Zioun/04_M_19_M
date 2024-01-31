let apple1 = "Apple Is Good fruit";
let apple2 = "applE is good fruiT";

let ac1 = apple1.toLowerCase().trim();
let ac2 = apple2.toLowerCase().trim();

if(ac1 === ac2){
    console.log("Matching")
}else{
    console.log("Not Matched");
}