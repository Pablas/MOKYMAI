let automobiliai = [
    {
        marke: `Audi`,
        modelis: `A5`,
        metai: 2013,
        kaina: 10000
    },
    {
        marke: `Toyota`,
        modelis: `Corolla`,
        metai: 2003,
        kaina: 7000
    },
    {
        marke: `Volvo`,
        modelis: `S60`,
        metai: 2008,
        kaina: 11000
    },
    {
        marke: `Honda`,
        modelis: `Civic`,
        metai: 2010,
        kaina: 6000
    },
    {
        marke: `BMW`,
        modelis: `335d`,
        metai: 2009,
        kaina: 8000
    }
]


///////////////////////////
//vidutinai metai, 1 metodas:
let metaiSuma = 0;

for (const auto of automobiliai) {
    console.log(auto.metai)
    metaiSuma += auto.metai;
}

let metuVidurkis = metaiSuma / automobiliai.length;
console.log(`Vidutiniai auto metai:`, Math.round(metuVidurkis)) // Math.round kad suapvalint





console.log(`----------------------`)
///////////////////////////
// vidutiniai metai, 2 metodas:
let metai = automobiliai.map(auto => auto.metai) //map sukelia pagal salyga masyva "metai"
console.log(metai)

console.log(`vidurkis 2:`, Math.round(metai.reduce((a, b) => a + b) / metai.length)) // Math.round kad suapvalint




console.log(`----------------------`)
///////////////////////////
// 3 metodas, vienoje eiluteje:
let vidurkis3 = Math.round(automobiliai.reduce((a, auto) => a + auto.metai, 0) / automobiliai.length); // Math.round kad suapvalint
console.log(`vidurkis 3`, vidurkis3)






