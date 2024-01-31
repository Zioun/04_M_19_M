const college = {
    name: "vnc",
    class: ['11', '12'],
    events: ['science fair','bijoy dibos', '21 feb'],
    unique:{
        color: 'blue',
        result:{
            gpa: 5,
            merit: "Top"
        }
    }
}
let edit = college.unique.result.merit = "Best";
console.log(edit)

console.log(college.events[1]);

let deleteClass = delete college.name
console.log(college);