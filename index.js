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
import { paralleliterator } from './iterableprotocol';
import { fib } from './calculations';

server.disable('etag').disable('x-powered-by');
server.use(compression());
server.use(responseTime());
server.use(helmet());

const NUM_SALT_ROUNDS = 10;
async function test() {
  const pws = ['password', 'password1', 'passw0rd'];
  return pws.map(pw => bcrypt.hash(pw, NUM_SALT_ROUNDS));
}
server.use('/', (req, res) => {
  const num = Math.floor(Math.random() * 99)
  res.send(`Fib data --> ${fib(num)}`)
});
 
const data = [1,2,3,4,5,6,7,8,9]
paralleliterator(data)
// pino.info('request test perf with pino logger')
// server.listen(PORT, () => {
//   console.log('Listem to them')
// });