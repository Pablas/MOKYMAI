let salys = [`Lietuva`, `Lenkija`, `Latvija`, `Estija`, `Suomija`]

for (const salis of salys) {
    console.log(`Viena is saliu yra ${salis}`)
}

console.log(`=============`)

for (const salis of salys) {
    console.log(`Salyje ${salis} yra raidziu ${salis.length}`)
}

console.log(`=============`)

for (const salis of salys) {
    console.log(`Salies ${salis} pirma raide ${salis[0]}`)
}