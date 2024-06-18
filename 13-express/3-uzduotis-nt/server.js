const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let ntMasyvas = [
    {id: 1, adresas: `Donelaicio g. 1`, tipas: `namas`, kvadratura: 78, privalumai: [`atskiras iejimas`, `sildomos grindys`], kaina: 144000},
    {id: 2, adresas: `Savanoriu pr. 20`, tipas: `butas`, kvadratura: 55, privalumai: [`pilnai irengtas`], kaina: 120000},
    {id: 3, adresas: `Sviliskiu g. 12`, tipas: `butas`, kvadratura: 59, privalumai: [`vonia, tualetas atskirai`, `sildomos grindys`], kaina: 160000},
]


/////////////////////////////////////////////////
//GET /places
app.get(`/places`, (req, res) => {

    res.json(ntMasyvas)
})

/////////////////////////////////////////////////
//GET /places/:id
app.get(`/places/:id`, (req, res) => {

    let id = parseInt(req.params.id)

    let place = ntMasyvas.find(x => x.id == id)

    res.json(place)
})

/////////////////////////////////////////////////
//POST /places
app.post(`/places`, (req, res) => {

    let naujas = req.body

    naujas.id = Date.now()

    ntMasyvas.push(naujas)
    res.send(naujas)
})

/////////////////////////////////////////////////
//PUT arba PATCH /places/:id
app.patch(`/places/:id`, (req, res) => {

    let id = parseInt(req.params.id)

    let ntIrasas = ntMasyvas.find(nt => nt.id === id)

    ntIrasas.adresas = req.body.adresas
    ntIrasas.tipas = req.body.tipas
    ntIrasas.kvadratura = req.body.kvadratura
    ntIrasas.privalumai = req.body.privalumai
    ntIrasas.kaina = req.body.kaina

    res.send(ntIrasas)
})

/////////////////////////////////////////////////
//DELETE /places/:id

app.delete(`/places/:id`, (req, res) => {

    let id = parseInt(req.params.id)

    ntMasyvas = ntMasyvas.filter(nt => nt.id !== id) //naujai masyvas perkuriamas be delete objekto (id)

    res.send(`Pasalinta`)
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})