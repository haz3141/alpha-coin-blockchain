const SHA256 = require('crypto-js/sha256');

class Block {
	constructor(index, timestamp, data, previousHash = '') {
		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
	}

	calculateHash() {
		return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
	}
}

class Blockchain {
	constructor() {
		this.chain = [this.createGenesisBlock()];
	}

	createGenesisBlock() {
		return new Block(0, '03/14/1989', 'Genesis Block', '3141');
	}

	getLatestBlock() {
		return this.chain[this.chain.length - 1];
	}

	addBlock(newBlock) {
		newBlock.previousHash = this.getLatestBlock().hash;
		newBlock.hash = newBlock.calculateHash();
		this.chain.push(newBlock);
	}
}

// TEST BLOCKCHAIN 
let alphaCoin = new Blockchain();
alphaCoin.addBlock(new Block(1, '09/11/2001', { amount: 6 }));
alphaCoin.addBlock(new Block(1, '12/21/2012', { amount: 66 }));

console.log(JSON.stringify(alphaCoin, null, 4));