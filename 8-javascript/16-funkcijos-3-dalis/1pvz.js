function isvedimas(komentaras, masyvas) {
    console.log(komentaras + ":")

    for (const elementas of masyvas) {
        console.log('=', elementas)
    }
}

let skaiciai = [2, 3, 5, 66, 7, 8, 2]
let zodziai = [`Obelis`, `Kelmas`, `Popierius`]

isvedimas(`Skaiciai`, skaiciai)
isvedimas(`Zodziai`, zodziai)

