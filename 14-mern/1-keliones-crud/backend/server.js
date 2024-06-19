const express = require('express')
const app = express()
const port = 8675

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// port || 3000
// imam port, o jei neveikia tada 3000
app.listen(port, () => {
  console.log(`Travels backend listening on port ${port}`)
})