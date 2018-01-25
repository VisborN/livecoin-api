'use strict';

const Config = require('./test/testConfig.json');
const LiveCoin = require('./index');
const client = new LiveCoin(Config.key, Config.secret);

// Public Data API calls

client.getTicker('btc', 'usd')
.then(console.log).catch(console.error);

client.getAllTickers()
.then(console.log).catch(console.error);

client.getLastTrades('btc', 'usd', {
  minOrHr: true, 
  type: "BUY"
}).then(console.log).catch(console.error);

client.getOrders('btc', 'usd', {
  groupByPrice: true, 
  depth: 4
}).then(console.log).catch(console.error);

client.getAllOrders({
  groupByPrice: true, 
  depth: 4
}).then(console.log).catch(console.error);

client.getBidAndAsk('btc', 'usd')
.then(console.log).catch(console.error);

client.getAllBidsAndAsks()
.then(console.log).catch(console.error);

client.getRestrictions()
.then(console.log).catch(console.error);

client.getCurrencies()
.then(console.log).catch(console.error);

// Private Data API calls

client.getUserTrades({
  orderDesc: true,
  limit: 4
}).then(console.log).catch(console.error);

client.getClientOrders({openClosed: 'CANCELLED', startRow: 2})
.then(console.log).catch(console.error);

client.getUserOrder(88504958)
.then(console.log).catch(console.error);

client.getBalances('BTC')
.then(console.log).catch(console.error);

client.getBalance('BTC')
.then(console.log).catch(console.error);

client.getTransactions('1409920436000', '1409920636000', {
  types: 'BUY',
  limit: 2
}).then(console.log).catch(console.error);

client.getNumTransactions('1409920436000', '1409920636000', 'BUY')
.then(console.log).catch(console.error);

client.getTradingFee().then(console.log).catch(console.error);

client.getTradingFeeAndVolume().then(console.log).catch(console.error);