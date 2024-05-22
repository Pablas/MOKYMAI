let button1 = document.querySelector(`.container button`);
let button2 = button1.nextElementSibling;
let button3 = button1.nextElementSibling.nextElementSibling;

let pirmas = document.querySelector(`.pirmas`)
let antras = document.querySelector(`.antras`)
let trecias = document.querySelector(`.trecias`)


button1.addEventListener(`click`, () => {
    pirmas.classList.remove(`hide`)
    antras.classList.add(`hide`)
    trecias.classList.add(`hide`)

    button1.classList.add(`btn-paspaustas`)
    button2.classList.remove(`btn-paspaustas`)
    button3.classList.remove(`btn-paspaustas`)
})

button2.addEventListener(`click`, () => {
    pirmas.classList.add(`hide`)
    antras.classList.remove(`hide`)
    trecias.classList.add(`hide`)

    button1.classList.remove(`btn-paspaustas`)
    button2.classList.add(`btn-paspaustas`)
    button3.classList.remove(`btn-paspaustas`)
})

button3.addEventListener(`click`, () => {
    pirmas.classList.add(`hide`)
    antras.classList.add(`hide`)
    trecias.classList.remove(`hide`)

    button1.classList.remove(`btn-paspaustas`)
    button2.classList.remove(`btn-paspaustas`)
    button3.classList.add(`btn-paspaustas`)
})