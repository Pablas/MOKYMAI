const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
const port = 9858

dotenv.config()

app.use(cors({ origin: process.env.FRONTEND}))
app.use(express.json())

// const db = require('./database')

// GET http://localhost:9858/
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/auth', require('./routes/auth').router)
app.use('/ads', require('./routes/ads').router)

app.listen(port, () => {
    console.log(`Adverts app listening on port ${port}`)
})
