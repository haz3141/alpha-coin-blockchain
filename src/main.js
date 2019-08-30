const {Blockchain, Transaction} = require('./blockchain');

// INITIALIZE BlOCKCHAIN
let alphaCoin = new Blockchain();
console.log('\n------------------------------------------');
console.log('Genesis', alphaCoin.getLatestBlock());
console.log('------------------------------------------\n');

// ADD NEW TX
alphaCoin.createTransaction(new Transaction('address1', 'address2', 100));
alphaCoin.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\nStarting the miner...');
alphaCoin.minePendingTransactions('address3');

console.log('\nBalance of address3:', alphaCoin.getBalanceOfAddress('address3'));

console.log('\nStarting the miner again...');
alphaCoin.minePendingTransactions('address3');

console.log('\nBalance of address3:', alphaCoin.getBalanceOfAddress('address3'));

// DEPRECIATED CODE & EXAMPLES

// console.log('Mining block 1...');
// alphaCoin.addBlock(new Block(1, '09/11/2001', { amount: 7 }));

// console.log('Mining block 2...');
// alphaCoin.addBlock(new Block(1, '12/21/2012', { amount: 77 }));

// DISPLAY BLOCKCHAIN
// console.table(JSON.stringify(alphaCoin, null, 4));

// TAMPER WITH A BLOCK
// alphaCoin.chain[1].data = { amount: 777 };
// alphaCoin.chain[1].hash = alphaCoin[1].calculateHash();

// TEST CHAIN VALIDITY
// console.log('Is blockchain valid? ' + alphaCoin.isChainValid());

// OLD METHOD FOR ADDING BLOCKS BEFORE TX
// addBlock(newBlock) {
// 	newBlock.previousHash = this.getLatestBlock().hash;
// 	newBlock.mineBlock(this.difficulty);
// 	this.chain.push(newBlock);
// }
