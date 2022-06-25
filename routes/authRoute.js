const authRouter = require('express').Router()

const authController =  require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware');

authRouter.post('/login', authController.logination)
authRouter.post('/create', authMiddleware, authController.createCurrency)
authRouter.delete('/delete/:currencyId', authMiddleware, authController.deleteCurrency)
authRouter.put('/:currencyId', authMiddleware, authController.updateCurrency)

module.exports = authRouter
