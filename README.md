# alpha-coin-blockchain
A Bitcoin-like blockchain built using JavaScript. This blockchain features secp256k1 elliptical curve public/private wallet key pair generation, SHA-256 transaction signing, SHA-256 block signing, proof-of-work, as well as transaction and chain validation.

## Problem & Solution

The goal here is to create a barebones blockchain that clearly demonstrates the key components and layout of a blockchain. This blockchain has three main components: transactions which live inside of blocks which live inside of the blockchain. Tampering of the chain is handled using transaction and block hashing with a SHA-256 algorithm. Spamming the chain is handled by the proof-of-work method which includes a mining reward and an adjustable difficulty.

## Preview

![Preview](https://raw.githubusercontent.com/haz3141/alpha-coin-blockchain/master/images/screenshot-keygen.PNG)

![Preview](https://raw.githubusercontent.com/haz3141/alpha-coin-blockchain/master/images/screenshot-genesis.PNG)

## Getting Started

Simply clone the repository, run npm install:

* `Generate a private/public key pair using keygenerator.js`

* `Analyze & run main.js`

* `Blockchain will run for three blocks with a few transactions in the blocks`

* `Modify the main.js file using the available classes in blockchain.js`

### Prerequisites

What things you need to install the software and how to install them

```
Node.js
Node Package Manager
```

#### Installing

```
npm install
node main.js
```

## Built With

* [Elliptic](https://www.npmjs.com/package/elliptic)
   
* [Crypto-JS](https://www.npmjs.com/package/crypto-js)
   

## Author

* **Haz** - *Project Head* - [haz3141](https://github.com/haz3141)

## To-Do

* Timestamp transactions
* Build front-end
* Implement Persistence

## Acknowledgments

* The real Satoshi Nakamoto 👁
* Savjee for helping me learn blockchain programming
* Bitcoin and other Blockchains
* Encryption
* Cryptography
* Hat tip to Node.JS

## Repositories

[GitHub](https://github.com/haz3141/alpha-coin-blockchain)