const mongoose = require('mongoose');
const Currency = require('./Currency');
const {currencyService} = require("../services");
const Password = require('../dataBase/Password')
const bcrypt = require('bcrypt');

mongoose.connect("mongodb://localhost:27017/currencies", () => {
    console.log('DB connected')
});

// PASSWORD = 'admin'











