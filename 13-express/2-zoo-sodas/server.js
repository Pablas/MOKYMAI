const express = require('express')
const app = express()
const port = 9688

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

app.get(`/gyvunai`, (req, res) => {
    res.json(gyvunuDuomenys)
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})