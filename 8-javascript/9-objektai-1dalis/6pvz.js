let preke1 = {
    pavadinimas: `piestukai`,
    kiekis: 2,
    kaina: 0.7
}

let preke2 = {
    pavadinimas: `tusinukai`,
    kiekis: 2,
    kaina: 1.2
}


//reikia nurodyti visa atejimo lauka per objekta, ka mes norime lyginti:
if (preke1.kiekis > preke2.kiekis){
    console.log(`Pirmos prekes turime daugiau`)
} else if (preke1.kiekis < preke2.kiekis){
    console.log(`Antros prekes turime daugiau`)
} else {
    console.log(`Prekiu kiekiai lygus`)
}