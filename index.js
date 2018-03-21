'use strict'
const responseTime = require('response-time');
const express = require('express');
const pino = require('pino')()
const PORT = process.env.port || 3000;
const server = express();


server.use(responseTime());
server.use('/', (req, res) => {
  // console.time()
  res.send('Data')
  // console.timeEnd()
});

pino.info('request test perf with pino logger')

server.listen(PORT, () => {
  console.log('Listem to them')
});