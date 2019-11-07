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
      Last Hash : ${this.lastHash.substring(0,10)}
      Hash      : ${this.hash.substring(0,10)}
      Data      : ${this.data}
    `;
  }

  static genesis(){
    return new this('Genesis time','----','genesis-hash',[]);
  }
}

