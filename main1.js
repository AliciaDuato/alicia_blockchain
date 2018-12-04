const SHA256 = require('crypto-js/sha256');


class Block{
  contructor(index, timestamp, data, previousHash = ''){
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash(){
return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}


class Blockchain{
  constructor(){
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock(){
    return new Block(0, "04/12/2018", "Genesis Block");
  }
  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }
  addBlock(newBlock){
    newBlock.previousHash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}

let aliCoin = new Blockchain();
aliCoin.addBlock(new Block(1, "02/12/2018", { amount: 3 }));
aliCoin.addBlock(new Block(2, "03/12/2018", { amount: 5 }));

console.log(JSON.stringify(aliCoin, null, 3))
