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


let ketvirtoJsMygtukas = document.querySelector(`.ketvirtas .jsp`);

ketvirtoJsMygtukas.addEventListener(`click`, () => {
    // console.dir(ketvirtoJsMygtukas)
    // console.log(ketvirtoJsMygtukas.textContent)

    ketvirtoTekstas.textContent = ketvirtoJsMygtukas.textContent;
})

// =======================================================
// PENKTAS BLOKAS
// =======================================================

let penktoMygtukas = document.querySelector('.penktas button');
let penktoSk = 1;

// console.log(penktoMygtukas)

penktoMygtukas.addEventListener(`click`, () => {
    // console.log(`buvo paspausta`)
    // console.dir(penktoMygtukas.querySelector(`span`).textContent)
    penktoMygtukas.querySelector(`span`).textContent = penktoSk++;
})

///////////////////////
//SESTAS BLOKAS
///////////////////////

let sestoSk = 0;
// let sestoMygtuko = document.querySelector('.sestas button'); // 1 variantas pasiekti mygtuka

document.querySelector(`.sestas button`).addEventListener(`click`, (event) => {
    sestoSk++;
    console.log(`veikia`, sestoSk)
    // sestoMygtuko.textContent = sestoSk; // 1 variantas pakeisti mygtuko teksta
    event.target.textContent = sestoSk;
})


////////////////////////
//SEPTINTAS BLOKAS
////////////////////////

let septintoSk = 0;

document.querySelector(`.septintas button`).addEventListener(`click`, (event) => {
    septintoSk++;
    console.log(septintoSk)
    event.target.textContent = septintoSk;
    if (septintoSk >= 10) {
        event.target.textContent = 'VALIO!';
        
        event.target.disabled = true;
    } else {
        event.target.textContent = septintoSk;
    }
})

////////////////////
//ASTUNTAS BLOKAS
////////////////////

let astuntoInputas = document.querySelector(`.astuntas input`);
// console.dir(astuntoInputas)

astuntoInputas.addEventListener(`input`, () => {
    // console.log(`pasikeite`)
    // console.dir(astuntoInputas) 
    console.log(astuntoInputas.value)
    astuntoInputas.nextElementSibling.innerHTML = astuntoInputas.value;
})

////////////////////
//DEVINTAS BLOKAS
////////////////////

document.querySelector(`.devintas input`).addEventListener(`input`, (event) => {
    // console.log(`ivyko`)

    let tekstas = event.target.value;
    // console.log(tekstas)

    // event.target.nextElementSibling.innerHTML = `<p>${tekstas}</p>`;

    let divas = event.target.nextElementSibling ;


    if (tekstas.length == 0){
        divas.innerHTML = `<p>Kolkas nieko neivesta</p>`
    } else if (tekstas.length <= 5) {
        divas.innerHTML = `<p style="color: green">${tekstas}</p>`;
    } else if (tekstas.length <= 10){
        divas.innerHTML = `<p style="color: orange">${tekstas}</p>`
    } else {
        divas.innerHTML = `<p style="color: red">${tekstas}</p>`
    }

    
})



