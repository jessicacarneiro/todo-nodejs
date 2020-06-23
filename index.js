const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb://localhost:27017/todoapi', 
    { useNewUrlParser: true,
        useUnifiedTopology: true  });

require('./src/models/Task');

app.get('/', (req, res) => {
    res.send('Hello, world!')
});

app.listen(3001);