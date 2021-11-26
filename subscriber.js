const nsq = require('nsqjs');

const reader = new nsq.Reader('new_product', 'product_channel', {
  lookupdHTTPAddresses: '127.0.0.1:4161'
})

reader.connect();

reader.on('message', msg => {
  console.log('[%s]: %s', msg.id, msg.body.toString());
  msg.finish();
});