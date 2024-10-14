// REQUIRE

require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const logger = require('morgan'); // https://www.npmjs.com/package/morgan

// Express APP

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ENDPOINTS | ROUTES

app.use('/api', routes.home);
app.use('/api/receivers/', routes.receivers);
app.use('/api/messages/', routes.messages);

module.exports = app;
