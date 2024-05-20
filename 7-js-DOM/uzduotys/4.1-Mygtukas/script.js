let mygtukas = document.querySelector(`button`)
let skaiciusYra = document.querySelector(`.skaicius-yra`);
let tekstas = document.querySelector(`.tekstas`)
let skaiciukas = 0;

// console.log(mygtukas, skaiciusYra, tekstas)

mygtukas.addEventListener(`click`, () => {
    skaiciukas++;
    // console.log(skaiciukas)
    skaiciusYra.textContent = `Skaičius yra: ${skaiciukas}`;
    
    if (skaiciukas >= 40) {
        tekstas.textContent = `Kur tu eini? Daugiau lygių nebėra`;
        tekstas.style.backgroundColor = `red`;
        tekstas.style.color = `white`;
    } else if (skaiciukas >= 30){
        tekstas.textContent = `Jau pasiekėm 30!`;
        tekstas.style.backgroundColor = `red`;
        tekstas.style.color = `white`;
    } else if (skaiciukas >= 20){
        tekstas.textContent = `Jau pasiekėm 20!`;
        tekstas.style.backgroundColor = `#FF4500`;
        tekstas.style.color = `white`;
    } else if (skaiciukas >= 10){
        tekstas.textContent = `Jau pasiekėm 10!`;
        tekstas.style.backgroundColor = `orange`;
    } 
})