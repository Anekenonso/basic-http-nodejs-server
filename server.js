const http = require('http');
const PORT = process.env.port || 5000

const requestHandler = (req, res) => {
    res.writeHead(200);
    res.end('server is working');
}

const server = http.createServer(requestHandler);
server.listen(PORT);
