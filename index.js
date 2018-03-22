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
server.disable('etag').disable('x-powered-by');
server.use(compression());
server.use(responseTime());
server.use(helmet());

function memoize(fn) {
  const cache = {}
  return function(...args) {
    if (cache[args]) {
      return cache[args]
    }
    const res = fn.apply(this, args)
    cache[args] = res
    return res
  }
}
function slowFib(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}
const fib = memoize(slowFib)

const NUM_SALT_ROUNDS = 10;
async function test() {
  const pws = ['password', 'password1', 'passw0rd'];
  return pws.map(pw => bcrypt.hash(pw, NUM_SALT_ROUNDS));
}
server.use('/', (req, res) => {
  const num = Math.floor(Math.random() * 9)
  res.send(`Fib data --> ${fib(num)}`)
});

pino.info('request test perf with pino logger')

server.listen(PORT, () => {
  console.log('Listem to them')
});