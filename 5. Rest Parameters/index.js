// reset parameters

function resetP(...numbers){
    let sum = 1
    for(num of numbers){
        sum*=num
    }return sum
}

console.log(resetP(1,2,3,4,5))