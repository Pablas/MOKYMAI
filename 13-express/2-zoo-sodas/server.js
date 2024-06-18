const express = require('express')
const app = express()
const port = 9688

app.use(express.json())

// Dirbant su masyvu / viena esybe, dazniausiai buna tokie endpoints:
// 1. GET /entities - grazina visus elementus
// 2. GET /entities/:id - viena elementa grazinam
// 3. POST /entities - sukuria nauja elementa
// 4. PUT arba PATCH /entities/:id - atnaujina elementa
// 5. DELETE /entities/:id - istrina elementa

let gyvunuDuomenys = [
    { id: 1, vardas: `Lapete`, rusis: `Lape`, amzius: 3},
    { id: 2, vardas: `Rikis`, rusis: `Bizonas`, amzius: 5},
    { id: 3, vardas: `Babe`, rusis: `Orangutangas`, amzius: 2},
]

// 1. GET /entities - grazina visus elementus
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 1. GET /entities - grazina visus elementus
app.get(`/gyvunai`, (req, res) => {
    res.json(gyvunuDuomenys)
})

// 2. GET /entities/:id - viena elementa grazinam
app.get(`/gyvunai/:id`, (req, res) => {
    let id = parseInt(req.params.id)

    if(isNaN(id)){ //jeigu id nera skaicius mes sita klaida:
        return res.status(400).send(`id turi buti skaicius`)
    }

    let gyvunas = gyvunuDuomenys.find(gyv => gyv.id === id)

    if(!gyvunas){ //jeigu skaicius per didelis tai neras tokio ir ismes tokia klaida:
        return res.status(400).send(`Gyvunas nerastas`)
    }

    res.send(gyvunas)
})

// 3. POST /entities - sukuria nauja elementa
app.post(`/gyvunai`, (req, res) => {
    let naujasGyvunas = req.body
    naujasGyvunas.id = Date.now()

    if (!naujasGyvunas.vardas || !naujasGyvunas.rusis || !naujasGyvunas.amzius){
        return res.status(400).send(`Visi laukai turi buti uzpildyti`)
    }

    gyvunuDuomenys.push(naujasGyvunas)
    res.status(201).send(naujasGyvunas)
})

// 4. PUT arba PATCH /entities/:id - atnaujina elementa




// 5. DELETE /entities/:id - istrina elementa
app.delete(`/gyvunai/:id`, (req, res) => {
    let id = parseInt(req.params.id)

    if (isNaN(id)){//isNaN - isNotaNumber
        return res.status(400).send(`id turi buti skaicius`)
    }

    gyvunuDuomenys = gyvunuDuomenys.filter(gyv => gyv.id !== id) //isfiltruojam ka palikti
    res.send(`Gyvunas istrintas`)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})