let sum = (a,b) => {
    return a + b
}

let sum1 = (a,b) => {
    return a * b
}

let sum2 = (a,b) => {
    return a - b
}
// console.log(sum(1,2))
// console.log(sum1(1,2))

let arr = [sum, sum1, sum2]
let a = 2
    b = 3
for(i = 0; i < arr.length; i++){
    end = arr[i](a,b)
    console.log(end)
}



