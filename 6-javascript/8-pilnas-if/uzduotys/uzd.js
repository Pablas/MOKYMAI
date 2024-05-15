//1. Susikurkite skaičiui saugoti skirtą kintamąjį. Tikrinkite (naudojant visas if sąlygos dalis):

let sk = 40;

if (sk % 2 == 0){
    console.log('Skaicius lyginis')
} else if (sk % 5 == 0){
    console.log('Skaicius dalinasi is 5')
} else if (sk == 3){
    console.log('Skaicius lygus 3')
} else {
    console.log('Klaida, nepavyksta gauti teisingo atsakymo')
}

//2. Susikurkite tris skaičius. Tikrinkite (naudojant visas if sąlygos dalis):

let sk1 = 10;
let sk2 = 3;
let sk3 = 19;

if (sk1 == sk2){
    console.log('Skaicius pirmas ir skaicius antras yra lygus')
} else if (sk1 == sk3){
    console.log('Skaicius pirmas ir skaicius trecias yra lygus')
} else if (sk3 > sk1){
    console.log('Trecias skaicius didesnis uz pirma skaiciu')
} else if (sk2 == sk3 * 2){
    console.log('Antras skaicius lygus trecio skaiciaus dvigubai reiksmei')
} else if (sk1 % 3 == 0){
    console.log('Pirmas skaicius dalinasi is 3')
} else {
    console.log('Klaida, irasyk kitus skaicius su sitais nk nepadarysi')
}
