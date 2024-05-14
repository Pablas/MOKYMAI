let skaicius = 18;

console.log(skaicius)
console.log(skaicius % 2)
console.log(skaicius % 3)
console.log(skaicius % 4)

if (skaicius % 2 === 0){
    console.log('skaicius dalinasi is 2')
}

// truthy falsy
//veiks bet kokiu atveju jeigu ne 0
if (skaicius % 2) {
    console.log('skaicius nesidalina is 2')
}

//nieko neparasius lygina !==0

if (1) {
    console.log('1 yra true')
}

if (2) {
    console.log('2 yra true')
}

if (0) {
    console.log('0 yra true')
}

if (skaicius % 3 === 0){
    console.log('skaicius dalinasi i 3')
}

if (skaicius % 4 === 0){
    console.log('skaicius dalinasi i 4')
}

if (skaicius % 3 !== 0){
    console.log('skaicius nesidalina is 3')
}

if (skaicius % 4 !== 0){
    console.log('skaicius nesidalina is 4')
}

let kelintas = 5000;

if (kelintas % 1000 === 0){
    console.log('vartotojas turi gauti apdovanojima')
}

if (kelintas % 1000 !== 0){
    console.log('vartotojas neturi gauti apdovanojimo')
}

