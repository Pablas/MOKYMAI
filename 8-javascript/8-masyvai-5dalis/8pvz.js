let skaiciai = [10, -2, 0, 12, 31, -23]

console.log(`Pradiniai duomenys:`, skaiciai)

/////////////////////////////////////////
// skaicius dvigubinti:
let dvigubi = skaiciai.map(sk => sk * 2);
console.log(dvigubi)


/////////////////////////////////////////
// konvertuoti i zodi Teigiamas ar Neigiamas, pagal skaiciu su operatorium:
let tekstu = skaiciai.map(sk => sk > 0 ? `Teigiamas` : `Neigiamas`)
console.log(tekstu)


/////////////////////////////////////////
// keisti i html zymas keisti skaicius:
let paragrafai = skaiciai.map(sk => `<p>${sk}</p>`) //skaiciai is masyvo skaiciai įsideda vietoje sk paragrafu viduje
console.log(paragrafai)

///join, kad susijungtu kaip norima:
console.log(  paragrafai.join(``)  )



///////////////////////////////////////
//jeigu skliaustukai naudojami {}, kad rasyti koda per kelias eilutes, reikia return zodzio.

let liZymos = skaiciai.map(sk => {
    return `<li>Skaicius yra ${sk}</li>`;
})

console.log(liZymos)