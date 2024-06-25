const mongoose = require('mongoose')

if (!process.env.MONGO) {
    throw new Error('MONGO environment variable is not set')
}

mongoose.connect(process.env.MONGO)

const db = mongoose.connection

db.on('error', () => console.log('Failed to connect to MongoDB'))
db.once('open', () => console.log('Connected to MongoDB'))

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true }
})

const User = mongoose.model('User', userSchema)

module.exports = {
    db,
    User
}
