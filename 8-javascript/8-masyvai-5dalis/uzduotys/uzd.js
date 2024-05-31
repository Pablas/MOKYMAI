// 1. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių (naudojant find metodą), kuris yra lyginis. Pvz, jeigu masyvas bus [3, 7, 2, 9, 6, 4], tai atsakymas turi gautis 2, nes 3 ir 7 buvo nelyginiai.
console.log(`1. ==========`)

let skaiciai1 = [1, 7, 5, 7, 35, 645, 6, 7, 9, 7]

let lyginis = skaiciai1.find(sk => sk % 2 == 0);
console.log(lyginis)


// 2. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių, kuris yra teigiamas (daugiau nei 0). Pvz, jeigu masyvas bus [-3, 0, 5, -8, 2, 7], atsakymas turi gautis 5.
console.log(`2. ==========`)

let skaiciai2 = [-2, -3, -44, 5, -6, 7, -99, 101]

let teigiamas = skaiciai2.find(sk => sk > 0);
console.log(teigiamas)

// 3. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių kuris yra neigiamas ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu masyvas bus [8, -2, 3, 4], tai atsakymas yra 1, nes skaičius -2 yra indekse 1. O jeigu masyvas bus [7, 5, 3], tai atsakymas bus -1, nes masyve nėra neigiamo skaičiaus.
console.log(`3. ==========`)

let skaiciai3 = [1, 2, 44, 5, 6, -777, 8, 6]

let neigiamoIndex = skaiciai3.find(sk => sk < 0)
console.log(`indeksas:`, skaiciai3.indexOf(neigiamoIndex))

// 4. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra lygus arba didesnis 10 ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu turite masyvą [8, 12, 5, 3, 15, 9], atsakymas bus 1.
console.log(`4. ==========`)

let skaiciai4 = [2, 7, 561, 59, 996, 4, 3]

let lygusIrDidesnisUz10 = skaiciai4.find(sk => sk % 2 == 0 && sk > 10)
console.log(skaiciai4.indexOf(lygusIrDidesnisUz10))


// 5. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris dalintųsi iš 3 ir būtų didesnis nei 10, ir jį išveskite. Pvz, jeigu masyvas yra [5, 9, 12, 7, 18, 4], atsakymas bus 12.
console.log(`5. ==========`)

let skaiciai5 = [7, 4, 93, 61, 0, 9, -5]

let dalinasiIs3irDidesnisNei10 = skaiciai5.find(sk => sk % 3 == 0 && sk > 10);
console.log(dalinasiIs3irDidesnisNei10)

// 6. Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra neigiamas ir yra lyginis. Pvz, jeigu masyvas [5, 8, -3, -6, 4, 7], tai atsakymas yra -6.
console.log(`6. ==========`)


let skaiciai6 = [1, 2, 44, 5, 6, -772, 8, 6]

let neigiamasIrTeigiamas = skaiciai6.find(sk => sk % 2 == 0 && sk < 0)
console.log(neigiamasIrTeigiamas)

// 7. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra teigiami (didesni nei 0). Pvz, jeigu masyvas [7, 5, 9, 8], tai atsakymas true, o jeigu masyvas [8, 9, -3, 2], tai atsakymas false.
console.log(`7. ==========`)

let skaiciai7 = [2, 7, 561, 59, 996, 4, 3]

let arVisiTeigiami = skaiciai7.every(sk => sk > 0)
console.log(`Visi skaiciai teigiami? -`, arVisiTeigiami)



// 8. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra lyginiai. Pvz, jeigu masyvas yra [2, 4, 8, 6], tai atsakymas true, o jeigu masyvas [7, 3, 6, 8, 10], tai atsakymas false.
console.log(`8. ==========`)

let skaiciai8 = [2, 7, 561, 59, 996, 4, 3]

let arVisiSkaiciaiLyginiai = skaiciai8.every(sk => sk % 2 == 0)
console.log(`Visi skaiciai lyginiai? -`, arVisiSkaiciaiLyginiai)



// 9. Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve yra bent vienas skaičius, kuris yra mažesnis nei 5. Pvz, jeigu masyvas [8, 20, 5, 97, 44], tai atsakymas false, bet jeigu masyvas [20, 3, 7, 9], tai atsakymas true.
console.log(`9. ==========`)

let skaiciai9 = [1, 2, 44, 5, 6, -772, 8, 6]

let arYraMazesnisNei5 = skaiciai9.some(sk => sk < 5)
console.log(`Ar yra skaicius mazesnis uz 5? -`, arYraMazesnisNei5)



