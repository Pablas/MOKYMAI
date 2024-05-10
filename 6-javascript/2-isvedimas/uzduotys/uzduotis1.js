// Pirmoje eilutėje išveskite savo vardą ir amžių. Antroje eilutėje išveskite kodėl pasiryžote išbandyti programavimą.

console.log('Povilas', 'Rackauskas', '26 metai')
console.log('Noriu siekti kazkokio karjieros kelio, nesimetyti')

// Išveskite bet kokį eilėraštį, kurį sudarytų bent 5 eilutės.

console.log('Eilerastis apie')
console.log('vilka kuris suvalge')
console.log('raudonkepuraite')
console.log('labai skani ji buvo')
console.log('del to ir suvalge.')

// Išveskite 3x3 dydžio tuščiavidurį kvadratą iš * simbolio. Galutinio rezultato pavyzdys:

console.log('*'+'*'+'*')
console.log('*','*')
console.log('*'+'*'+'*')

// Išveskite:

console.log('*')
console.log('*'+'*')
console.log('*'+'*'+'*')

// Per vieną console.log() išveskite tris skirtingas teksto eilutes.

console.log('Sveikas kaip laikais? \nSveikas kaip laikaisi 2? \nSveikas kaip laikaisi 3?')

// Sukurkite iššokantį pranešimą vartotojui, kuriame pasakytumėte, kad įvyko klaida.

alert('Jusu sistemoje nutiko klaida!')

// Konsolėje iš brūkšniukų ir kitų simbolių išveskite lentelę. Pavyzdžiui:
// +--------+--------+
// | Vardas | Amzius |
// +--------+--------+
// | Tomas  | 24     |
// | Jonas  | 26     |
// | Justė  | 25     |
// +--------+--------+

console.log('+--------+--------+\n| Vardas | Amžius |\n+--------+--------+\n| Tomas  | 24     |\n| Jonas  | 26     |\n| Justė  | 25     |\n+---------+-------+')

// Susikurkite norimą HTML žymą ir pakeiskite jos turinį JavaScript pagalba

document.getElementById('Pagrindinis').innerHTML = 'SVEIKI ATVYKE!'

document.querySelector('.tekstukas').innerHTML = 'tekstas tekstas ir vien tik tekstas sitoje vietoje atsiranda, skaitytojams'

document.querySelector('.mygtukas').innerHTML = 'Spausk OK arba mirsi!'
document.querySelector('.mygtukas').innerHTML += ' Juokauju.'
