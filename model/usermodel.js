const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:  true
    },
    email: {
        type: String,
        requird: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean, 
        required: true, 
            default: false
    }
})

module.exports = mongoose.model('usersdb', userSchema)