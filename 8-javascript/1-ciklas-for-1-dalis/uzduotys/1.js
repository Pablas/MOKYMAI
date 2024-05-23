console.log(`---1:`)
//1. Parašyti for, kuris išvestų kiekvieną skaičių pradedant nuo 0 ir baigiant 10.

for (let i = 0; i <= 10; i++){
    console.log(i)
}



console.log(`---2:`)
//2. Parašyti for, kuris išvestų kas antrą skaičių pradedant 0 ir baigiant 15.

for (let i = 0; i <= 15; i += 2){
    console.log(i)
}



console.log(`---3:`)
//3. Parašyti for, kuris išvestų kas trečią skaičių, pradedant 1 ir baigiant 20.

for (let i = 1; i <= 20; i += 3){
    console.log(i)
}



console.log(`---4:`)
//4. Parašyti for, kuris eitų pro kiekvieną skaičių nuo 1 iki 20. Jame apsirašyti if sąlygą, kuri patikrintų ar dabartinis skaičius dalinasi iš 4, jei taip tai šį skaičių išvesti.

for (let i = 1; i <= 20; i++){
    if (i % 4 == 0){
        console.log(i)
    }
}




console.log(`---5:`)
//5. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet vykdyti for, kuris atskirose eilutėse išvestų kiekvieną skaičių iš tų rėžių, bei atskiriant tarpu - tų skaičių kvadratus.

let start = 32;
let end = 41;

for (let i = start; i <= end; i++){
    console.log(i, `skaičius kvadratu: ${i * i}`)
}



console.log(`---6:`)
//6. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet vykdyti for, kuris iš duotų skaičių išvestų visus nelyginius skaičius arba tuos, kurie dalinasi iš 8.

let pradzia = 79;
let pabaiga = 98;

for (let i = pradzia; i <= pabaiga; i++){
    if (!(i % 2 === 0) || i % 8 == 0){
        console.log(i)
    }
}



console.log(`---7:`)
//7. (papildomai, sunkiau) Be daugybos veiksmo programoje, sudauginti du skaičius.

let skaicius1 = 3;
let skaicius2 = 5;


let suma = 0;

for (let i = 1; i <= 10; i++){
    if (i % 2 == 0){
        suma += i;
    }

    console.log(i)
}

console.log(`suma:`, suma)