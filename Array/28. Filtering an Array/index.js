
let numbers = [1,2,3,4,5]
let names = ['Rofiq', 'Jobbar', 'Kuddus']

// Result checking
let numberStart = 80
let studenSubject = 'Math'

let students = [
    { Name: 'Liam', Number: 50, Subject: 'Bangla'},
    { Name: 'Noah', Number: 60, Subject: 'Bangla'},
    { Name: 'Oliver', Number: 70, Subject: 'Bangla'},
    { Name: 'William', Number: 80, Subject: 'Bangla'},
    { Name: 'Elijah', Number: 90, Subject: 'Bangla'},

    { Name: 'Liam', Number: 50, Subject: 'English'},
    { Name: 'Noah', Number: 60, Subject: 'English'},
    { Name: 'Oliver', Number: 70, Subject: 'English'},
    { Name: 'William', Number: 80, Subject: 'English'},
    { Name: 'Elijah', Number: 90, Subject: 'English'},

    { Name: 'Liam', Number: 50, Subject: 'Math'},
    { Name: 'Noah', Number: 60, Subject: 'Math'},
    { Name: 'Oliver', Number: 70, Subject: 'Math'},
    { Name: 'William', Number: 80, Subject: 'Math'},
    { Name: 'Elijah', Number: 90, Subject: 'Math'},
]


let filterNumber = numbers.filter((value, index, arry) => {
    return value > 3
})
console.log(filterNumber)

let filterStudent = students.filter((value, index, arr) => {
    return value.Number >= numberStart && value.Subject == studenSubject
})
console.log(filterStudent)

