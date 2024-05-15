let marke = 'Toyota';
let modelis = 'Corolla';

// marke turi fragmenta
// arba
// modelis turi fragmenta

let fragmentas = 'yot';

if (marke.includes(fragmentas) || modelis.includes(fragmentas)){
    console.log('Automobilis atitinka')
} else {
    console.log('Automobilis neatitinka')
}

fragmentas = 'Toyota Cor'

if ((marke + ' ' + modelis).includes(fragmentas)){
    console.log('Automobilis atitinka')
} else {
    console.log('Automobilis neatitinka')
}