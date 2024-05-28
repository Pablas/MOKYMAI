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

let skaiciai5 = [1, 8, 4, 5, 7, 9, 11]
let suma5 = 0;

for (let i = 0; i < skaiciai5.length; i++){
    if (skaiciai5[i] % 4 == 0){
        console.log(`Skaičius ${skaiciai5[i]} dalinasi iš 4`)
        suma5 += skaiciai5[i]
    }
}

console.log(`Šių skaičių suma:`, suma5)


// 6. Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.
console.log(`6. =======`)

let pazymiai6 = [10, 2, 7, 4, 10, 10]
let suma6 = 0;

for (let i = 0; i < pazymiai6.length; i++){
    suma6 += pazymiai6[i];
}

console.log(`Pažymiai:`, pazymiai6)
console.log(`Vidurkis:`, (suma6 / pazymiai6.length).toFixed(1))


// 7. Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.
console.log(`7. =======`)

let pazymiai7 = [10, 10, 8, 5, 2, 10]
let suma7 = 0;

for (let i = 0; i < pazymiai7.length; i++){
    suma7 += pazymiai7[i];
}

console.log(`Pažymiai:`, pazymiai7)
console.log(`Vidurkis:`, (suma7 / pazymiai7.length))

for (let i = 0; i < pazymiai7.length; i++){
    if ((suma7 / pazymiai7.length) < pazymiai7[i]){
        console.log(`Pažymys didesnis nei vidurkis:`, pazymiai7[i])
    }
}

// 8. Susikurkite skaičių masyvą ir užpildykite jį duomenimis. Išveskite visus skaičius atskirose eilutėse. Prie kiekvieno lyginio skaičiaus dar išvedant jo kvadratą.
console.log(`8. =======`)

let skaiciai8 = [6, 4, 5, 7, 8, 0]

for (let i = 0; i < skaiciai8.length; i++){
    if (skaiciai8[i] % 2 == 0){
        console.log(skaiciai8[i], `kvadratu:`, skaiciai8[i]**2)
    } else {
        console.log(skaiciai8[i])
    }
}

// 9. Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis (atsitiktiniais arba kokius įrašysite). Išveskite kiekvieną pažymį atskiroje eilutėje. Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas pažymys. Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 5 balai.
console.log(`9. =======`)

let pazymiai9 = [10, 2, 4, 2, 2, 10]

for (let i = 0; i < pazymiai9.length; i++){
    if (pazymiai9[i] < 5){
        console.log(`Pažymys:`, pazymiai9[i], `yra NEIGIAMAS, iki teigiamo trūko`, 5 - pazymiai9[i], `balų/-o`)
    } else {
        console.log(`Pažymys:`, pazymiai9[i], `yra TEIGIAMAS!`)
    }
}

// 10. Susikurkite žodžių masyvą ir užpildykite duomenimis. Išveskite visus žodžius ekrane, nurodant iš kiek raidžių kiekvienas šis žodis yra sudarytas. Papildykite skriptą taip, kad rastumėte visų raidžių kiekį (pvz yra žodžiai "medis" ir "alus", 5 ir 4 raidės atitinkamai, o jas sudėjus gaunasi 9 raidės).
console.log(`10. =======`)

let zodis = [`Kompiuteris`, `Puodelis`, `Kava`, `Arbata`, `Panda`]
let suma10 = 0;

for (let i = 0; i <zodis.length; i++){
    console.log(zodis[i].length)
    suma10 += zodis[i].length;
}

console.log(`Bendra žodžių raidžių suma:`, suma10)


// 11. Susikurkite skaičių masyvą ir užpildykite duomenimis. Raskite visų skaičių, kurie dalinasi iš 3 sumą ir vidurkį. Išveskite pradinius duomenis ir gautus atsakymus.
console.log(`11. =======`)


let skaiciai11 = [10, 3, 5, 6, 19, 30]
let sumaKurieDalinasi = 0;
let skaiciaiIs3 = []
let sumaSkaiciaiIs3 = 0;

for (let i = 0; i < skaiciai11.length; i++){
    if (skaiciai11[i] % 3 == 0){
        sumaKurieDalinasi += skaiciai11[i];
        skaiciaiIs3.push(skaiciai11[i])
    }
}

for (let i = 0; i < skaiciaiIs3.length; i++){
    sumaSkaiciaiIs3 += skaiciaiIs3[i];
}   

console.log(`PRADINIAI SKAIČIAI:`, skaiciai11)
console.log(`Skaičiai kurie dalinasi iš 3:`, skaiciaiIs3)
console.log(`Skaičių kurie dalinasi iš 3 suma:`, sumaKurieDalinasi)
console.log(`Skaičių kurie dalinasi iš 3 vidurkis:`, (sumaSkaiciaiIs3 / skaiciaiIs3.length))
