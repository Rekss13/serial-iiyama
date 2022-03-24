const net = require('net');
//TF32_4338MSC-B1AG
let GET_MODEL = new Buffer.from('\x44\x30\x31\x67\x20\x02\x30\x30\x30\x30\x30\x30\x30\x30\x30\x30\x30\x30\x30\x30\x0D', 'binary');
let SET_POWER_ON = new Buffer.from('\x38\x30\x31\x73\x21\x30\x30\x31\x0D', 'binary');//"data":[56,48,49,114,108,48,48,49,13]
let SET_POWER_OFF = new Buffer.from('\x38\x30\x31\x73\x21\x30\x30\x30\x0D', 'binary');//"data":[56,48,49,114,108,48,48,48,13]
let GET_POWER = new Buffer.from('\x38\x30\x31\x67\x6C\x30\x30\x30\x0D', 'binary');
//TF32_4338MSC-B1AG

//PL3239 автосон, просыпается по старту ПК

const client = net.createConnection('4660', '192.168.1.30', function () {
    console.log('CONNECTED');

    client.write(SET_POWER_ON);
});
client.on('data', (data) => {
    console.log(data.toString());
    console.log('DATA: %j', data);
    client.end();
});
client.on('end', () => {
    console.log('disconnected from server');
});