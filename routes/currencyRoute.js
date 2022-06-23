const currencyRouter = require('express').Router()

const currencyController = require('../controllers/currencyController')

currencyRouter.get('/', currencyController.getCurrencies)
currencyRouter.post('/timeseries', currencyController.getCurrencyTimeSeriesData)

module.exports = currencyRouter
