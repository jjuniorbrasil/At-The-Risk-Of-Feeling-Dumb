// REQUIRE

require('dotenv').config();
const express = require('express');

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

// HOME

const homeController = require('./controllers/home');
app.get('/api/', homeController.index);
app.post('/api/', homeController.store);

// MESSAGES

const messagesController = require('./controllers/messages.js');
app.get('/api/messages/', messagesController.index); // get all messages - debug purposes
app.get('/api/messages/:messageId', messagesController.getById);
app.put('/api/messages/:messageId', messagesController.confirmSend);
app.put('/api/messages/:messageId/:action', messagesController.acceptOrDecline);

// RECEIVERS

const receiversController = require('./controllers/receivers.js');
app.get('/api/receivers/', receiversController.index);
app.get('/api/receivers/:email?', receiversController.getById);

// SENDERS

const sendersController = require('./controllers/senders.js');
app.get('/api/senders/', sendersController.index);
app.get('/api/senders/:email?', sendersController.getById);

module.exports = app;
