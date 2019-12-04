const express = require('express');
const Blockchain = require('../blockchain');
const bodyParser = require('body-parser');
const cors = require('cors');

// Require P2P Server Class
const P2pServer = require('./p2p-server');

// Require Dot Env
require('dotenv').config();

// Get PORT from user or set default
const HTTP_PORT = process.env.HTTP_PORT || 8080;

// Instantiate Express app
const app = express();

// Setup middleware
app.use(bodyParser.json());
app.use(cors());

// Instantiate Blockchain instance
const blockchain = new Blockchain();

// Instantiate P2P Server
const p2pserver = new P2pServer(blockchain);

// API GET blocks Route
app.get('/blocks', (req, res) => {
  res.json(blockchain.chain);
});

// API POST blocks Route
app.post('/mine', (req, res) => {
  const data = req.body.data;
  console.log(data);
  const block = blockchain.addBlock(req.body.data);
  console.log(`New block added: ${block.toString()}`);

  res.redirect('/blocks');
});

// Start Listening
app.listen(HTTP_PORT, () => {
  console.log(`⛓Listening on PORT: ${HTTP_PORT}⛓`);
});

// Start Listening for Peers
p2pserver.listen();
