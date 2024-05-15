//
console.log()
//1. Susikurkite tris skaičių kintamuosius. Patikrinkite šias sąlygas (naudojant else if dalis):

let sk1 = 23;
let sk2 = -66;
let sk3 = -2;

if (sk1 > sk2){
    console.log('1.1 pirmas skaicius didesnis uz antra')
} else if (sk2 > sk3){
    console.log('1.2 antras skaicius didesnis uz trecia')
} else if (sk3 > sk1){
    console.log('1.3 Trecias skaicius didesnis uz pirma')
}

if (sk1 == sk2){
    console.log('1.4 pirmas ir antras skaiciai lygus')
} else if (sk2 == sk3){
    console.log('1.5 antras ir trecias skaiciai yra lygus')
} else if (sk1 == 0){
    console.log('1.6 pirmas skaicius yra lygus nuliui')
}

if (sk2 < 0){
    console.log('1.7 antras skaicius yra neigiamas')
} else if (sk3 > 0) {
    console.log('1.8 trecias skaicius yra teigiamas')
}

//
console.log()
console.log()
//2. Susikurkite kintamąjį egzamino pažymiui saugoti [0-10]. Naudojant else if dalis patikrinkite šias sąlygas ir išveskite atitinkamą tekstą:

let pazymys = 8;

if (pazymys == 10){
    console.log(`2.1 Pažymys: ${pazymys} - puiku!`)
} else if (pazymys >= 9){
    console.log(`2.2 Pažymys: ${pazymys} - labai gerai!`)
} else if (pazymys >= 7){
    console.log(`2.3 Pažymys: ${pazymys} - gerai.`)
} else if (pazymys >= 5){
    console.log(`2.4 Pažymys: ${pazymys} - patenkinamai.`)
} else if (pazymys < 5){
    console.log(`2.5 Pažymys: ${pazymys} - egzaminas neišlaikytas!`)
}

//
console.log()