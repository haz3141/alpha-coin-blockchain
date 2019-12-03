// Import Dependencies
const WebSocket = require('ws');

// Require Dot ENV
require('dotenv').config();

// Set P2P Port
const P2P_PORT = process.env.P2P_PORT || 5001;

// Set list of Peers
const peers = process.env.PEERS ? process.env.PPERS.split(',') : [];

// P2P Server
class P2Pserver {
    constructor(blockchain) {
        this.blockchain = blockchain;
        this.sockets = [];
    }

    // Instantiate new P2P server and connections
    listen() {
        const server = new WebSocket.Server({ port: P2P_PORT });

        server.on('connect', socket => this.connectSocket(socket));

        this.connectToPeers();

        console.log(`Listening for peer to peer connection on port : ${P2P_PORT}`)
    }

    connectSocket(socket) {

    }

    connectToPeers() {

    }
}