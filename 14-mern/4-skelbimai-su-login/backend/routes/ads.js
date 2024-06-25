const express = require('express')

const router = express.Router()
const db = require('../database')

// const authController = require('./auth')
// naudojimas: authController.isLoggedIn

const isLoggedInCheck = require('./auth').isLoggedIn

// GET http://localhost:9858/ads/all
router.get('/all', async (req, res) => {
    // return res.status(501).send('Get all ads not implemented')
    try {
        const ads = await db.Ad.find()
        return res.json(ads)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

// GET http://localhost:9858/ads/all-current-user
router.get('/all-current-user', isLoggedInCheck, async (req, res) => {
    // return res.status(501).send('Get all ads from current user not implemented')

    // console.log('current user ads isvedimas')
    // return res.send('ads from current user')

    // console.log('kreipesi:', req.user)
    // return res.send('ok')

    try {
        const ads = await db.Ad.find({ user: req.user._id })
        return res.send(ads)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

// GET http://localhost:9858/ads/get/1
router.get('/get/:id', async (req, res) => {
    // return res.status(501).send('Get ad by id not implemented')
    try {
        const ad = await db.Ad.findById(req.params.id)
        return res.send(ad)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

// POST http://localhost:9858/ads/create
router.post('/create', isLoggedInCheck, async (req, res) => {
    // return res.status(501).send('Create ad not implemented')

    const { title, price, category } = req.body

    let errors = []

    if (!title || typeof title !== 'string') {
        errors.push({ type: 'title', message: 'Pavadinimas yra būtinas' })
    }

    if (title.length < 3) {
        errors.push({ type: 'title', message: 'Pavadinimas turi būti ilgesnis nei 3 simboliai' })
    }

    if (!price || typeof price !== 'number') {
        errors.push({ type: 'price', message: 'Kaina yra būtina' })
    }

    if (!category || typeof category !== 'string') {
        errors.push({ type: 'category', message: 'Kategorija yra būtina' })
    }

    if (errors.length > 0) {
        return res.status(400).send(errors)
    }

    // return res.send('ok')

    try {
        const newAd = new db.Ad({
            title,
            price,
            category,
            user: req.user._id
        })
        await newAd.save()
        return res.status(201).send(newAd)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

module.exports = {
    router
}