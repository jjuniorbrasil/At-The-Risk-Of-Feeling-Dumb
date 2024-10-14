/* eslint-disable no-undef */
const express = require('express');
const app = express();
require('./loadEnviroment.js');

app.get('/api', (req, res) => {
  console.log('Bateu aqui.');
  console.log(process.env.CLIENT_ID);
  res.status(200).send({ message: 'Hello World!' });
});

module.exports = app;
