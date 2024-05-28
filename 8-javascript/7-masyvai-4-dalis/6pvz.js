let salys = [`Lietuva`, `Latvija`, `Estija`]
let papSalys = [`Turkija`, `Vokietija`, `Danija`, `Suomija`]

let sujungtos1 = salys.concat(papSalys) //.concat()

console.log(sujungtos1)

console.log(`===============`)
//2 budas:

let sujungtos2 = [...salys, ...papSalys] // spreadoperator: ...kintamasis

console.log(sujungtos2)