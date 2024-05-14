// 1. Susikurkite tris kintamuosius skaičiams saugoti

let pirmas = 5
let antras = 4
let trecias = 3

// 1.1 Ar pirmas ir antras skaičiai yra lygūs?

if (pirmas == antras){
    console.log('1.1 lygus')
}

if (pirmas !== antras){
    console.log('1.1 nelygus')
}

// 1.2 Ar antras ir trečias skaičiai yra lygūs?

if (antras == trecias){
    console.log('1.2 lygus')
}

if (antras !== trecias){
    console.log('1.2 nelygus')
}

// 1.3 Ar pirmas skaičius yra didesnis už antrąjį?

if (pirmas > antras){
    console.log('1.3 didesnis')
}

if (pirmas < antras){
    console.log('1.3 nedidesnis')
}

// 1.4 Ar antras skaičius yra didesnis už dvigubą trečiojo skaičiaus reikšmę (trečias skaičius padaugintas iš 2)?

if (antras > trecias * 2){
    console.log('1.4 taip')
}

if (antras < trecias * 2){
    console.log('1.4 ne')
}

// 1.5 Ar pirmas skaičius yra lyginis (ar dalinasi iš 2)?

if (pirmas % 2 == 0){
    console.log('1.5 lyginis')
}

if (pirmas % 2 !== 0){
    console.log('1.5 nelyginis')
}

// 1.6 Ar antras skaičius yra nelyginis (ar nesidalina iš 2)?

if (antras % 2 == 0) {
    console.log('1.6 dalinasi')
}

if (antras % 2 !== 0) {
    console.log('1.6 ne')
}

//1.7 Ar trečias skaičius yra teigiamas (didesnis už 0)?

if (trecias > 0) {
    console.log('1.7 teigiamas')
}

if (trecias <= 0) {
    console.log('1.7 neigiamas')
}

//1.8 Ar pirmas skaičius yra neigiamas (mažesnis už 0)?

if (pirmas > 0){
    console.log('1.8 ne')
}

if (pirmas <= 0){
    console.log('1.8 taip')
}

//1.9 Ar antras skaičius dalinasi iš 4?

if (antras % 4 == 0){
    console.log('1.9 dalinasi')
}

if (antras % 4 !== 0){
    console.log('1.9 nesidalina')
}

//1.10 Ar trečias skaičius dalinasi iš 8?

if (trecias / 8 == 0){
    console.log('1.10 dalinasi')
}

if (trecias % 8 !== 0){
    console.log('1.10 nesidalina')
}


//
console.log()
console.log()

//2. Susikurkite kintamąjį vartotojo amžiui saugoti. Patikrinkite ar amžius yra didesnis arba lygus 18-ai, jei taip - išveskite “jūs galite balsuoti”.

let amzius = 16;

if (amzius >= 18){
    console.log('2 Jūs galite balsuoti')
}

if (amzius < 18){
    console.log('2 Jūs negalite balsuoti')
}

//
console.log()
console.log()
//3. Susikurkite kelis kintamuosius saugoti pažymiams. Raskite šių pažymių vidurkį. Patikrinkite ar vidurkis teigiamas (daugiau arba lygu 5-iems), jei taip - išveskite “vidurkis teigiamas”.

let p1 = 10;
let p2 = 4;
let p3 = 7;
let vidurkis = (p1 + p2 + p3) / 3;

if (vidurkis >= 5){
    console.log(`3 Jūsų vidurkis teigiamas: ${vidurkis}`)
}

if (vidurkis < 5){
    console.log(`3 Jūsų vidurkis neigiamas: ${vidurkis}`)
}

//
console.log()
console.log()
//4. Susikurkite skaičiaus kintamąjį. Atlikite šiuos patikrinimus ir veiksmus:

let skaicius = 73;

// 4.1 Jei skaičius dalinasi iš 5, tuomet išveskite šio skaičiaus daugybos lentelę nuo 1 iki 5.
let daugiklis = 1;

if (skaicius % 5 == 0){
    console.log(`4.1 Dalinasi iš 5, štai daugybos lentelė:`)
    console.log(skaicius * daugiklis)
    console.log(skaicius * ++daugiklis)
    console.log(skaicius * ++daugiklis)
    console.log(skaicius * ++daugiklis)
    console.log(skaicius * ++daugiklis)
}

if (skaicius % 5 !== 0){
    console.log(`4.1 Šis skaičius nesidalina iš 5.`)
}

//
console.log()
console.log()
//4.2 Jei skaičius lyginis, tuomet išveskite šį skaičių, jo kvadratą ir jį padalintą iš 2.
let dalyba = 2;

if (skaicius % 2 == 0){
    console.log(`4.2 Šis skaičius lyginis. Skaičiaus kvadratas ir dalyba iš 2:`)
    console.log()
    console.log(skaicius / dalyba)
}

if (skaicius % 2 !== 0){
    console.log(`4.2 Šis skaičius nelyginis.`)
}

//
console.log()
console.log()
//4.3 Jei skaičius nesidalina iš 7, tuomet susikurkite antrąjį kintamąjį, išveskite šių dviejų skaičių sumą, skirtumą, sandaugą, dalmenį.

if (skaicius % 7 !== 0){
    let skaicius2 = 500;
    console.log(`4.3 Skaičius nesidalina iš 7. Papildomas skaičius: ${skaicius2}`)
    console.log(`Skaičių suma: ${skaicius + skaicius2}`)
    console.log(`Skaičių skirtumas: ${skaicius - skaicius2}`)
    console.log(`Skaičių sandauga: ${skaicius * skaicius2}`)
    console.log(`Skaičių dalmuo: ${skaicius / skaicius2}`)
}

if (skaicius % 7 == 0){
    console.log(`4.3 Skaičius dalinasi iš 7.`)
}