const express = require('express')
const app = express()
const port = 3000

let trasos = [
    { id: 1, salis: `Lietuva`, miestas: `Vilnius`, ilgisKm: 100, sudetingumas: 3},
    { id: 2, salis: `Kroatija`, miestas: `Split`, ilgisKm: 20, sudetingumas: 1},
    { id: 3, salis: `Latvija`, miestas: `Ryga`, ilgisKm: 56, sudetingumas: 5},
]

//////////////////////////////////////
//GET /tracks
app.get(`/tracks`, (req, res) => {
    res.json(trasos)
})

//////////////////////////////////////
//GET /tracks/:id
app.get(`/tracks/:id`, (req, res) => {
    let id = parseInt(req.params.id)

    let trasa = trasos.find(x => x.id == id)

    res.json(trasa)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})