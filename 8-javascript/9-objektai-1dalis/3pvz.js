let imone = {
    pavadinimas: `Maxima`,
    adresas: `Gedimino pr 9`,
    miestas: `Vilnius`,
    veikla: `parduotuve`,
    kontaktai: {
        telefonas: `8 700 45 021`,
        email: `info@maxima.lt`
    },
    prekiuKategorijos: [
        `maistas`,
        `valymo priemones`,
        `kosmetika`,
        `technika`
    ]
}

// norint paimti tolesnius reikia teisiogini kelia nurodyt:
console.log(`Prekiu kategorijos`, imone.prekiuKategorijos) //nukeliaujam i prekiuKategorijas, nes jis imones viduje
console.log(`Prekiu kategoriju indeksas 2:`, imone.prekiuKategorijos[2]) //nukeliauja i masyvo indeksa kuris yra idetas i prekiuKategorijos


/// galima isideti ir i cikla:
console.log(`Prekiu kategorijos:`)

for (const kategorija of imone.prekiuKategorijos) {
    console.log(`-`, kategorija)
}