// get max value using reset parameters


function maxValue(...numbers){
    let compareNumber = -1

    for( let num of numbers){
        if(compareNumber < num){
            compareNumber = num
        }
    }return compareNumber
}

console.log(maxValue(1,23,4,5,67,7,8,9))