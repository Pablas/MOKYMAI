let mygtukas = document.querySelector(`button`);
let input = document.querySelector(`input`);
let tekstas = document.querySelector(`.atsakymas`);

// console.log(typeof input)
// console.dir(input)
// console.log(mygtukas, input, tekstas)

mygtukas.addEventListener(`click`, () => {
    
    if (input.value == ""){
        tekstas.classList.add(`nelyginis`);
        tekstas.classList.remove(`lyginis`);
        tekstas.textContent = `Įvedimas ${input.value} netinkamas. Įveskite skaičių.`
    } else if (input.valueAsNumber % 2 == 0){
        // console.log(`dalinasi is 2`)
        tekstas.classList.add(`lyginis`);
        tekstas.classList.remove(`nelyginis`);
        tekstas.textContent = `Skaičius ${input.valueAsNumber} yra lyginis!`;
        input.value = ``;
    } else if (!(input.valueAsNumber % 2 == 0)){
        tekstas.classList.add(`nelyginis`);
        tekstas.classList.remove(`lyginis`);
        tekstas.textContent = `Skaičius ${input.valueAsNumber} yra nelyginis!`;
        input.value = ``;
    } 
})