const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const update = require('./bin/flowUpdate')
const userRoutes = require('./routes/userRoutes')

const app = express();

app.use(logger('dev'));

// I wonder if this is breaking the twilio stuff since its trying to get everything to be in 
// json instead of xml text 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

userRoutes(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
  }));


module.exports = app;