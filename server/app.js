const express = require('express');
const app = express();

app.use('/api/signUp', require('./router/signUp.js'));

module.exports = app;