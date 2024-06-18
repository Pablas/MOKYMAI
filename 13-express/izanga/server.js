const { log } = require('console')
const express = require('express')
const app = express()
const port = 3000

//endpoint arba route
//localhost:3000
app.get('/', (req, res) => {
  res.send('Labukas!')
})

//localhost:3000/apie
app.get(`/apie`, (req, res) => {
    res.send( {pavadinimas: `Apie mus`, aprasymas: `Mes esame labai gera komanda`} )
})

//localhost:3000/projektai
app.get(`/projektai`, (req, res) => {
        let projektuListas = [
            {id: 1, pavadinimas: `Ratu montavimo appsas`},
            {id: 2, pavadinimas: `Sirena`}
        ]
        res.json(projektuListas)
})

//localhost:3000/skaiciuoti
app.get(`/skaiciuoti`, (req, res) => {
    let skaiciusNr1 = Math.ceil(Math.random() * 100);
    let skaiciusNr2 = Math.ceil(Math.random() * 100);
    let suma = skaiciusNr1 + skaiciusNr2;
    res.json({skaiciusNr1, skaiciusNr2, suma})
})

//localhost:3000/patikrinimai/5
//localhost:3000/patikrinimai/10
//localhost:3000/patikrinimai/235
//adresas su betkokiu skaiciumi ivestu gali buti:
app.get(`/patikrinimai/:skaicius`, (req, res) => {
    
    let gautasSk = parseInt(req.params.skaicius)
    res.send({
        skaicius: gautasSk,
        arLyginis: gautasSk % 2 === 0})
})

app.listen(port, () => {
  console.log(`Izanga projektas klausosi port ${port}`)
})