const express = require('express')

const router = express.Router()
const db = require('../database')

// GET http://localhost:9858/ads/all
router.get('/all', async (req, res) => {
    // return res.status(501).send('Get all ads not implemented')
    const ads = await db.Ad.find()
    return res.json(ads)
})

// GET http://localhost:9858/ads/all-current-user
router.get('/all-current-user', (req, res) => {
    return res.status(501).send('Get all ads from current user not implemented')
})

// GET http://localhost:9858/ads/get/1
router.get('/get/:id', (req, res) => {
    return res.status(501).send('Get ad by id not implemented')
})

// POST http://localhost:9858/ads/create
router.post('/create', (req, res) => {
    return res.status(501).send('Create ad not implemented')
})

module.exports = {
    router
}
