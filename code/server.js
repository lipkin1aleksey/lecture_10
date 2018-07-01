var http = require('http'),
    static = require('node-static'),
    file = new static.Server('./dist/');

http.createServer(function(req, res) {
    file.serve(req, res);
}).listen(8080);

console.log('Server running on port 8080');