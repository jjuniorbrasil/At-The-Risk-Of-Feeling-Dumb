// MongoDB

require('dotenv').config();
const { MongoClient } = require('mongodb');
const uri = process.env.CONNECTION_STRING;
const client = new MongoClient(uri);
const db = client.db('atrofd_db');

async function connect() {
  await client.connect();
}

connect();

module.exports = db;