// 10. Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Patikrinkite ar šiame masyve yra bent vienas teigiamas skaičius (didesnis nei 0). Pvz, jeigu masyvas [7, 2, -3, -6], tai atsakymas yra true, o jeigu masyvas yra [-8, -6, -4], tai atsakymas yra false.
console.log(`10. ==========`)

let skaiciai10 = [1, 2, 44, 5, 6, -772, 8, 6]

let arYraDidesnisNei0 = skaiciai10.some(sk => sk > 0)
console.log(`Ar yra skaicius didesnis uz 0? -`, arYraDidesnisNei0)



// 11 Susikurkite žodžių masyvą. Patikrinkite ar visi šiame masyve esantys žodžiai yra sudaryti iš 3 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘antis’, ‘ožka’, ‘arklys’], tai atsakymas true, o jeigu masyvas [‘abc’, ‘de’, ‘fgia’], tai atsakymas false.
console.log(`11. ==========`)

let zodziai11 = [`Obuolys`, `Lietus`, `Ok`, `Dviratis`, `Neprisikiskiakopusteliaudavome`, `Alus`, `Diena`, `Vaza`]

let daugiauNei3zodziai = zodziai11.every(zd => zd.length >= 3)
console.log(`Ar visi zodziai turi daugiau nei 3 raides? -`, daugiauNei3zodziai)



// 12 Susikurkite žodžių masyvą. Patikrinkite ar šiame masyve yra bent vienas žodis prasidedantis raide a (turi surasti nepriklausomai tai didžioji ar mažoji raidė). Pvz, jeigu masyvas [‘bananas’, ‘agurkas’, ‘pomidoras’], tai atsakymas true, o jeigu masyvas [‘kaunas’, ‘vilnius’, ‘klaipėda’], tai atsakymas false.
console.log(`12. ==========`)

let zodziai12 = [`Obuolys`, `Lietus`, `Ok`, `Dviratis`, `Neprisikiskiakopusteliaudavome`, `Alus`, `Diena`, `Vaza`]

let arPrasidedaA = zodziai12.some(zd => zd.toLowerCase().startsWith(`a`))
console.log(`Ar yra bent vienas zodis prasidedantis a? -`, arPrasidedaA)


// 13 Susikurkite skaičių masyvą. Patikrinkite ar visi šiame masyve esantys skaičiai yra teigiami ir ar yra bent vienas skaičius, kuris būtų lyginis. Pvz, masyvas [3, 7, 2, 9, 6, 4], grąžina true, o masyvas [4, -2, 3, 7] grąžina false.
console.log(`13. ==========`)


let skaiciai13 = [2, 44, 6, 772, 8, 6]

let arVisiTeigiami1 = skaiciai13.every(sk => sk > 0 && sk % 2 == 0)
console.log(`Ar visi teigiami ir ar yra skaičius, kuris būtų lyginis? -`, arVisiTeigiami1)


// 14 Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Išfiltruokite skaičius, kurie yra teigiami. Pvz, jeigu masyvas yra [4, -3, -2, 8, 9, 5], tai išfiltruotas variantas yra [4, 8, 9, 5].
console.log(`14. ==========`)

let skaiciai14 = [2, 44, -6, 772, -8, 6]

let tikTeigiami = skaiciai14.filter(sk => sk > 0)
console.log(tikTeigiami)

// 15 Susikurkite skaičių masyvą, kuriame būtų saugomi prekės reitingai (skaičiai nuo 1 iki 5). Išfiltruokite tuos įrašus, kur balų yra 1 arba 2. Pvz, jeigu masyvas [5, 1, 4, 5, 1, 3, 4, 5, 2], tai išfiltravus gausis [1, 1, 2].
console.log(`15. ==========`)

let skaiciai15 = [1, 5, 3, 2, 1, 0]

let isfiltruotiNuo1iki2 = skaiciai15.filter(sk => sk <= 2 && sk >= 1)
console.log(isfiltruotiNuo1iki2)


// 16 Susikurkite skaičių masyvą, kuriame būtų ir teigiamų ir neigiamų skaičių. Išfiltruokite tik tuos skaičius, kurie yra teigiami ir yra lyginiai. Pvz, jeigu turite masyvą [5, -3, 2, 7, 8, -4, 1] tai turi gautis [2, 8].
console.log(`16. ==========`)

let skaiciai16 = [2, 44, -6, 771, -8, 6]

let TeigiamiIrLyginiai = skaiciai16.filter(sk => sk % 2 == 0 && sk > 0)
console.log(TeigiamiIrLyginiai)

