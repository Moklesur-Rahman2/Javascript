
let numbers = [1,2,3,4,5]
let names = ['Asad', 'Rofiq', 'jobbar']
let writer = [
    {Name: 'Humayu Ahmed', Books: 30},
    {Name: 'Jafar iqbal', Books: 20},
    {Name: 'Ahmed sofa', Books: 10},
]

let newNumbers = numbers.map((value, index, arr) => {
    return value * 2
})
console.log(newNumbers)

let newNames = names.map((personName, personIndex, arr) => {
    return personName.toUpperCase()
})
console.log(newNames)

let newWriter = writer.map((writerName, writerIndex, arr) => {
    return writerName.Name.toLowerCase()
})
console.log(newWriter)