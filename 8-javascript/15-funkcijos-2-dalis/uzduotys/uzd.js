// 1 Sukurkite funkciją pasisveikinimui, šiai funkcijai per argumentus perduokite vardą, funkcijoje išveskite tekstą labas ir gautą vardą. Sukurkite kitą funkciją, kuri irgi per argumentus gautų vardą, tačiau pasakytų 'viso gero' ir patį vardą. Ne funkcijose susikurkite kintamąjį vardui saugoti ir įrašykite vardą. Iškvieskite abi funkcijas, perduodant kintamąjį joms.
console.log(`1. =================`)

function pasisveinimas(vardas){
    console.log(`Sveikas, ${vardas}`)
}

function atsisveikinimas(vardas){
    console.log(`Viso gero ${vardas}`
    )
}

let vardas = `Petras`;

pasisveinimas(vardas)
atsisveikinimas(vardas)


// 2 Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs - tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų, duodant skirtingus skaičius.
console.log(`2. =================`)


function skaiciai(sk1, sk2){

    if (sk1 > sk2){
        console.log(`Skaicius ${sk1} didesnis!`)
    } else if (sk2 > sk1){
        console.log(`Skaicius ${sk2} didesnis!`)
    } else {
        console.log(`Skaiciai lygus!`)
    }
}

skaiciai(100, 200)
skaiciai(6, 9)
skaiciai(5, 5)


// 3 Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė, modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos duomenis išvesti kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant skirtingus duomenis jai.
console.log(`3. =================`)

function auto(marke, modelis, metai, turis){
    console.log(`Automobilis:`, marke)
    console.log(`Modelis:`, modelis)
    console.log(`Pagaminimo metai:`, metai)
    console.log(`Variklio turis:`, turis)
}

auto(`Nissan`, `350Z`, 2004, `3.5 litrai`)


let mrk = `Infinity`
let mod = `G35`
let met = 2006
let ltr = `3.5 litrai`
auto(mrk, mod, met, ltr)


// 4 Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du skaičius, bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 = 12). Sukurkite tokias pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną funkciją, kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas, perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją iškvieskite keletą kartų.
console.log(`4. =================`)

function suma(sk1, sk2){
    console.log(`${sk1} + ${sk2} =`, sk1 + sk2)
}

function sandauga(sk1, sk2){
    console.log(`${sk1} * ${sk2} =`, sk1 * sk2)
}

function skirtumas(sk1, sk2){
    console.log(`${sk1} - ${sk2} =`, sk1 - sk2)
}

function dalmuo(sk1, sk2){
    console.log(`${sk1} / ${sk2} =`, sk1 / sk2)
}



function randomNumbers(sk1, sk2){
    sk1 = Math.ceil(Math.random() * 100)
    sk2 = Math.ceil(Math.random() * 100)

    suma(sk1, sk2)
    sandauga(sk1, sk2)
    skirtumas(sk1, sk2)
    dalmuo(sk1, sk2)
}

randomNumbers()
console.log(`-----`)
randomNumbers()