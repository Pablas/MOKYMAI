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