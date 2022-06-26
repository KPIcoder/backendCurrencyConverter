const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/currencies", () => {
    console.log('DB connected')
});

// PASSWORD = 'admin'











