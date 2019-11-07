// Import Cryptography Libraries
import { SHA256 } from "crypto-js";

class Block {
  constructor(timestamp, previousHash, hash, data) {
    this.timestamp = timestamp;
    this.previousHash = previousHash;
    this.hash = hash;
    this.data = data;
  }

  toString(){
    return `
      Block - 
      Timestamp : ${this.timestamp}
      Last Hash : ${this.previousHash.substring(0,10)}
      Hash      : ${this.hash.substring(0,10)}
      Data      : ${this.data}
    `;
  }

  static genesis(){
    return new this('Genesis time','----','genesis-hash',[]);
  }

  static hash(timestamp, previousHash, data) {
    return SHA256(`${timestamp}${previousHash}${data}`).toString();
  }

  static mineBlock(previousBlock, data) {
    let hash;
    let timestamp;
    const previousHash = previousBlock.hash();
    return new this(timestamp, previousHash, hash, data);
  }
}

export { Block };