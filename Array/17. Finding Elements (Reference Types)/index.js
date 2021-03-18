
const Students = [
    {Name: 'Akib', Age: 30},
    {Name: 'Babul', Age: 40},
    {Name: 'Chinmoy', Age: 50}
]

let student = Students.findIndex(function(Students){
    return Students.Name === "Babul"
})
console.log(student)

// FAQ

//1// if i want to see Name and Age together what i will do

//2// Now after return Students.Name its comeing the index number. But i want to return index number and then it will show the student date