// 17 Susikurkite šalių pavadinimų masyvą. Išfiltruokite tik tas šalis, kurių pavadinime yra raidė b (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu turite masyvą [‘Belgija’, ‘Lietuva’, ‘Graikija’, ‘Bulgarija’], tai turi gautis [‘Belgija’, ‘Bulgarija’].
console.log(`17. ==========`)

let salys = [`Lietuva`, `Estija`, `Latvija`, `Svedija`, `Norvegija`, `Bulgarija`, `Belgija`]

let tikSuB = salys.filter(b => b.toLowerCase().startsWith(`b`))
console.log(tikSuB)


// 18 Susikurkite skaičių masyvą. Išfiltruokite lyginius skaičius ir juos padvigubinkite. Pvz, jeigu masyvas yra [3, 7, 2, 9, 6, 4], išfiltravus gausis [2, 6, 4], o padvigubinus galutinis variantas bus [4, 12, 8].
console.log(`18. ==========`)

let skaiciai18 = [2, 5, 7, -1, 6]
let lyginiaiDvigubai = []

let lyginiai = skaiciai18.filter(sk => sk % 2 == 0);

for (const sk of lyginiai) {
    lyginiaiDvigubai.push(sk**2);
}

console.log(lyginiaiDvigubai)

// 19 Susikurkite skaičių masyvą. Kiekvieną skaičių jame padidinkite per 1. Pvz, jeigu masyvas yra [7, 8, 9, 2, 3], tai turi gautis [8, 9, 10, 3, 4].
console.log(`19. ==========`)

let skaiciai19 = [2, 5, 7, -1, 6]
let skaiciaiPlius1 = []

skaiciaiPlius1.skaiciaiPlius1 = skaiciai19.map(sk => sk + 1)

console.log(skaiciaiPlius1)

// 20 Susikurkite žodžių masyvą. Kiekvieną žodį iš šio masyvo paverskite į variantą iš didžiųjų raidžių. Pvz, jeigu turite masyvą [‘bananas’, ‘baba’, ‘klėtis’], tai turi gautis [‘BANANAS’, ‘BABA’, ‘KLĖTIS’].
console.log(`20. ==========`)

let zodziai20 = [`Obuolys`, `Lietus`, `Ok`, `Dviratis`, `Neprisikiskiakopusteliaudavome`]
let zodziai20Caps = []

let didinti = zodziai20.forEach(zd => {
    zodziai20Caps.push(zd.toUpperCase())
})

zodziai20 = zodziai20Caps;

console.log(zodziai20)


// 21 Susikurkite skaičių masyvą. Gaukite visų skaičių sumą. Pvz, jeigu masyvas yra [2, 3, 1], tai atsakymas 6.
console.log(`21. ==========`)

let skaiciai21 = [2, 5, 7, -1, 6]

let suma21 = skaiciai21.reduce((a, b) => a + b)
console.log(suma21)

// 22 Susikurkite skaičių masyvą. Atrinkite tik tuos skaičius, kurie yra lyginiai ir gaukite jų sumą. Pvz, jeigu masyvas yra [1, 2, 3, 4, 5], atrinkus gausis [2, 4], o šių skaičių suma ir galutinis atsakymas yra 6.
console.log(`22. ==========`)

let skaiciai22 = [2, 5, 7, -2, 6]

let lyginiai22 = skaiciai22.filter(sk => sk % 2 == 0)
let lyginiuSuma = lyginiai22.reduce((a, b) => a + b)

console.log(lyginiuSuma)


// 23 Susikurkite žodžių masyvą. Pasiimkite kiekvieno žodžio pirmą raidę, ją padarykite iš didžiosios raidės. Pvz, jeigu turite masyvą [‘šuo’, ‘katė’, ‘gyvatė’], tai turi gautis [‘Š’, ‘K’, ‘G’].
console.log(`23. ==========`)

let zodziai23 = [`obuolys`, `Lietus`, `ok`, `dviratis`, `Neprisikiskiakopusteliaudavome`]
let pirmosRaides = []

let atrinkimas = zodziai23.forEach(zd => {
    pirmosRaides.push(zd[0].toUpperCase())
})

zodziai23 = pirmosRaides;
console.log(zodziai23)


// 24 Susikurkite žodžių masyvą. Raskite kiek šiame masyve yra žodžių, kurie susideda iš 5 ar daugiau raidžių. Pvz, jeigu masyvas yra [‘bananas’, ‘persikas’, ‘abc’, ‘de’], tai atrinkus žodžius gausis [‘bananas’, ‘persikas’], o tokių žodžių yra ir galutinis atsakymas skaitosi 2.
console.log(`24. ==========`)

