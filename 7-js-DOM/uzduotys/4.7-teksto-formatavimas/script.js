let mygtukas1 = document.querySelector(`.no1`)
let mygtukas2 = document.querySelector(`.no2`)
let mygtukas3 = document.querySelector(`.no3`)

let input = document.querySelector(`.pirmas input`)

let tekstas = document.querySelector(`p`)






mygtukas1.addEventListener(`click`, () => {
    tekstas.style.fontWeight = `normal`;
    tekstas.style.fontStyle = `normal`;

    mygtukas1.classList.add(`pressed`)
    mygtukas2.classList.remove(`pressed`)
    mygtukas3.classList.remove(`pressed`)
})

mygtukas2.addEventListener(`click`, () => {
    tekstas.style.fontWeight = `bold`
    tekstas.style.fontStyle = `normal`

    mygtukas1.classList.remove(`pressed`)
    mygtukas2.classList.add(`pressed`)
    mygtukas3.classList.remove(`pressed`)
})

mygtukas3.addEventListener(`click`, () => {
    tekstas.style.fontStyle = `italic`
    tekstas.style.fontWeight = `normal`

    mygtukas1.classList.remove(`pressed`)
    mygtukas2.classList.remove(`pressed`)
    mygtukas3.classList.add(`pressed`)
})