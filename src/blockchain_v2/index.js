const Blockchain = require("./blockchain");

let blockchain, blockchain2;

blockchain = new Blockchain();
blockchain2 = new Blockchain();

console.log("1.0", blockchain);
console.log("2.0", blockchain2);

blockchain2.addBlock("foo");

console.log("2.1", blockchain2);

let is2dot1Valid = blockchain.isValidChain(blockchain2.chain);

console.log("bc2.1 valid:", is2dot1Valid);
