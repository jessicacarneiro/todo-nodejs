const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect(
    'mongodb://localhost:27017/todoapi', 
    { useNewUrlParser: true,
        useUnifiedTopology: true  });

requireDir('./src/models');

app.get('/', (req, res) => {
    res.send('Hello, world!')
});

app.listen(3001);