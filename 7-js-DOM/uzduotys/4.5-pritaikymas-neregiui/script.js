let mygtukas = document.querySelector(`button`);


mygtukas.addEventListener(`click`, () => {
    document.querySelector(`table`).classList.toggle(`didinti`);
    mygtukas.classList.toggle(`didinti`);
    document.querySelector(`p`).classList.toggle(`didinti`);
    document.querySelector(`h1`).classList.toggle(`didinti-h1`);
    document.querySelector(`ul`).classList.toggle(`didinti`);

    mygtukas.textContent = `Viską gražinti atgal`

    if (!(mygtukas.classList.contains(`didinti`))) {
        mygtukas.textContent = `Viską išdidinti`;
    }
})