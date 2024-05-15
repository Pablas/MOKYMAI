let failas = 'duomenys.jpg'

//json, csv

if (failas.endsWith('json')){
    console.log('json failas')
} else if (failas.endsWith('csv')){
    console.log('csv failas')
} else {
    console.log('netinka formatas')
}