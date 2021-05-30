
let myArray = [1,2,3,4,5]



let mySet = new Set(myArray)

for(let value of mySet){
    console.log(value)
}
// console.log(mySet)

console.log([...mySet])


// union

let setA = [1,2,3,4,5]
let setB = [2,6,4,7,5]

let union = new Set([...setA,...setB])
console.log(union)


// intersection

let intersection = new Set([...setA].filter(value => [...setB].has(value)));
console.log(intersection)