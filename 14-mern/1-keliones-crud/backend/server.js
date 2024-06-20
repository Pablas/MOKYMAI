const express = require('express')
const mongoose = require('mongoose')
const cors = require(`cors`) //cors biblioteka, kam leisti jungtis i backend
require ('dotenv').config() // kad naudotu dotenv biblioteka, ja irasius (npm install dotenv)

const app = express()
const port = 8675

app.use(express.json()) //kad serveris priimtu info kaip JSON!! Rasyti pries visus routes:




app.use(cors({ origin: process.env.FRONTEND_URL })) //leidzia kreiptis visiems i backend kas cia irasyta, svetaine kur patalpinta, adresas ('*' - leistu visiems)

//////////////////////////////////////////////
//localhost ir 127.0.0.1 yra vienas ir tas pats,
//mongoose reikalauja 127... neveikia localhost.
//"travel_destinations" - mongoDB kuri duomenu baze naudojama:
mongoose.connect( process.env.MONGO_URL )

//patikrinti ar veikia connection:
//terminale rodys situs isejimus consolej, kaip sekesi prisijungti:
mongoose.connection.on(`error`, console.error.bind(console, `cannot connect to MongoDB`))
mongoose.connection.once(`open`, () => console.log(`Connected successfully to MongoDB`))
//////////////////////////////////////////////

//schema is ko musu duomenys susidarys:
//id keliauja kartu, tai nebutina rasyti.
const travelSchema = new mongoose.Schema({
    title: { type:String, required: true}, //bus privalomas tipas String ir privalo egzistuoti
    description: String,
    year: Number,
    nights: Number,
    price: Number
})

// kodas toliau nurodo, kad yra kolekcija "travels"(reikia parasyti didziaja geriau, kaip apacioj ir 'Travel' jis ieskos kaip Travels - su S, kaip vienaskaita rasyti reikia) ir ten visi dokumentai remiasi sia schema ^:
const Travel = mongoose.model('Travel', travelSchema)
//su Travel ir darysim uzklausas, tai bus kolekcija
// (express - mongoose uzklausos)
//////////////////////////////////////////////


//async ir await KARTU NAUDOJASI! await - IŠLAUKIAM KOL ATEIS DUOMENYS, kad iskart neduotu ko nera! Uztruks laiko uzklausa, ir palaukti reikia kol suras duomenis, ir tik ateis prisiskirs prie travelsData kintamojo.
app.get(`/travels`, async (req, res) => { 
    const travelsData = await Travel.find()
    return res.send(travelsData)
})



/// NAUJA INFO KURIA PRIDESIME:
//req.body tai ta informacija kuria gaunam!!!!!
app.post(`/travels`, async (req, res) => {
  
  //gaunami duomenys, issaugomi ir idedami:
  const newTravelData = new Travel(req.body)
  const insertedData = await newTravelData.save()
  return res.status(201).send(insertedData) //jei gaunam sita status, tada ir issiunciam ta info.
})




app.get('/', (req, res) => {
  res.send('Hello World!')
})


// port || 3000
// imam port, o jei neveikia tada 3000
app.listen(port, () => {
  console.log(`Travels backend listening on port ${port}`)
})