//=================
//PIRMAS BLOKAS
//=================

// pratestavimas ar butonas pasiima:
console.log(document.querySelector(`.pirmas button`))

document.querySelector(`.pirmas button`).addEventListener(`click`, () => {
    alert(`Laimejai iPhone 15 Pro Max Ultra Vps Insane`)
})

//arba vietoj () => galima rasyti function():

// document.querySelector(`.pirmas button`).addEventListener(`click`, function() {
//     alert(`Laimejai iPhone 15 Pro Max Ultra Vps Insane`)
// })

//arba:

// document.querySelector('.pirmas button').addEventListener('click', pirmoMygtukoFunkcija);
// function pirmoMygtukoFunkcija() {
//     alert('Laimejai limonado!');
// }

// console.dir( document.querySelector('.pirmas button') )

// ketvirtas variantas:

// document.querySelector('.pirmas button').onclick = function() {
//     alert('Laimejai limonado!');
// }

// penktas variantas:
// document.querySelector('.pirmas button').onclick = () => {
//     alert('Laimejai kavos!');
// }


//////////////
//ANTRAS BLOKAS
//////////////

let antroMygtukas = document.querySelector(`.antras button`)
let antroTekstas = document.querySelector(`.antras span`)
let antroSk = 1;

console.log(antroMygtukas, antroTekstas)

antroMygtukas.addEventListener(`click`, () => {
    antroTekstas.innerText = antroSk++;
})


/////////////
//TRECIAS BLOKAS
////////////

let maziauMygtukas = document.querySelector(`.trecias p`).previousElementSibling;
let daugiauMygtukas = maziauMygtukas.nextElementSibling.nextElementSibling;
let trecioTekstas = maziauMygtukas.nextElementSibling;

// console.log(maziauMygtukas, trecioTekstas, daugiauMygtukas)

daugiauMygtukas.addEventListener(`click`, () => {
    //console.log(typeof trecioTekstas.innerText, trecioTekstas.innerText)
    let naujas = parseInt(trecioTekstas.textContent) + 1;
    trecioTekstas.textContent = naujas;
})

maziauMygtukas.addEventListener(`click`, () => {
    trecioTekstas.textContent = parseInt(trecioTekstas.textContent) - 1;
})

/////////////
//KETVIRTAS BLOKAS
/////////////  

let ketvirtoTekstas = document.querySelector(`.ketvirtas p strong`);

document.querySelector(`.ketvirtas .htmlp`).addEventListener(`click`, () => {
    ketvirtoTekstas.innerText = `HTML - tai yra kalba...`
})

document.querySelector(`.ketvirtas .cssp`).addEventListener(`click`, (event) => {
    ketvirtoTekstas.innerText = event.target.textContent;
})

document.querySelector(`.ketvirtas .jsp`).addEventListener(`click`, () => {
    ketvirtoTekstas.innerText = `JavaScript - tai yra kalba...`
})




