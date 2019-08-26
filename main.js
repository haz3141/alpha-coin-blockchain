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
		this.chain = [ this.createGenesisBlock() ];
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

	isChainValid() {
		for (let i = 1; i < this.chain.length; i++) {
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i - 1];

			if (currentBlock.hash !== currentBlock.calculateHash()) {
				return false;
			}

			if (currentBlock.previousHash !== previousBlock.hash) {
				return false;
			}

			return true;
		}
	}
}

// INITIALIZE FIRST THREE BLOCKS
let alphaCoin = new Blockchain();
alphaCoin.addBlock(new Block(1, '09/11/2001', { amount: 6 }));
alphaCoin.addBlock(new Block(1, '12/21/2012', { amount: 66 }));

// DISPLAY BLOCKCHAIN
console.log(JSON.stringify(alphaCoin, null, 4));

// TAMPER WITH A BLOCK
alphaCoin.chain[1].data = { amount: 777 };
alphaCoin.chain[1].hash = alphaCoin[1].calculateHash();

// TEST CHAIN VALIDITY
console.log('Is blockchain valid? ' + alphaCoin.isChainValid());
