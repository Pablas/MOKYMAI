// 1 Sukurkite funkciją, kuri išvestų jūsų vardą ir kodėl pasirinkote programavimą. Iškvieskite šią funkciją tris kartus.
console.log(`1. =================`)

function informacija() {
    let vardas = `Povilas`;
    let info = `taip gyventi lengviau`

    console.log(`Mano vardas:`, vardas)
    console.log(`Pasirinkau programavimą, nes`, info)
}

informacija();
informacija();

// 2 Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją 5 kartus.
console.log(`2. =================`)

function eilerastis(){
    console.log(`Eilėrašis, la la la`)
    console.log(`visdar, la la la`)
    console.log(`nesibaigia, la la la`)
    console.log(`liko nedaug, la la la`)
    console.log(`paskutinis, la la la`)
    console.log()
}

function x5eilerastis() {
    for (let i = 0; i < 5; i++){
        eilerastis()
    }
}

x5eilerastis()

// 3 Sukurkite tris funkcijas, kur kiekviena išvestų skirtingus tekstus. Iškvieskite visas tris funkcijas po vieną kartą.
console.log(`3. =================`)

function pirmoji() {
    console.log(`Funkcija pirma`)
}

function antroji() {
    console.log(`Funkcija antra`)
}

function trecioji() {
    console.log(`Funkcija trecia`)
}

function trysFunkcijos() {
    pirmoji()
    antroji()
    trecioji()
}

trysFunkcijos();


// 4 Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutėje, kitoje kita. Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. Iškvieskite šią trečiąją funkciją už visų funkcijų ribų.
console.log(`4. =================`)

function pirma() {
    console.log(`Sveikas, ką`)
}

function antra() {
    console.log(`veiki?`)
}

function trecia() {
    pirma()
    antra()
}

trecia()


// 5 Sukurkite funkciją, kurios viduje sugeneruotumėte du atsitiktinius skaičius. Funkcijoje suskaičiuokite ir išveskite šių dviejų skaičių sumą, kartu išvedant ir patį atliekamą veiksmą (pvz 7 + 2 = 9). Iškvieskite šią funkciją keletą kartų.
console.log(`5. =================`)


function randomSk() {
    let sk1 = Math.ceil(Math.random() * 100)
    let sk2 = Math.ceil(Math.random() * 100)

    console.log(sk1, `+`, sk2, `=`, sk1 + sk2)
}

randomSk()
randomSk()


// 6 Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose būtų saugoma informacija apie policininką (vardas, pavardė, amžius, alga, etatas, specializacija). Išveskite šią informaciją suformatuotai (pavyzdžiui įterpkite į sakinį, ar išveskite sąrašu ar pan.).
console.log(`6. =================`)


function policininkas() {
    let vardas = `Jonas`
    let pavarde = `Jonaitis`
    let amzius = 75
    let alga = 2000
    let etatas = `pilnas`
    let specializacija = `gatvių patrulis`

    console.log(`Vilniuje yra toks`, specializacija, `, vardu`, vardas, `, labai gerai atlieka savo darbą kaip`, amzius, `metų.`, alga, `į rankas gauna. Aišku`, etatas, `etatas.`)
}

policininkas()

// 7 Sukurkite funkciją, kuri išvestų 10 atsitiktinių skaičių vienoje eilutėje, skaičius atskiriant tarpu. Šią funkciją iškvieskite 5 kartus.
console.log(`7. =================`)



function random10() {
    let skaiciai = []

    for (let x = 0; x < 10; x++){
        skaiciai.push(Math.ceil(Math.random() * 10))
    }

    console.log(skaiciai.join(`, `))
}


function x5skaiciai() {
    for (let x = 0; x < 5; x++){
        random10()
    }
}


x5skaiciai()

// 8 Sukurkite funkciją, kuri išvestų atsitiktinį skaičių. Už funkcijos ribų sukurkite ciklą, kurį būtų vykdomas 10 kartų. Iškvieskite sukurtą funkciją cikle. Turėtumėte pamatyti 10 atsitiktinių skaičių.
console.log(`8. =================`)



function randomNumber() {
    console.log(Math.ceil(Math.random() * 10))
}

for (let x = 0; x < 10; x++){
    randomNumber()
}