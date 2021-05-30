let arr = [5,10, 2,5]

let newArr = arr.reduce((value, index, arr) => {
    return value + index
})
console.log(newArr)