// Kintamuosius jeigu kurti atskirai:
let marke = `Audi`
let modelis = `A6`
let rida = 200000;
let metai = 2015;

console.log(marke, modelis, rida, metai)

//////////////////////////////////////
// masyvai:

let automobilis = [`Audi`, `A6`, 200000, 2015]

console.log(automobilis[0], automobilis[1], automobilis[2], automobilis[3]) //neaisku ka issivedi jeigu nematai masyvo, kuris indeksas kam priklauso, kokius duomenis duoda.

console.log(`=======================`)

//////////////////////////////////////
// OBJEKTAS ISSPRENDZIA PROBLEMAS:

let automobilis2 = {
    marke: `Audi`,
    modelis: `A6`,
    rida: 200000,
    metai: 2015
    //raktas: reiksme
}

//gali isvesti siais abiem budais:
console.log(automobilis2.marke, automobilis2.modelis, automobilis2.rida, automobilis2.metai)
console.log(automobilis2[`marke`], automobilis2[`modelis`],automobilis2[`rida`],automobilis2[`metai`])
