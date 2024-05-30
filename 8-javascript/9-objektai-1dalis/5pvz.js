let kursas = {
    tema: `Lego figureliu statyba`,
    dalys: {
        pirmaDalis: {
            kaina: [
                999
            ],
            ilgis: `1 metai`
        },
        antraDalis: {
            kaina: [
                999
            ],
            ilgis: `1 metai`
        }
    },
    diplomas: true,
}

console.log(`Kurso tema:`, kursas.tema)
console.log(`Kiek kainuoja visos dalys:`, kursas.dalys.pirmaDalis.kaina[0] + kursas.dalys.antraDalis.kaina[0])
console.log(`Kiek trunka antra dalis kurso? -`, kursas[`dalys`][`antraDalis`][`ilgis`])

