const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('nodemon');

require('./dataBase/main')
const currencyRouter = require("./routes/currencyRoute");
const authRouter = require('./routes/authRoute')

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(express.json())
app.use('/currencies', currencyRouter)
app.use('/auth', authRouter)


app.use('*', (req, res) => {
    res.status(404).json('Route not found');
});

app.listen(process.env.PORT || 3001, () => {
    console.log('server started on port 3001');
})
