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
//adresas su betkokiu skaiciumi ivestu gali buti:
app.get(`/patikrinimai/:skaicius`, (req, res) => {
    
    let gautasSk = parseInt(req.params.skaicius)
    res.send({
        skaicius: gautasSk,
        arLyginis: gautasSk % 2 === 0})
})


//localhost:3000/isvedimas/vardas/profesija
//irasytas vardas ir profesija, ir issives ko norim
app.get(`/isvedimas/:vardas/:profesija`, (req, res) => {
    res.send(`Labas, as esu ${req.params.vardas}, mano profesija ${req.params.profesija}`)
})

//localhost:3000/gyveni/salis
app.get(`/gyveni/:salis`, (req, res) => {
    res.send(`Gyvenu ${req.params.salis}, ji susideda is ${req.params.salis.length} raidziu.`)
})

//localhost:3000/paslaugos
app.get(`/paslaugos`, (req, res) => {
    res.json([
        {id: 1, pavadinimas: `Lego figureliu surinkejas`},
        {id: 2, pavadinimas: `Kosmoso stoties valytojas`},
        {id: 3, pavadinimas: `Arbatos skonio tikrintojas`}
    ])
})

app.listen(port, () => {
  console.log(`Izanga projektas klausosi port ${port}`)
})