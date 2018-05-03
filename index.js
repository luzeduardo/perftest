'use strict'
const responseTime = require('response-time');
const express = require('express');
const pino = require('pino')();
const helmet = require('helmet');
const compression = require('compression');
const PORT = process.env.port || 3000;
const server = express();
const fs = require('fs');
const bcrypt = require('bcrypt');
const paralleliterator = require('./iterableprotocol')
const BinaryTree = require('./btree')

server.disable('etag').disable('x-powered-by');
server.use(compression());
server.use(responseTime());
server.use(helmet());

const NUM_SALT_ROUNDS = 10;
async function test() {
  const pws = ['password', 'password1', 'passw0rd'];
  return pws.map(pw => bcrypt.hash(pw, NUM_SALT_ROUNDS));
}

const data = [...Array(999).keys()]

const a = function* foo(){
  yield 'foo'
}

const b = function* bar(){
  yield 'a';
  yield* a()
  yield 'b'
}

const it = function* iter(data) {
  yield data
}


for(let x of [0, 1, 2, 3, 4, 5]){
  console.log(x)
}
console.log(it().next(), '-->')
for (let x= 0; x<= 10; x++){

}

//sub generator calls with spread 
console.log(b().return('yes'))
// console.log([...b()])

let tree = new BinaryTree('a', 
new BinaryTree('b', 
  new BinaryTree('c'), new BinaryTree('d')),
new BinaryTree('e'))

// for (let data of tree) {
//   console.log(data)
// }