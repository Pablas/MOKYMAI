let gyvunai = [`Žirafa`, `Avelė`, `Bebras`, `Kengūra`, `Liūtas`, `Kengūra`, `Tigras`, `Kengūra`];

console.log(`Ar yra "Kengūra":`, gyvunai.includes(`Kengūra`))

console.log(`Kengūra yra indekse:`, gyvunai.indexOf(`Kengūra`))
console.log(`Kengūra yra indekse:`, gyvunai.lastIndexOf(`Kengūra`))


//////////////
// PAKEISTI TIK PASKUTINĘ "Kengūrą" REIKŠMĘ Į "Krokodilas":

// let indeksas = gyvunai.lastIndexOf(`Kengūra`);
// gyvunai[indeksas] = `Krokodilas`;

//arba į vieną eilutę:

gyvunai[gyvunai.lastIndexOf(`Kengūra`)] = `Krokodilas`;

console.log(gyvunai)

//////////////
// Jeigu nežinau kur yra "Kengūra", kuriame indekse (numeriuke - index):

let indeksas2 = undefined;

for (const i in gyvunai) {
    if (gyvunai[i].toLowerCase() == `kengūra`)
        indeksas2 = i;
    //break; // !! Jeigu norim tik pirmą surasti, o jei norim paskutinį surasti, reikia palikti, kad per visus pereitu.
}

console.log(`Kengūra yra indekse:`, indeksas2)
