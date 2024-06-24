const express = require('express')
const app = express()
const port = 9858

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Adverts app listening on port ${port}`)
})