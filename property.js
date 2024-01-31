let subject = {
    subName : "Bangla",
    marks : 100,
    teacher :{
        teacher1 : "A",
        teacher2 : "B",
        teacher3 : "C"
    },
    classTime : "12pm",
    "friend list" : ["K", "L", "M"]
}
console.log(subject.subName);

let subj = subject.marks;
console.log(subj);

let clsTime = subject['classTime'];
console.log(clsTime);


let friends = subject["friend list"];
console.log(friends)


