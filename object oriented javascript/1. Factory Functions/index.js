
function studentData(name, age, hobby, bloodGroup){
    return{
        name,
        age,
        hobby,
        bloodGroup,
        text(){
            console.log(`Hello i am ${name}. I am ${age} years old. My hobby is ${hobby}. My blood group is ${bloodGroup}`)
        }
    }
}

const student = studentData('Akib', 23, 'Reading', 'A+')
console.log(student.text())