const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 45
    },
    password: {
        type: String,
       required: true,
       min: 6,
       max: 255 
    },
    modified_date: {
        type: Date,
        default: null
    }
}, {
    versionKey: false
})

module.exports = mongoose.model('User', userSchema, 'user')