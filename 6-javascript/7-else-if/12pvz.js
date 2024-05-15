let failas = 'folderis/failiukas.json'

if (failas.endsWith('.txt')){
    console.log('nuskaitau kaip tekstini faila')
} else if (failas.endsWith('.csv')){
    console.log('nuskaitau kaip csv failas')
} else if (failas.endsWith('.json')){
    console.log('failas baigiasi su json')
}