// 1. Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa, atsiskaitytų kreditų skaičius, pažymiai, ūgis, kelintame kurse mokosi, kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris skirtingas pasirinktas savybes.
console.log(`1. ================`)

let duomenys = {
    vardas: `Arnas`,
    pavarde: `Arnanas`,
    amzius: 45,
    studijuPrograma: `Lego konstruktorius`,
    kreditai: 12,
    pazymiai: [9, 2, 4, 10, 10, 8],
    ugis: 180,
    kursas: 2,
    mokykla: `Lego rumai`
}

console.log(duomenys)
console.log(`Pazymiai:`, duomenys.pazymiai)
console.log(`Ugis:`, duomenys.ugis)
console.log(`kreditai:`, duomenys.kreditai)


// 2. Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis - biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba panaudoti new Date(Date.now()).getFullYear() funkciją).
console.log(`2. ================`)

let filmas = {
    pavadinimas: `Negreiti ir neisiute`,
    rezisierius: `Petras`,
    biudzetas: 500,
    uzdirbis: 2200,
    zanras: `Drama`,
    trukme: `12 min`,
    isleidimoMetai: 2013,
    aktoriai: [
        `Tomas Tomukas`, `Romas Romukas`, `Robertas Robertukas`
    ]
}

console.log(filmas)

console.log(`Filmo pelnas:`, filmas.uzdirbis - filmas.biudzetas)
console.log(`Filme vaidino:`, filmas.aktoriai.length, `aktoriai.`)
console.log(`Filmas yra`, 2024 - filmas.isleidimoMetai, `metu senumo.`)


// 3. Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius, žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais), išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?
console.log(`3. ================`)

let knyga1 = {
    pavadinimas: `Kulverstukas`,
    autorius: `Antanas Antanelis`,
    zanras: `Siaubo`,
    kaina: 23,
    puslapiai: 224,
    skyriai: [
        `izanga`, `istorijos pradzia`, `istorijos pabaiga`
    ],
    isleista: 1994,
    knygynuose: false
}

let knyga2 = {
    pavadinimas: `Sapnas`,
    autorius: `Tomas Tomaitis`,
    zanras: `Nuotykiu`,
    kaina: 116,
    puslapiai: 467,
    skyriai: [
        `izanga`, `pirmas skyrius`, `antras skyrius`, `trecias skyrius`, `ketvirtas skyrius`
    ],
    isleista: 2015,
    knygynuose: true
}


if (knyga1.puslapiai < knyga2.puslapiai){
    console.log(`Pirma knyga plonesne.`)
} else if (knyga1.puslapiai > knyga2.puslapiai){
    console.log(`Antra knyga plonesne.`)
}


if (knyga1.skyriai.length > knyga2.skyriai.length){
    console.log(`Pirmoje knygoje daugiau skyriu`)
} else if (knyga1.skyriai.length < knyga2.skyriai.length){
    console.log(`Antroje knygoje daugiau skyriu`)
}

if (knyga1.kaina * 2 > knyga2.kaina){
    console.log(`Jeigu pirmos knygos kaina padvigubintume, ji butu brangesne`)
} else if (knyga1.kaina * 2 < knyga2.kaina){
    console.log(`Jeigu pirmos knygos kaina padvigubintume, ji vistiek nebutu brangesne uz antraja knyga`)
}


// 4. Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas, turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje (pirma prekė kainuoja - …, antra prekė kainuoja - …, ir t.t.). Raskite ir išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės pelningumą ((kaina - savikaina) * kiekis sandėlyje).
console.log(`4. ================`)

let preke1 = {
    pavadinimas: `Arbuzas`,
    kaina: 6,
    savikaina: 0.5,
    kodas: 33445356,
    turimasKiekis: 84,
    siuntimoMatmenys: {
        x: 10,
        y: 10,
        z: 10
    }
}

let preke2 = {
    pavadinimas: `Obuolys`,
    kaina: 10,
    savikaina: 0.1,
    kodas: 33445555,
    turimasKiekis: 199,
    siuntimoMatmenys: {
        x: 3,
        y: 3,
        z: 5
    }
}

let preke3 = {
    pavadinimas: `Kriause`,
    kaina: 9,
    savikaina: 0.2,
    kodas: 33445536,
    turimasKiekis: 67,
    siuntimoMatmenys: {
        x: 4,
        y: 4,
        z: 5
    }
}

console.log(`Preke 1 kainuoja:`, preke1.kaina, `-- Preke 2 kainuoja:`, preke2.kaina, `-- Preke 3 kainuoja:`, preke3.kaina)

if (preke1.kaina > preke3.kaina && preke2.kaina){
    console.log(`Preke`, preke1.pavadinimas, `brangiausia.`)
} else if (preke2.kaina > preke1.kaina && preke3.kaina){
    console.log(`Preke`, preke2.pavadinimas, `brangiausia.`)
} else if (preke3.kaina > preke1.kaina && preke2.kaina){
    console.log(`Preke`, preke3.pavadinimas, `brangiausia.`)
}


// 5. Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys). Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai, spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą automobilio informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis įrašykite dabartinius metus arba panaudokite new Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300 kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).
console.log(`5. ================`)




