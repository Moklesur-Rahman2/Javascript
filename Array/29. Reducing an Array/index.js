let arr = [3,5,6];

//let sum = 0;

// sum = sum + num
console.log(arr.reduce( (jog,num) => {
return jog + num;
},0))


let newArr = arr.reduce((value, index, arr) => {
    return value * index
})
console.log(newArr)