let vardai = [
    `Petras`,
    `Ona`,
    `Ugnius`,
    `Birute`
]

//for of duoda masyvu duomenis:
for (const vardas of vardai) {
    console.log(vardas)
}

console.log(`=============`)
//for in duoda indeksus to masyvo:
for (const indeksas in vardai) {
    console.log(indeksas)
}

console.log(`=============`)

for (const i in vardai){
    console.log(i, vardai[i])
}