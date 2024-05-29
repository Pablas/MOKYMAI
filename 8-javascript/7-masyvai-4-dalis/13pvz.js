let skaiciai = [2, 8, 4, 6, 7, 8, 1, 9, 3, 5]


/////////////////
// Rikiuoja ant originalaus masyvo:

// skaiciai.sort();
// console.log(skaiciai)

////////////////
// Rikiuoti is originalaus masyvo, bet ant kopijos:

console.log(skaiciai.slice().sort())

console.log(skaiciai.slice().sort().reverse()) //atvirksciai surikiuoja


//////////////////
// Rikiuoja, ilgiausia sintakse rikiavimo:

let surikiuoti1 = skaiciai.slice().sort((pirmas, antras) => {
    if (pirmas > antras){
        return 1;
    } else if (pirmas < antras){
        return -1;
    } else {
        return 0;
    }
})

console.log(`surikiuoti1:`, surikiuoti1)

//////////////////
// Rikiuoja, trumpa sintakse rikiavimo:

let surikiuoti2 = skaiciai.slice().sort((pirmas, antras) => pirmas - antras)
console.log(`surikiuoti2:`, surikiuoti2);


//atvirksciai rikiavimas:
let surikiuoti3 = skaiciai.slice().sort((pirmas, antras) => antras - pirmas)
console.log(`surikiuoti3:`, surikiuoti3);
//taspats kaip surikiuoti3:
let surikiuoti4 = skaiciai.slice().sort((a, b) => b - a)
console.log(`surikiuoti4:`, surikiuoti4);


//////////////////////
// Zodziu rikiavimas:

let zodziai = [`labas`, `Rytas`, `Lietuva`, `Sakau`, `tau`];

let surikiuotiZodziai = zodziai.slice().sort((a, b) => {
    const pirmas = a.toLowerCase()
    const antras = b.toLowerCase()

    if (pirmas < antras) {
        return -1;
    } else if (pirmas > antras){
        return 1;
    } else {
        return 0;
    }
})

console.log(`surikiuotiZodziai:`, surikiuotiZodziai)