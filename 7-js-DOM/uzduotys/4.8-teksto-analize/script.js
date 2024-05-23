let tekstas = document.querySelector(`.blokas1 textarea`)
let analizuoti = document.querySelector(`.blokas1 .btn1`)
let isvalyti = document.querySelector(`.blokas1 .btn2`)
let atsakymas1 = document.querySelector(`.atsakymas1`)
let atsakymas2 = document.querySelector(`.atsakymas2`)
let zodziai = document.querySelector(`.zodziai`)
let simboliai = document.querySelector(`.simboliai`)

let klaida = document.querySelector(`.blokas2 .klaida`)

analizuoti.addEventListener(`click`, () => {
    
    atsakymas1.classList.remove(`hidden`)
    zodziai.textContent = `${tekstas.value.split(` `).length}`

    atsakymas2.classList.remove(`hidden`)
    simboliai.textContent = `${tekstas.textLength}`

    if (tekstas.textLength >= 1){
        isvalyti.classList.remove(`hidden`)
    }
    
    if (tekstas.value === ""){
        atsakymas1.classList.add(`hidden`)
        atsakymas2.classList.add(`hidden`)
        klaida.classList.remove(`hidden`)
    }
    
    if (tekstas.textLength >= 1) {
        klaida.classList.add(`hidden`)
    }
})

isvalyti.addEventListener(`click`, () => {
    isvalyti.classList.add(`hidden`)
    tekstas.value = ``

    atsakymas1.classList.add(`hidden`)
    atsakymas2.classList.add(`hidden`)
})


