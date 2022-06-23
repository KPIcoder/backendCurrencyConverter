const {Schema, model} = require('mongoose');

const currencySchema = new Schema({
    fullname: String,
    shortname: String,
    rateByUSD: Number
})

module.exports = model('Currency', currencySchema)
