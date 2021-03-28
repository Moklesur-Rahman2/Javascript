// let students = [
//     'Akib',
//     'Babul',
//     'Chinmoy',
//     'Dablu',
//     'Edris',
//     'Forid'
// ]


// // for(i = 0; i < students.length; i++){
// //     console.log(students[i])
// // }


// function reUse(arr){
//     for(i = 0; i < arr.length; i++){
//         logic(i, arr[i])
//     }
// }

// function logic(index, value, arr){
//     console.log(index, value)
// }

// reUse(students)


let numbers = [1,2,3,4,5]
let sum  = 0

function myFunction(arr, callBackFun){
    for(index = 0; index < arr.length; index++){
        callBackFun(numbers[index])
    }
}

function sumFun(value){
    sum += value
}

myFunction(numbers, sumFun)
console.log(sum)