'use strict'
const responseTime = require('response-time');
const express = require('express');
const pino = require('pino')();
const compression = require('compression');
const PORT = process.env.port || 3000;
const server = express();

server.use(compression());
server.use(responseTime());

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

server.use('/', (req, res) => {
  const num = Math.floor(Math.random() * 9)  
  res.send(`Fib data --> ${fib(num)}`)
});

pino.info('request test perf with pino logger')

server.listen(PORT, () => {
  console.log('Listem to them')
});