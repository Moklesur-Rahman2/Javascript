

let set = new Set();
set.add(300)
set.add(100)
set.add(200)
set.add(100)

console.log(set.delete(100));
console.log(set);

for(let val of set){
    console.log(val)
}


