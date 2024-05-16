//1. Susikurkite tris skaičius. Suraskite kuris iš šių skaičių yra didžiausias.

let sk1 = 1100;
let sk2 = 1155;
let sk3 = 226;

if (sk1 > sk2 && sk1 > sk3) {
    console.log(`${sk1} didziausias`)
} else if (sk2 > sk1 && sk2 > sk3){
    console.log(`${sk2} didziausias`)
} else if (sk3 > sk1 && sk3 > sk2){
    console.log(`${sk3} didziausias`)
}

//2. Susikurkite tris skaičius. Suraskite kuris iš šių skaičių yra mažiausias.

if (sk1 < sk2 && sk1 < sk3) {
    console.log(`${sk1} maziausias`)
} else if (sk2 < sk1 && sk2 < sk3){
    console.log(`${sk2} maziausias`)
} else if (sk3 < sk1 && sk3 < sk2){
    console.log(`${sk3} maziausias`)
} else {
    console.log(`Atsakymas nerastas`)
}

//3. Susikurkite trijų egzaminų rezultatų kintamuosius. Suraskite pažymių vidurkį. Atlikite šiuos patikrinimus:

let eg1 = 2;
let eg2 = 5;
let eg3 = 5;

let vidurkis = (eg1 + eg2 + eg3) / 3;

if (vidurkis >= 8 && vidurkis <= 10){
    console.log(`Vidurkis ${vidurkis}, labai geras!`)
} else if (vidurkis >= 5 && vidurkis < 8){
    console.log(`Vidurkis ${vidurkis}, vidutinis.`)
} else if (vidurkis < 5 && vidurkis >=0){
    console.log(`Vidurkis ${vidurkis}, prastas.`)
} else {
    console.log(`Vidurkis neapsiskaiciuoja!`)
}

//4. Susikurkite du skaičius. Patikrinkite (naudojant 4 atskirus if’us):

sk1 = 28;
sk2 = 4;

if (sk1 > sk2 && sk1 == 0){
    console.log(`Skaicius didesnis uz antraji arba lygus 0`)
}

