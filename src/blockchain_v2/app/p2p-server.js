// Import Dependencies
const WebSocket = require('ws');

// Require Dot ENV
require('dotenv').config();

// Set P2P Port
const P2P_PORT = process.env.P2P_PORT || 5001;

// Set list of Peers
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];

// P2P Server
class P2pServer {
    constructor(blockchain) {
        this.blockchain = blockchain;
        this.sockets = [];
    }

    // Instantiate new P2P server and connections
    listen() {
        const server = new WebSocket.Server({ port: P2P_PORT });

        // COME BACK
        server.on('connection', socket => this.connectSocket(socket));

        this.connectToPeers();

        console.log(`Listening for peer to peer connection on port : ${P2P_PORT}`)
    }

    connectSocket(socket) {
        // Add socket to sockets array
        this.sockets.push(socket);
        console.log('Socket Connected!');

        // Register Message Hangler to socket
        this.handleMessage(socket);

        // Send blockchain to peer
        socket.send(JSON.stringify(this.blockchain));
    }

    connectToPeers() {
        // Connect to each peer
        peers.forEach(peer => {
            // Create socket for each peer
            const socket = new WebSocket(peer);

            socket.on('open', () => this.connectSocket(socket));
        });
    }

    handleMessage(socket) {
        socket.on('message', message => {
            const data = JSON.parse(message);
            console.log('data', data);
            this.blockchain.replaceChain(data);
        });
    }

    sendChain(socket) {
        socket.send(JSON.stringify(this.blockchain.chain));
    }

    syncChain() {
        this.sockets.forEach(socket => {
            this.sendChain(socket);
        });
    }
}

module.exports = P2pServer;