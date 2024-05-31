let skaiciai = [39, 4, 92, 3, 74, 6]


////////////////////////
// rasti maziausia skaiciu:
let maziausias = Math.min(...skaiciai) // Math.min priima skaicius tokiu pavidalu, kad veiktu: (39, 4, 92, 3, 74, 6), todel (...skaiciai) operatorius ir duoda reiksme numetus [].
console.log(maziausias)


////////////////////////
// rasti didziausia skaiciu:
let didziausias = Math.max(...skaiciai) // Math.max priima skaicius tokiu pavidalu, kad veiktu: (39, 4, 92, 3, 74, 6), todel (...skaiciai) operatorius ir duoda reiksme numetus [].
console.log(didziausias)




console.log(`---------------------`)
////////////////////////
// su ciklu ieskoti maziausia sk:
let maziausias2 = skaiciai[0]; // pirma reiksme imam skaiciai masyvo, kad pagal ji tikrintu

for (const sk of skaiciai) {
    if (sk < maziausias2){ // jeigu is "skaiciai" masyvo skaicius yra mazesnis "maziausias2",
        maziausias2 = sk; // replacins "maziausias2" su gautu mazesniu skaicium ir vel prasuks is naujo cikla kol neberas mazesnio, ir liks maziausias "maziausias2".
    }
}

console.log(maziausias2)



console.log(`================================`)

const automobiliai = [
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

console.log(automobiliai.map(auto => auto.metai));


////////////////////////
// maziausius metus pasiimti automobiliu:
let atsakymas = Math.min(...automobiliai.map(auto => auto.metai));
console.log(atsakymas)