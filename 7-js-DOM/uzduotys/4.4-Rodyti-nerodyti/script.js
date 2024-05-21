let mygtukas = document.querySelector(`button`);
let tekstas = document.querySelector(`p`);

console.log(mygtukas, tekstas)

mygtukas.addEventListener(`click`, () => {
    if (mygtukas.textContent == `Rodyti`){
    tekstas.classList.remove(`nerodyti`);
    mygtukas.textContent = `Nerodyti`;
    } else if (!(mygtukas.classList.contains(`nerodyti`))){
        tekstas.classList.add(`nerodyti`);
        mygtukas.textContent = `Rodyti`;
    }
})
