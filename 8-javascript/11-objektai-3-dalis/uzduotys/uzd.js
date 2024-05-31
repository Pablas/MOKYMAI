// 1. Susikurkite knygų objektų masyvą. Apie kiekvieną knygą į atskirus knygų objektus sudėkite norimą informaciją (bent 3 savybes). Į masyvą įdėkite bent 3 knygas. Visas šias knygas išsiveskite. Tuomet parodykite pirmą knygą. Antros knygos kažkurią savybę.
console.log(`1. ==========`)


let knygos = [
    {
        pavadinimas: `Ejo rinkti grybu`,
        puslapiai: 245,
        leidimoMetai: 1998,
    },
    {
        pavadinimas: `Labas vakaras`,
        puslapiai: 120,
        leidimoMetai: 2003,
    },
    {
        pavadinimas: `Kates metai`,
        puslapiai: 389,
        leidimoMetai: 2014,
    }
]

console.log(`Pirmoji knyga:`, knygos[0].pavadinimas)
console.log(`Antrosios knygos leidimo metai:`, knygos[1].leidimoMetai)


// 2. Susikurkite prekių objektų masyvą ir jį užpildykite pasirinktais duomenimis. Išveskite visų prekių pavadinimus su kainomis ir dar kokiais nors atributais atskirose eilutėse.
console.log(`2. ==========`)

let prekes = [
    {
        pavadinimas: `Arbata`,
        kiekis: 200,
        kaina: 1.49,
        savikaina: 0.35,
    },
    {
        pavadinimas: `Aliejus`,
        kiekis: 100,
        kaina: 4,
        savikaina: 0.5,
    },
    {
        pavadinimas: `Batai`,
        kiekis: 14,
        kaina: 120,
        savikaina: 15,
    }
]

console.log(`Visu prekiu pavadinimai ir kaina:`)

for (let i = 0; i < prekes.length; i++){
    console.log(i + 1, `prekes pavadinimas`, prekes[i].pavadinimas, `, kaina:`, prekes[i].kaina)
    console.log(`Taip pat sios prekes savikaina:`, prekes[i].savikaina,`, sandeli liko:`, prekes[i].kiekis)
    console.log(`--`)
}

// 3. Susikurkite automobilių objektų masyvą ir užpildykite jį pasirinktais duomenimis. Išveskite kiekvieno automobilio pavadinimą, metus ir paskaičiuotą jo amžių (dabartiniai metai - gamybos metai).
console.log(`3. ==========`)

let automobiliai = [
    {
        marke: `Audi`,
        modelis: `A5`,
        metai: 2013,
        rida: 198000
    },
    {
        marke: `Toyota`,
        modelis: `Corolla`,
        metai: 2003,
        rida: 320000
    },
    {
        marke: `Volvo`,
        modelis: `S60`,
        metai: 2008,
        rida: 212000
    }
]

for (const auto of automobiliai) {
    console.log(`Automobilio`, auto.marke, auto.modelis, `Rida:`, auto.rida,`ir`, 2024 - auto.metai, `metu senumo.`)
}



