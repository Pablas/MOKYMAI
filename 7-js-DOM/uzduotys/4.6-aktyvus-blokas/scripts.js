let blokas1 = document.querySelector(`.pirmas`);
let blokas2 = document.querySelector(`.antras`)
let blokas3 = document.querySelector(`.trecias`)

// console.log(blokas1, blokas2, blokas3)

blokas1.addEventListener(`click`, () => {
    document.querySelector(`.pirmas p`).classList.add(`aktyvus-p`)
    blokas1.classList.add(`aktyvus-blokas`)

    //remove:
    document.querySelector(`.antras p`).classList.remove(`aktyvus-p`)
    blokas2.classList.remove(`aktyvus-blokas`)
    document.querySelector(`.trecias p`).classList.remove(`aktyvus-p`)
    blokas3.classList.remove(`aktyvus-blokas`)
})

blokas2.addEventListener(`click`, () => {
    document.querySelector(`.antras p`).classList.add(`aktyvus-p`)
    blokas2.classList.add(`aktyvus-blokas`)

    //remove:
    document.querySelector(`.pirmas p`).classList.remove(`aktyvus-p`)
    blokas1.classList.remove(`aktyvus-blokas`)
    document.querySelector(`.trecias p`).classList.remove(`aktyvus-p`)
    blokas3.classList.remove(`aktyvus-blokas`)
})

blokas3.addEventListener(`click`, () => {
    document.querySelector(`.trecias p`).classList.add(`aktyvus-p`)
    blokas3.classList.add(`aktyvus-blokas`)

    //remove:
    document.querySelector(`.pirmas p`).classList.remove(`aktyvus-p`)
    blokas1.classList.remove(`aktyvus-blokas`)
    document.querySelector(`.antras p`).classList.remove(`aktyvus-p`)
    blokas2.classList.remove(`aktyvus-blokas`)
})


