let tekstas = document.querySelector(`span`);
let atgal = document.querySelector(`.atgal`);
let pirmyn = document.querySelector(`.pirmyn`)
let skaiciukas = 1;

// console.log(tekstas, atgal, pirmyn)



pirmyn.addEventListener(`click`, () => {
    ++skaiciukas;
    tekstas.textContent = skaiciukas;
    if (skaiciukas >= 5){
        skaiciukas = 0;
    }
})

atgal.addEventListener(`click`, () => {
    skaiciukas--;
    tekstas.textContent = skaiciukas;
    if (skaiciukas < 2){
        skaiciukas = 6;
    }
})