let zodziai24 = [`obuolys`, `Lietus`, `ok`, `dviratis`, `Neprisikiskiakopusteliaudavome`]
let kiekYraIs5zd = 0;

let zdzis5arDaugiau = zodziai24.forEach(zd => {
    if (zd.length >= 5){
        kiekYraIs5zd += 1;
    }
})

console.log(`Zodziu is 5 ar daugiau raidziu yra:`, kiekYraIs5zd)


// 25 Susikurkite žodžių masyvą. Raskite kiekvieno žodžio simbolių kiekį. Pvz, jeigu masyvas yra [‘obelis’, ‘liepa’, ‘eglė’, ‘uosis’], tai turi gautis [6, 5, 4, 5].
console.log(`25. ==========`)

let zodziai25 = [`obuolys`, `Lietus`, `ok`, `dviratis`, `Neprisikiskiakopusteliaudavome`]
let zodziuSimboliuKiekiai = []

for (const zd of zodziai25) {
    zodziuSimboliuKiekiai.push(zd.length)
}

console.log(zodziuSimboliuKiekiai)

// 26 Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti vardai ir amžiai. Ištraukite iš tokio masyvo tik vardus. Pvz, jeigu masyvas yra [‘Tomas 34’, ‘Jonas 20’, ‘Gintarė 40’, ‘Inga 24’], tai turi gautis [‘Tomas’, ‘Jonas’, ‘Gintarė’, ‘Inga’].
console.log(`26. ==========`)

let vardai26 = [
    'Gabrielius 25',
    'Emilija 50',
    'Matas 34',
    'Elena 18',
    'Kazimieras 72',
    'Aurora 17',
    'Gediminas 45',
    'Rugilė 29',
    'Arnoldas 31',
    'Ieva 36'
];
let tikVardai26 = vardai26.map(vardas => vardas.split(' ')[0]);
console.log(tikVardai26);

// 27 Susikurkite masyvą, kur string pavidalu kiekviename elemente būtų sudėti vardai ir amžiai. Ištraukite iš tokio masyvo tik amžius, juos paverskite į skaičius ir raskite bendrą sumą. Pvz, jeigu masyvas yra [‘Tomas 34’, ‘Jonas 20’, ‘Gintarė 40’, ‘Inga 24’], tai išrinkus info gausis [34, 20, 40, 24] ir suradus sumą turėsime 118.
console.log(`27. ==========`)

let vardai27 = [`Tomas 24`, `Bronius 35`, `Tadas 15`, `Aukse 23`, `Robertas 66`]
let amzius = []

for (const x of vardai27) {
    amzius.push(x.slice(-2))
}

// neisvedziau i skaicius

console.log(amzius)



// 28 Susikurkite masyvą prekių likučiams saugoti (tik likučių skaičiai). Išrinkite visus likučius, kurių liko mažai (mažiau nei 5 vnt.), ties kiekvienu likučiu paskaičiuokite kiek trūksta iki ribos. Pvz, jeigu turite masyvą [74, 2, 54, 3, 1, 87], išfiltravus liks [2, 3, 1], o paskaičiavus kiek kiekvieno trūksta iki 5, gausis [3, 2, 4].
console.log(`28. ==========`)


let likuciai = [3, 7, 8, 2, 7, 9, 8, 9, 4];

let filtruota = likuciai.filter(l => l < 5);
console.log(filtruota);

let trukumas = filtruota.map(l => 5-l);
console.log(trukumas);


// 29 Susikurkite masyvą studento pažymiams saugoti. Suraskite kiek studentas turi gerų pažymių (8 ar daugiau). Pvz, jeigu masyvas yra [7, 8, 10, 6, 5, 9], išfiltravus gausis [8, 10, 9], o tokių pažymių jis turi 3.
console.log(`29. ==========`)


let pazymiai29 = [2, 5, 7, 9, 6, 10]

let geriPazymiai = pazymiai29.filter(x => x > 8)

console.log(geriPazymiai)

// 30 Susikurkite žodžių masyvą. Suraskite kiek iš viso šiame masyve per visus žodžius yra raidžių a (nesvarbu didžioji ar mažoji raidė). Pvz, jeigu masyvas yra [‘bananas’, ‘obelis’, ‘automobilis’], gausis kad yra 4 raidės.
console.log(`30. ==========`)

let mas = ['bAnanAs', 'obelis', 'automobilis'];

console.log('Ats.:', mas.join('').split(``).filter(k => k.toLowerCase() == 'a').length);










