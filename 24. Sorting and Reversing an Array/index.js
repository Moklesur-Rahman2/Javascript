


// let arr = [3,5,6,2,1,7,9];
// let inArr = arr.sort();
// let inArrRe = arr.sort().reverse();
// console.log(inArrRe);


// let arr1 = [3,5,6,2,1,7,9,10,11,12,13];

// let inArr1 = arr1.sort( (ar1,ar2) => {
//     return ar1 - ar2;
// }).reverse();
// console.log(inArr1);


// let Doctors = [
//     { name: 'Hancock', age: 34},
//     { name: 'Jorgensen', age: 54},
//     { name: 'Wilson', age: 23},
//     { name: 'Turner', age: 78},
// ]


// let arrDoc = Doctors.sort( (d1,d2) => {
//     // if(d1.name.toLowerCase() < d2.name.toLowerCase() )
//     // return -1;
//     return d1.name.toLowerCase() - d2.name.toLowerCase()
//     // return -1;
 
//     // return 0;
// });
// console.log(arrDoc);

// let sum = (a,b) => {
//     return a + b;
// }
// let brr = [47,789,4,57,68,9809,546,3459,456]
// let expArr = ['a', 'A', 'B', 4,6,9,'c',sum,brr];

// let arrexpArr = expArr.sort();
// console.log(arrexpArr);





let arr1 = [3,5,6,2,1,7,9,10,11,12,13,4322,4567,789,2345,];
let arr = [2,4,6,8,10,12,1,];

console.log(arr1.sort(function(a,b){
return a - b;
}).reverse());
console.log(arr.sort(function(){

}));