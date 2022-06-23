const {Schema, model} = require('mongoose')

const Password = new Schema({
    password: String
})

module.exports = model('passwords', Password)
