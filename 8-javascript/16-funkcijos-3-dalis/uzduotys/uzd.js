// 1 Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.
console.log(`1. ===========`)


function funkcija1(masyvas) {
    for (const x of masyvas) {
        console.log(x, `sudaro`, x.length, `simboliai.`)
    }
}

let zodziai = [`Oras`, `Žemė`, `Vanduo`, `Ugnis`]

funkcija1(zodziai)

// 2 Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą perduodant skirtingą turimą masyvą.
console.log(`2. ===========`)

function funkcija2(masyvas) {
    for (const x of masyvas) {
        console.log(x, `, kvadratu:`, x ** 2, `. Padidintas iš dviejų:`, x * 2)
    }
}

let skaiciai = [1, 2, 3, 4, 5, 6, 7, 8]
let skaiciai2 = [18, 19, 21]

funkcija2(skaiciai)
funkcija2(skaiciai2)

// 3 Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba objektus studentų pažymiams saugoti ir užpildykite juos duomenimis. Iškvieskite šią funkciją perduodant visus reikalingus duomenis.
console.log(`3. ===========`)

function funkcija3(pazymiai, vardas, pavarde) {


    for (const x of pazymiai) {
        vidurkis = (pazymiai.reduce((a, b) => a + b, 0)) / pazymiai.length
    }

    console.log(`Studento ${vardas}, ${pavarde}, pažymiai: ${pazymiai}. VIDURKIS: ${vidurkis}`)

}

let vard = [`Tomas`, `Gintas`, `Paulius`]
let pav = [`Tomaitis`, `Gintaitis`, `Paulaitis`]
let paz = [
    {
        Tomas: [10, 2, 5, 10]
    },
    {
        Gintas: [7, 8, 4]
    },
    {
        Paulius: [5, 10, 6]
    }
]


funkcija3(paz[0].Tomas, vard[0], pav[0])


// 4 Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat, susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus. Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti, masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.
console.log(`4. ===========`)


function funkcija4(skMasyvas) {
    let didziausiasSk = skMasyvas[0];

    for (const x of skMasyvas) {
        if (x > didziausiasSk) {
            didziausiasSk = x;
        }
    }

    console.log(`Didžiausias skaičius: ${didziausiasSk}`)
}

function randomSk(randomMasyvas) {

    for (let x = 0; x < Math.ceil(Math.random() * 8); x++) {

        randomMasyvas.push(Math.ceil(Math.random() * 10))
    }
}

let skaiciukai1 = []
let skaiciukai2 = []
let skaiciukai3 = []

randomSk(skaiciukai1)
randomSk(skaiciukai2)
randomSk(skaiciukai3)

console.log(`Iš skaičių:`)
console.log(skaiciukai1)
funkcija4(skaiciukai1)

console.log()

console.log(`Iš skaičių:`)
console.log(skaiciukai2)
funkcija4(skaiciukai2)

console.log()

console.log(`Iš skaičių:`)
console.log(skaiciukai3)
funkcija4(skaiciukai3)