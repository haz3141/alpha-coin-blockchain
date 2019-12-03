// Import Dependencies
const ws = require('ws');

// Require Dot ENV
require('dotenv').config();

// Set P2P Port
const P2P_PORT = process.env.P2P_PORT || 5001;

// Set list of Peers
const peers = process.env.PEERS ? process.env.PPERS.split(',') : [];

