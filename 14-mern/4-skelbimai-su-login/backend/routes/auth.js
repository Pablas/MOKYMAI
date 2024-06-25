const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = express.Router()
const db = require('../database')

// POST http://localhost:9858/auth/register
router.post('/register', async (req, res) => {
    // return res.status(501).send('Register not implemented')

    // console.log(req.body)

    // const username = req.body.username
    // const password = req.body.password
    const { username, password } = req.body
    // console.log(username, password)

    if (!username || !password) {
        return res.status(400).send({ message: 'Vartotojo vardas ir slaptažodis yra būtini' })
    }

    // return res.send('registracija')

    try {
        // 1 - tikrinam ar toks vartotojas jau yra
        const usersInDb = await db.User.find({ username: username })
        // jeigu masyvo ilgis yra daugiau nei 1 - tai vartotojas jau yra
        if (usersInDb.length > 0) {
            return res.status(400).send({ message: 'Toks vartotojas jau egzistuoja' })
        }
        // return res.send('iki čia viskas gerai')

        // 2 - užhešuoti gautą slaptažodį
        const hashedPassword = await bcrypt.hash(password, 8)
        // return res.send({ originalPassword: password, hashedPassword: hashedPassword })

        // 3 - įrašyti vartotoją į duomenų bazę
        const newUser = new db.User({
            username: username,
            password: hashedPassword
        })
        await newUser.save()
        // return res.send(newUser)

        // 4 - jeigu norim iškart prijungti - generuojam token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        })
        // return res.send({ token: token })

        // 5 - išsiųsti atsakymą
        return res.status(201).send({
            message: 'Vartotojas užregistruotas',
            token: token,
            // naujaData(dabartinisLaikas + kiekTokenasTrunka)
            expiresIn: new Date(Date.now() + parseInt(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000),
            user: {
                id: newUser._id,
                username: newUser.username
            }
        })

    } catch (error) {
        return res.status(500).send({ message: 'Nepavyko užregistruoti vartotojo' })
    }
})

// POST http://localhost:9858/auth/login
router.post('/login', async (req, res) => {
    // return res.status(501).send('Login not implemented')

    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).send({ message: 'Vartotojo vardas ir slaptažodis yra būtini' })
    }

    try {
        // 1 - susirandam vartotoją duomenų bazėje
        const user = await db.User.findOne({ username: username })

        // 2 - tikrinam ar radom vartotoją ir jei radom ar jo slaptažodis yra geras
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).send({ message: 'Neteisingas vartotojo vardas arba slaptažodis' })
        }

        // 3 - jeigu viskas gerai - generuojam tokeną ir siunčiam atsakymą
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        })

        return res.status(200).send({
            message: 'Vartotojas prijungtas',
            token: token,
            // naujaData(dabartinisLaikas + kiekTokenasTrunka)
            expiresIn: new Date(Date.now() + parseInt(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000),
            user: {
                id: user._id,
                username: user.username
            }
        })

    } catch (error) {
        return res.status(500).send({ message: 'Nepavyko prisijungti' })
    }
})

const isLoggedIn = async (req, res, next) => {
    // console.log(`isLoggedIn isvedimas`)

    if (!req.headers.authorization){
        return res.status(401).send({ message: `Informacija pasiekiama tik prisijungus`})
    }

    const token = req.headers.authorization.split(' ')[1]
    console.log('token', token)
    
    if (!token){
        return res.status(401).send({message: 'Informacija pasiekiama tik prisijungus'})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await db.User.findById(decoded.id)

        req.user = user
    } catch (error) {
        return res.status(401).send({message: 'Informacija pasiekiama tik prisijungus'})
    }

    next() // tesiam darba su route
}

module.exports = {
    router,
    isLoggedIn,
}
