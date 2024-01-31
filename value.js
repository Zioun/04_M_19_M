// let subject = {
//     subName : "Bangla",
//     marks : 100,
//     teacher :{
//         teacher1 : "A",
//         teacher2 : "B",
//         teacher3 : "C"
//     },
//     classTime : "12pm",
//     "friend list" : ["K", "L", "M"]
// }

// subject.marks = 60;
// subject['marks'] = 50;
// console.log(subject.marks);


let subject = {
    subName : "Bangla",
    marks : 100,
    classTime : "12pm",
    "friend list" : ["K", "L", "M"]
}

const bookName = 'subName';
console.log(subject[bookName]);

subject.subName = "Englsih";
console.log(subject.subName);