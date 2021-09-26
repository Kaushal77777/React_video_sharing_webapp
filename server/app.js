const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/videoStreamer', {
    //useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology : true
});
mongoose.Promise = global.Promise;


app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

//Routes
app.use('/api/signUp', require('./router/signUp.js'));

module.exports = app;