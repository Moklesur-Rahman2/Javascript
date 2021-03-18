// When to use Map, Filter, Reduce

const Fighter = [
    { name: 'john', combatskill: 89},
    { name: 'mary', combatskill: 90},
    { name: 'taylor', combatskill: 79},
]


// Problem
// 1. Only Pick their names
let fighterName = Fighter.map((value) => {
    return value.name
})
console.log(fighterName)

// 2. Pick the fighter whose combatskill >= 80
let skillScore = Fighter.filter((value) => {
    return value.combatskill >= 80
})
console.log(skillScore)

// 3. sum of all combatSkills



// // ['john','mary','taylor']

// console.log(Fighter.map( (f) => f.name ).filter( (f) => f.combatskill >= 80 ).reduce( (sum, f) => sum + f.combatskill, 0 ));



// // console.log(Fighter.filter( (f) => f.combatskill >= 80 ));



// // console.log(Fighter.reduce( (sum, f) => sum + f.combatskill, 0 ));
