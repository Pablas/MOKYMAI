// ===============================
// PIRMAS BLOKAS
// ===============================

document.querySelector(`.pirmas p`).style.fontSize = `40px`
document.querySelector(`.pirmas p`).style.textDecoration = `underline`
document.querySelector(`.pirmas h1`).style.fontSize = `20px`
document.querySelector(`.pirmas h1`).style.textTransform = `uppercase`
document.querySelector(`.pirmas h1`).style.color = `royalblue`
document.querySelector(`.pirmas h1`).style.letterSpacing = `20px`

// ===============================
// ANTRAS BLOKAS
// ===============================

let paslauguAntraste = document.querySelector(`.antras h2`);
// console.dir(paslauguAntraste)
// console.log(paslauguAntraste)

paslauguAntraste.style.fontSize = `30px`;
paslauguAntraste.style.textTransform = `uppercase`;

let paslauga1 = document.querySelector(`.antras .pirma-paslauga`)

paslauga1.style.backgroundColor = `lightGreen`
paslauga1.style.fontSize = `23px`


///////// pameginimas pasizaist:

let paslauga2 = document.querySelector(`.antras .antra-paslauga`)

paslauga2.style.textTransform = `uppercase`
paslauga2.style.color = `white`
paslauga2.style.backgroundColor = `Gray`
paslauga2.style.textDecoration = `underline`

let paslauga3 = document.querySelector(`.antras .trecia-paslauga`)

paslauga3.style.fontSize = `40px`
paslauga3.style.backgroundColor = `black`
paslauga3.style.color = `lightGreen`
paslauga3.style.letterSpacing = `10px`
paslauga3.style.textDecoration = `underline`
paslauga3.style.textAlign = `center`
paslauga3.style.padding = `20px`


// ===============================
// TRECIAS BLOKAS
// ===============================


let trecioPar = document.querySelector(`.trecias p`);

document.querySelector(`.trecias .raudonas-btn`).addEventListener(`click`, () =>{
    // console.log(`paspaudziau ant raudonas`)
    trecioPar.style.color = `red`;
})

document.querySelector(`.trecias .melinas-btn`).addEventListener(`click`, () =>{
    trecioPar.style.color = `royalBlue`;
})

document.querySelector(`.trecias .zalias-btn`).addEventListener(`click`, () => {
    trecioPar.style.color = `green`;
})

// ===============================
// KETVIRTAS BLOKAS
// ===============================

let ketvirtoPirmas = document.querySelector(`.ketvirtas .mygtukas1`)
let ketvirtoAntras = document.querySelector(`.ketvirtas .mygtukas2`)
let ketvirtoTrecias = document.querySelector(`.ketvirtas .mygtukas3`)

// console.log(ketvirtoAntras, ketvirtoPirmas, ketvirtoTrecias)

ketvirtoPirmas.addEventListener(`click`, () => {
    ketvirtoPirmas.style.fontWeight = `bold`
    ketvirtoAntras.style.fontWeight = `normal`
    ketvirtoTrecias.style.fontWeight = `normal`
})

ketvirtoAntras.addEventListener(`click`, () => {
    ketvirtoPirmas.style.fontWeight = `normal`
    ketvirtoAntras.style.fontWeight = `bold`
    ketvirtoTrecias.style.fontWeight = `normal`
})

ketvirtoTrecias.addEventListener(`click`, () => {
    ketvirtoPirmas.style.fontWeight = `normal`
    ketvirtoAntras.style.fontWeight = `normal`
    ketvirtoTrecias.style.fontWeight = `bold`
})