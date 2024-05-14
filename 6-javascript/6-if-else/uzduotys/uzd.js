//1. Susikurkite skaičiaus kintamąjį. Patikrinkite ar jis yra lyginis, jei taip išveskite vieną informaciją, jei ne - kitą.

let skaicius = 29;

if (skaicius % 2 == 0){
    console.log('1. Skaičius lyginis')
} else {
    console.log('1. Skaičius nelyginis')
}

//2. Susikurkite skaičiaus kintamąjį. Patikrinkite ar šis skaičius dalinasi iš 7, jei taip išveskite vieną tekstą, jei ne - kitą.

let skaicius2 = 77;

if (skaicius2 % 7 == 0) {
    console.log('2. Skaičius dalinasi iš 7')
} else {
    console.log('2. Skaičius nesidalina iš 7')
}

//3. Susikurkite kintamąjį, kuriame nurodytumėte kelią iki norimo failo. Patikrinkite ar šis failas yra .js tipo, jei taip išveskite vieną tekstą, jei ne - kitą.

let url = 'C://mokymai/failai/pamoka.js'

if (url.endsWith(`.js`)) {
    console.log(`Failas rastas: ${url}`)
} else {
    console.log(`Failas nerastas.`)
}