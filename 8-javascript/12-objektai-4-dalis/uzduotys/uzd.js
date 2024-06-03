// 1. Susikurkite objektų masyvą įmonių duomenims saugoti ir jį užpildykite duomenimis. Išveskite kiekvienos įmonės informaciją atskirose eilutėse, gražiai suformatuotai (sakinio pavidalu ar pan.). Taip pat, ką nors paskaičiuokite iš turimų skaitinių duomenų (pvz.: vidutinis įmonės amžius, darbuotojų kiekis per visas įmones, bendras pelnas, ar pan.).
console.log(`1. ===============`)

let duomenys = [
    {
        pavadinimas: `UAB Laisvo oro direktoriai`,
        isikure: 1990,
        darbuotojuSk: 23,
        pelnasPerMetus: 1300
    },
    {
        pavadinimas: `LEGO figureliu kurejai`,
        isikure: 2003,
        darbuotojuSk: 150,
        pelnasPerMetus: 50000
    },
    {
        pavadinimas: `Elektros tinklai`,
        isikure: 2010,
        darbuotojuSk: 76,
        pelnasPerMetus: 600000
    }
]

console.log(`Vidutiniskai imone isikurus:`)
let vid = duomenys.map(metai => metai.isikure).reduce((a, b) => a + b) / duomenys.length;
console.log(vid)


console.log(`Bendras imoniu grupes pelnas:`)
let bendrasPelnas = duomenys.map(pelnas => pelnas.pelnasPerMetus).reduce((a, b) => a + b);
console.log(bendrasPelnas)


console.log(`Imoniu grupiu vidutiniskas darbuotoju kiekis:`)
let vidDarbKiekis = duomenys.map(d => d.darbuotojuSk).reduce((a, b) => a + b) / duomenys.length;
console.log(vidDarbKiekis)


// 2. Susikurkite objektų masyvą ligoninių duomenims saugoti ir užpildykite jį pasirinktais duomenimis. Išveskite ligoninių pavadinimus su adresais skirtingose eilutėse. Suskaičiuokite ką nors iš skaitinių jų duomenų, pvz.: bendrą lankytojų kiekį, bendrą ar vidutinį darbuotojų kiekį, ar pan.
console.log(`2. ===============`)

let duomenys2 = [
    {
        ligonine1 : {
            pavadinimas: `Onkologijos ligonine`,
            daktaruSk: 56,
            slaugytojuSk: 126,
            automobiliuKiekis: 13,
        },
        ligonine2: {
            pavadinimas: `Kauno klinikos`,
            daktaruSk: 77,
            slaugytojuSk: 244,
            automobiliuKiekis: 34,
        }
    }
]

console.log(`Bendras daktaru skaicius ligoninese:`)
let bendrasDakSk = duomenys2.map(sk => sk.ligonine1.daktaruSk + sk.ligonine2.daktaruSk).reduce((a, b) => a + b)
console.log(bendrasDakSk)

console.log(`Vidutinis slaugytoju skaicius:`)
let slaugytojos = duomenys2.map(x => x.ligonine1.slaugytojuSk + x.ligonine2.slaugytojuSk).reduce((a, b) => a + b) / Object.keys(duomenys2[0]).length;
console.log(slaugytojos)

console.log(`Automobiliu skaicius:`)
let autoSk = duomenys2.map(x => x.ligonine1.automobiliuKiekis + x.ligonine2.automobiliuKiekis).reduce((a, b) => a + b);
console.log(autoSk)