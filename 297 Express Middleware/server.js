const express = require('express');

const app = express();
app.use((req, res, next) => {
    console.log('<h1>Helloooo</h1>');
    next();
});

app.get('/', (req, res) => {
    res.send('testest');
});

app.listen(3000);