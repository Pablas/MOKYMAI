// 1. Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.
console.log(`1. =======`)

let programos = [`JS`, `HTML`, `CSS`, `SASS`]

console.log(programos[0]);
console.log(programos[1]);
console.log(programos[2]);
console.log(programos[programos.length - 1]);


// 2. Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis. Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada nurodant šalį iš masyvo.
console.log(`2. =======`)

let salys = [
    `Lietuva`,
    `Amerika`,
    `Turkija`,
    `Kroatija`,
    `Kinija`
]

console.log(`Šalis - ${salys[0]}`)
console.log(`Šalis - ${salys[1]}`)
console.log(`Šalis - ${salys[2]}`)
console.log(`Šalis - ${salys[3]}`)
console.log(`Šalis - ${salys[salys.length - 1]}`)


// 3. Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).
console.log(`3. =======`)

let projektai = [
    `Žaidimo svetainė`,
    `Fotografijos portfolio`,
    `Socialinė erdvė`,
    `Naujienų tinklaraštis`
]

for (let i = 0; i < projektai.length; i++){
    console.log(`${i + 1} Projektas: ${projektai[i]}`)
}

// 4. Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite tik tuos skaičius, kurie yra didesni nei 5.
console.log(`4. =======`)

let skaiciai = [2, 3, 45, 667, 8, 23, 134, 345, 64]

for (let i = 0; i < skaiciai.length; i++){
    if (skaiciai[i] > 5){
        console.log(`Skaičius ${skaiciai[i]} yra didesnis nei 5`)
    }
}

// 5. Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite visų skaičių, kurie dalinasi iš 4 sumą.
console.log(`5. =======`)



// 6. Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.
console.log(`6. =======`)



// 7. Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.
console.log(`7. =======`)



