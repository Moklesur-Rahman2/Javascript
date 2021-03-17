// let numbers = [1,2,3,4,5,6,7,8,9]

// for(let num of numbers){
//     console.log(num)
// }

const num1 = [
    [45, 7, 0], // 0
    [24, 66, 2], // 1
    [54, 65, 76], // 2
    [12, 78, 98] // 3
]

for(i = 0; i < num1.length; i++){
    for(j = 0; j < num1[i].length; j++){
        console.log(num1[j][i])
    }
}

