const http = require('http');
const app = require('./app');
const config = require('./configs/default.js');

const port = config.port;

const server = http.createServer(app);
server.listen(port);
console.log("server is running on: 127.0.0.1:" + port);
