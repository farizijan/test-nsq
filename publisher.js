const nsq = require('nsqjs')

const w = new nsq.Writer('127.0.0.1', 4150);


let i = 1;
let interval = setInterval(function(){
    let productName = 'Product '+i;
    w.connect()
    w.on('ready', () => {
        w.publish('new_product', productName);
    });
        
    w.on('closed', () => {
        console.log('done');
    });

    console.log(productName + ' published!');
    i++;
    if(i == 11) clearInterval(interval);
}, 1000);