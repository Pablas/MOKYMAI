// 1. Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, …
console.log(`1. =====`)

let zodis1 = [`Tortas`, `Pyragas`, `Egle`, `Batutas`]

for (let i = 0; i < zodis1.length; i++){
    console.log(i, `-`, zodis1[i])
}

// 2. Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis. Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.
console.log(`2. =====`)

let sarasas2 = [`Pienas`, `Duona`, `Kiausiniai`, `Avokadas`]

for (const sar of sarasas2) {
    console.log(`${sar}\n---`)
}

console.log(sarasas2.length, `pirkiniu/-ai yra siame sarase.`)


// 3. Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir gautą vidurkį.
console.log(`3. =====`)

let pazymiai = [10, 2, 5, 9, 2, 10]
let suma = 0;

for (const pazymys of pazymiai) {
    suma += pazymys;
}

console.log(`Pazymiai:`, pazymiai)
console.log(`Pazymiu vidurkis:`, (suma / pazymiai.length))

// 4. Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus per dieną kilometrus, kurie yra didesni nei 150.
console.log(`4. =====`)

let kilometrai = [100, 245, 345, 665, 430, 20]
let sumakm = 0;

for (const km of kilometrai) {
    if (km > 150){
        console.log(`Didesnes nei 150km keliones:`, km)
        sumakm += km;
    }
}

console.log(`Bendra suma didesniu nei 150km kelioniu:`, sumakm)

// 5. Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis. Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt arba .json tipo.
console.log(`5. =====`)

let failai = [`tadsf.txt`, `asdasd.png`, `lasdkfas.txt`, `askdk.js`, `asdk.json`, `sallkd.json`, `asdka.psd`]

for (const file of failai) {
    if (file.includes(`.txt`) || file.includes(`.json`)){
        console.log(`Tinkami failai:`, file)
    }
}

// 6. Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį duomenimis. Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant kiek raidžių sudaro jo pavadinimą.
console.log(`6. =====`)

let markes = [`Toyota`, `Subaru`, `Genesis`, `Jeep`, `Mitsubishi`]

for (const marke of markes) {
    console.log(marke, `zodi sudaro`, marke.length, `raidziu/-es.`)
}

// 7. Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą duomenimis. Tuomet išveskite visas sukauptas klaidas administratoriui, taip, kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas "ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", arba jeigu kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan.
console.log(`7. =====`)

let klaiduKodas = [404, 388, 23, 388, 46, 37]

for (const klaida of klaiduKodas) {
    if (klaida > 400){
        console.log(klaida, `Page not found`)
    } else if (klaida == 388){
        console.log(klaida, `WARNING! Get out!`)
    } else if (klaida == 23){
        console.log(klaida, `Jordan`)
    } else {
        console.log(klaida, `NEATPAZISTAMA KLAIDA!`)
    }
}

// 8. Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve yra atskiros prekės likutis). Su kiekvienu likučiu paskaičiuokite per kiek dienų bus išpirktas, jei per dieną vidutiniškai yra nuperkami 5 vnt. Išveskite atsakymus atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. Pavyzdžiui, jeigu yra likučiai 74, 54 ir 32, tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės užteks maždaug 11 dienų ir t.t.
console.log(`8. =====`)

let likuciai = [2, 44, 555, 92, 28, 43, 59]

for (const liko of likuciai) {
    console.log(liko, `Uzteks prekiu likucio:`, Math.floor(liko / 5), `dienoms/-u.`)
}

// 9. Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas gavo (mažesnių nei 5). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų pažymių kiekį.
console.log(`9. =====`)

let studPazymiai = []
let pazymiuSuma = 0;
let teigiamiPaz = []
let neigiamiPaz = []

for (i = 0; i < 7; i++){
    studPazymiai.push(Math.ceil(Math.random() * 10))
}

for (const pazymys of studPazymiai) {
    pazymiuSuma += pazymys;
    if (pazymys >= 5){
        teigiamiPaz.push(pazymys)
    } else {
        neigiamiPaz.push(pazymys)
    }
}

console.log(`Teigiami pazymiai:`, teigiamiPaz);
console.log(`Studento pazymiu vidurkis:`, (pazymiuSuma / studPazymiai.length))
console.log(`Neigiamu pazymiu kiekis:`, neigiamiPaz.length)

// 10. Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento pažymius, kitas masyvas kito studento pažymius. Raskite kiekvieno studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir nurodykite kuris studentas turi didesnį vidurkį.
console.log(`10. =====`)

let pazymiai1 = [10, 2, 4, 10]
let pazymiai2 = [6, 10, 6, 7]
let suma1 = 0;
let suma2 = 0;

for (const studentas1 of pazymiai1) {
    suma1 += studentas1;
}

for (const studentas2 of pazymiai2) {
    suma2 += studentas2;
}

console.log(`Pirmo studento pazymiai:`, pazymiai1)
console.log(`Pirmo studento vidurkis:`, (suma1 / pazymiai1.length))

console.log(`Pirmo studento pazymiai:`, pazymiai2)
console.log(`Pirmo studento vidurkis:`, (suma2 / pazymiai2.length))

if ((suma1 / pazymiai1.length) > (suma2 / pazymiai2.length) ? console.log(`Pirmas studentas geriau mokesi`) : console.log(`Antras studentas geriau mokesi`)){}

// 11. Susikurkite masyvą norimiems žodžiams saugoti. Užpildykite šį masyvą duomenimis. Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus.
console.log(`11. ====`)


let zodziai = [`Vejas`, `Malunas`, `Vanduo`, `Paukstis`, `Kate` , `Tigras`]
let trumpiZodziai = []

for (const zodis of zodziai) {
    if (zodis.length <= 5){
        trumpiZodziai.push(zodis)
    }
}

console.log(`Visi zodziai:`, zodziai)
console.log(`Trumpi zodziai:`, trumpiZodziai)