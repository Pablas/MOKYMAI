let skaiciai = [ 101, 2, -4, 5, 6, -15, -123, 23, 16]


///////////
// jeigu noriu trumpaja versija atsifiltruoti tik teigiamus skaicius (vietoje forEach - filter, atrenka skaicius):
let teigiami = skaiciai.filter(sk => sk > 0)
console.log(teigiami)


//////////
// atsirinkti tik neigiamus:
let neigiami = skaiciai.filter(sk => sk < 0)
console.log(neigiami)


//////////
// atsirinkti kurie lyginiai skaiciai (dalinasi is 2):
let lyginiai = skaiciai.filter(sk => sk % 2 == 0)
console.log(lyginiai)


/////////
// teigiami ir lyginiai skaiciai:
let teigiamiIrLyginiai = skaiciai.filter(sk => sk > 0 && sk % 2 == 0)
console.log(teigiamiIrLyginiai)


///////////////////////////////////
// ilgesne sintakse (reikia prideti `return` jeigu dedam { } viduje):

let dalinasiIs3arba4 = skaiciai.filter(sk => {
    return sk % 3 == 0 || sk % 4 == 0
})

console.log(dalinasiIs3arba4)