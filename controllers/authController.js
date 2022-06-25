const Password = require('../dataBase/Password')
const Currency = require('../dataBase/Currency')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

const secret = process.env.NODE_APP_SECRET;

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, secret, {expiresIn: '12h'})
}

async function logination(req, res) {
    try {
        const {password} = req.body;
        const hashedPassword = await Password.findOne();
        const validPassword = bcrypt.compareSync(password, hashedPassword.password)
        if (!validPassword)
            return res.status(400).json("Incorrect password");
        const token = generateAccessToken(hashedPassword._id);
        res.json({token})
    } catch (e) {
        return res.status(400).json("Error in logination process");
    }
}

async function createCurrency(req, res) {
    try {
        const {currencyFullName, currencyShortName, currencyRateByUSD} = req.body
        const currency = await Currency.create({
            fullname: currencyFullName,
            shortname: currencyShortName,
            rateByUSD: currencyRateByUSD
        })
        if (!currency)
            return res.status(400).json("Cannot create currency with such data")
        return res.status(201).json("Currency created")
    } catch (e) {
        console.log(e);
        return res.status(400).json("Error occurred while creating currency")
    }
}

async function deleteCurrency(req, res) {
    try {
        const {currencyId} = req.params;
        const currency = await Currency.deleteOne({_id: currencyId})
        if (!currency)
            res.status(400).json("Incorrect currency data")
        return res.status(200).json("Currency deleted")
    } catch (e) {
        console.log(e);
        return res.status(400).json("Error occurred while deleting currency")
    }
}

async function updateCurrency(req, res) {
    try {
        const currencyToUpdate = req.body;
        const {currencyId} = req.params;
        const currency = await Currency.findOneAndUpdate({_id: currencyId}, currencyToUpdate);
        if (!currency)
            res.status(400).json("Incorrect currency data");
        return res.status(200).json("Currency updated");
    } catch (e) {
        console.log(e);
        return res.status(400).json("Error occurred while updating currency");
    }
}


module.exports = {logination, createCurrency, deleteCurrency, updateCurrency}
