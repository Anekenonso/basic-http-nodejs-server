const http = require('http');

const requestHandler = (req, res) => {
    res.writeHead(200);
    res.end('server is working');
}

const server = http.createServer(requestHandler);
server.listen(5000);