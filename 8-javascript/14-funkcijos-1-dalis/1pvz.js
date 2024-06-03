let pirmas = 10;
let antras = 20;

if (pirmas > antras){
    console.log(pirmas, `didesnis`)
} else if (antras > pirmas){
    console.log(antras, `didesnis`)
} else {
    console.log(`skaiciai lygus`)
}

// jei noreciau pakartoti, turiu perrasyti:

pirmas = 71;
antras = 62;

if (pirmas > antras){
    console.log(pirmas, `didesnis`)
} else if (antras > pirmas){
    console.log(antras, `didesnis`)
} else {
    console.log(`skaiciai lygus`)
}

console.log(`------------------`)
// NAUDOJANT FUNCTION, kad nereiktu kartoti visur per nauja koduko:

function didesnisSk() {
    let sk1 = Math.ceil(Math.random() * 10)
    let sk2 = Math.ceil(Math.random() * 10)

    if (sk1 > sk2) {
        console.log(sk1, `didesnis`)
    } else if (sk2 > sk1) {
        console.log(sk2, `didesnis`)
    } else {
        console.log(`skaiciai vienodi`)
    }
}

// funkcija vykdo si koduka kiek kartu buvo iskviesta, kiekviena karta iskviesta ji ivykdo funkciijos veiksma:
didesnisSk(); // pirmas kvietimas
didesnisSk(); // antras kvietimas
didesnisSk(); // trecias kvietimas