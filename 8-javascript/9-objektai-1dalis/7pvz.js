let preke1 = {
    pavadinimas: `piestukai`,
    kiekis: 20,
    kaina: 0.7
}

let preke2 = {
    pavadinimas: `tusinukai`,
    kiekis: 50,
    kaina: 1.2
}

let brangesne = null;


//priskiriant objekta prie "brangesne" kintamojo.
if (preke1.kaina > preke2.kaina){
    brangesne = preke1;
} else if (preke1.kaina < preke2.kaina){
    brangesne = preke2;
}

// jei brangesne pasidare tas pats kaip preke1 (brangesne nera null), perime praeitam if'e, tuomet ir eiti galima taip pat: brangesne.pavadinimas, vietoje preke1:
if (brangesne != null){
    console.log(`Brangesne preke yra:`, brangesne.pavadinimas)/// <---
}