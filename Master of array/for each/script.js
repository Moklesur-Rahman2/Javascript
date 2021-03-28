let students = [
    'Akib',
    'Babul',
    'Chinmoy',
    'Dablu',
    'Edris',
    'Forid'
]


// for(i = 0; i < students.length; i++){
//     console.log(students[i])
// }


function reUse(arr){
    for(i = 0; i < arr.length; i++){
        logic(i, arr[i])
    }
}

function logic(index, value, arr){
    console.log(index, value)
}

reUse(['one', 'two'])