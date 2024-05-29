// 1. Susikurkite masyvą, kuriame būtų pateikti mėgstamiausi valgiai. Pamėginkite masyvą papildyti informacija įvairiais būdais (pridėti naują valgį priekyje, gale, per vidurį, pasirinktoje vietoje). Pamėginkite ištrinti kažkuriuos 3 valgius (iš pasirinktų pozicijų, pvz priekio, galo ir vidurio).
console.log(`1. =================`)


let valgiai = [`Salotos`, `Šaltibarščiai`]

let naujiValgiai = [`Kebabas`, `Buritas`]
let simboliai = [`-----`]

console.log(`original:`, valgiai)

/// i pabaiga:
valgiai.push(`PABAIGA`)
console.log(`prideta pabaigoj:`, valgiai)

/// i prieki:
valgiai.unshift(`PRADZIA`)
console.log(`prideta pradzioj:`, valgiai)

//i viduri:
valgiai.splice(2, 0, `VIDURI`)
console.log(`prideta viduri:`, valgiai)

//istrinam 3 valgius is vidurio:
valgiai.splice(1, 3)
console.log(`istrinam is vidurio:`, valgiai)



// 2. Susikurkite skaičių masyvą. Naudojant includes, patikrinkite ar masyve yra kuris nors pasirinktas skaičius (pvz 8).
console.log(`2. =================`)


let skaiciai2 = [10, 4, 5, 66, 7, 3, 41]

if (skaiciai2.includes(8)) {
    console.log(`Skaiciu masyve yra 8`)
} else {
    console.log(`Skaiciu masyve nera skaiciaus 8`)
}



// 3. Susikurkite masyvą, kuriame būtų surašyti bet kokie žodžiai. Panaudokite join metodą, kad masyvą paverstumėte į teksto eilutę. Paeksperimentuokite su skirtingais skirtukais jungiant tekstą (pvz vieną kartą panaudokite tarpą, kitą kablelius ir t.t.).
console.log(`3. =================`)


let zodziai3 = [`Grietine`, `Petras`, `Vilnius`, `Miestas`]

console.log(`Su kableliu ir tarpu:`, zodziai3.join(`, `))
console.log(`Su dvitaskiu:`, zodziai3.join(`:`))
console.log(`Su bruksniuku:`, zodziai3.join(`---`))



// 4.Susikurkite kintamąjį kuriame būtų saugomas sakinys iš kelių žodžių (string tipo kintamasis). Išskaidykite šį tekstą į masyvą naudojant split metodą. Raskite kiek žodžių buvo sakinyje.
console.log(`4. =================`)


let sakinys4 = `Sveikas, ką veiki? Gal varom pažaisti krepšinio? Lauksiu atsakymo.`

let sakinio4Masyvas = sakinys4.slice().split(` `);

console.log(`Sakinys:`, sakinys4)
console.log(`Sakinį yra:`, sakinio4Masyvas.length, `žodžiai`)



// 5. Susikurkite pažymių masyvą. Surikiuokite pažymius nuo didžiausio iki mažiausio. Išveskite tris didžiausius pažymius.
console.log(`5. =================`)


let pazymiai5 = [9, 2, 4, 1, 8, 5]


console.log(`Pažymiai nuo didžiausio iki mažiausio:`, pazymiai5.sort().reverse())
console.log(`Trys didžiausi pažymiai:`, pazymiai5.sort().reverse().splice(0, 3))



// 6. Susikurkite du masyvus, pirmąjame būtų saugomi biologijos pamokos studentų vardai, o antrąjame būtų saugojami matematikos pamokos studentų vardai. Apjunkite šiuos masyvų informaciją į vieną masyvą. Bonus: ar jums pavyktų išskirti tik unikalius vardus? (galima ieškoti kaip panaudoti set).
console.log(`6. =================`)


let biologijosStudentai = [`Auguste`, `Tomas`, `Akvile`, `Petras`, `Aurimas`]
let matematikosStudentai = [`Jurgis`, `Romas`, `Kretinga`, `Ugnius`]

let visiStudentai = [...biologijosStudentai, ...matematikosStudentai]

console.log(`Visi studentai:`, visiStudentai)


///papildomas:

let ieskomas = `Aurimas`;

for (const studentas of visiStudentai) {
    if (studentas.includes(ieskomas)) {
        console.log(`Vardas:`, ieskomas, `yra sąraše! Sąrašo numeris:`, (visiStudentai.indexOf(ieskomas) + 1))
    }
}



// 7. Susikurkite du masyvus. Pirmame masyve bus išvardinta pirmo semestro paskaitų temos, o antrame masyve - antro semestro paskaitų temos. Sujunkite šiuos masyvus naudojant spread operator, taip, kad pirmiausia būtų pateikta pirmo semestro informacija ir tada antro.
console.log(`7. =================`)


let temos1 = [`Pasaulis`, `Tekstilė`, `Tapyba`, `Biologija`, `Psichologija`]
let temos2 = [`Kintamieji`, `Objektai`, `HTML / CSS`]

let visosTemos = [...temos1, ...temos2]

console.log(visosTemos)



// 8. Susikurkite masyvą, kuriame būtų išvardintos kelios spalvos. Padarykite šio masyvo kopiją ir duomenis iš originalaus masyvo pašalinkite. Išveskite abu masyvus, atkreipkite dėmesį į tai kad pašalinus duomenis iš pirmojo masyvo, turėjo pasinaikinti tik iš jo, o antrame viskas likti tvarkingai, o jeigu išsitrynė abiejų duomenys - pamėginkite surasti priežastį ir sutvarkyti.
console.log(`8. =================`)


let spalvos8 = [`Žalia`, `Balta`, `Geltona`, `Juoda`, `Raudona`, `Oranžinė`]
let kopija8 = spalvos8.slice()

spalvos8 = []

console.log(spalvos8)
console.log(kopija8)




// 9. Susikurkite masyvą, kuriame būtų saugomi miestų pavadinimai. Atlikite paiešką masyve su indexOf surasdami kurioje pozicijoje yra pasirinktas miestas.
console.log(`9. =================`)


let miestai9 = [`Kaunas`, `Vilnius`, `Klaipeda`, `Utena`, `Kretinga`]
let norimasMiestas = `Utena`;

console.log(`Miestas`, norimasMiestas, `,`, miestai9.indexOf(norimasMiestas), `indekse.`)



// 10. Susikurkite bet kokį masyvą. Parašykite programą kuri išsiaiškintų ar masyve yra bent vienas dublikatas.
// Pvz, masyve [1, 2, 3] nėra dublikatų.
// O masyve [1, 2, 3, 4, 2] yra dublikatų (skaičius 2).
console.log(`10. =================`)


let masyvas10 = [1, 2, 4, 5, 6, 7, 7, 8, 9, 10, 22, 10]



// 11. Parašykite programą, kuri galėtų masyvą išskaidyti į pasirinkto dydžio gabalėlius (chunk size). Pvz turint masyvą [1, 2, 3, 4, 5, 6] ir pasirinkus chunk size 2, turėtų gautis toks masyvas - [[1, 2], [3, 4], [5, 6]].
console.log(`11. =================`)









