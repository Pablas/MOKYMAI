// 1. Išveskite visus skaičius nuo 1 iki 20.
console.log(`1: ====`)


let sk1 = 0;

while (sk1 < 20){
    sk1++;
    console.log(sk1)
}

// 2. Išveskite visus skaičius nuo 1 iki 50. Prie kiekvieno lyginio skaičiaus parašykite žodį „lyginis“, o prie kiekvieno nelyginio – „nelyginis“.
console.log(`2: ====`)


let sk2 = 0;

while (sk2 < 50){  
    sk2++; 
    if (sk2 % 2 == 0){  
        console.log(sk2, `Lyginis`)
    } else {
        console.log(sk2, `Nelyginis`)
    }
}

// 3. Išveskite visus skaičius nuo 25 iki 50. Vietoj skaičių, kurie dalinasi iš 3 išveskite tekstą „skaičius {skaičius} dalinasi iš 3“.
console.log(`3: ====`)


let sk3 = 25;

while (sk3 < 50){
    sk3++;
    if (sk3 % 3 == 0){
        console.log(`skaičius`, sk3, `dalinasi iš`, 3)
    } else {
        console.log(sk3)
    }
}

// 4. Išvedinėkite visus skaičius nuo 1 iki tol kol pasitaikys skaičius, kuris dalinasi iš 3 ir iš 5.
console.log(`4: ====`)


let sk4 = 0;

// while (!(sk4 % 3 == 0 && sk4 % 5 == 0)){
//     sk4++;
//     console.log(sk4)
// }

while (sk4 >= 0){
    sk4++;
    if (sk4 % 3 == 0 && sk4 % 5 == 0){
        break;
    }
    else {
        console.log(sk4)
    }
}


// 5. Iš skaičių nuo 1 iki 100, raskite visų lyginių skaičių sumą.
console.log(`5: ====`)


let sk5 = 0;
let sk52 = 0;

while (sk5 <= 100){
    sk5++;
    if (sk5 % 2 == 0){
        sk52 += sk5;
        console.log(`lyginis:`, sk5, `| bendra suma:`, sk52)
    }    
}

console.log(`suma:`, sk52)


//6. Žemiau parodytą pavyzdį pakeiskite taip, kad toje pačioje eilutėje išvestų ne tik skaičių, bet ir jo kvadratą:
console.log(`6: ====`)


let skaicius = 1;

while (skaicius < 5) {
	console.log(skaicius, `[DADĖTA:] Kvadratas:`, skaicius * skaicius);
	skaicius++;
}

//7. Išveskite atsitiktinį kiekį atsitiktinių skaičių.
console.log(`7: ====`)


let kiekis = Math.ceil(Math.random());

while (kiekis < 1000){
    kiekis += Math.ceil(Math.random() * 1000) +1;

    console.log(kiekis)
}

//8. Išveskite atsitiktinį kiekį atsitiktinių skaičių. Raskite šių skaičių sumą.
console.log(`8: ====`)

let kiekis2 = Math.ceil(Math.random());
let kiekisSuma = 0;

while (kiekis2 < 1000){
    kiekis2 += Math.ceil(Math.random() * 1000) +1;
    kiekisSuma += kiekis2;

    console.log(kiekis2)
}

console.log(`suma:`, kiekisSuma)


//9. Sukurkite 3 kintamuosius skirtingų prekių kiekiui sekti. Kiekvienos ciklo iteracijos metu bus nupirkti skirtingi ir atsitiktiniai kiekiai šių prekių (gali būti ir nieko nenupirkta: Math.floor(Math.random() * 10) be + 1 dalies). Įsitikinkite, kad nebūtų nupirkta daugiau prekių nei turima inventoriuje. Pardavinėkite tol kol nieko neliks.
console.log(`9: ====`)




//10. (sudėtingesnė) Išvedinėkite visus skaičius nuo 1 iki kol rasite tokį, kuris yra pirminis.
console.log(`10: ====`)

