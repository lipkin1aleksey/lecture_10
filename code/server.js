var http = require('http');
var Static = require('node-static');
var WebSocketServer = new require('ws');

// подключенные клиенты
var clients = {};

// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({port: 8081});
webSocketServer.on('connection', function(ws) {

  var id = Math.random();
  clients[id] = ws;
  console.log("новое соединение " + id);

  ws.on('message', function(message) {
    console.log('получено сообщение ' + message);
    let result = getDaysToNewYear();
    for (var key in clients) {
      clients[key].send(result);
      console.log(`отправлено сообщение ${result}`);
    }
  });

});
function getDaysToNewYear() {
    let futureDate = new Date(new Date().getFullYear() +1, 0, 1),
        nowDate = new Date(),
        seconds = Math.floor((futureDate - (nowDate))/1000),
        minutes = Math.floor(seconds/60),
        hours = Math.floor(minutes/60),
        days = Math.floor(hours/24);
    return days;
}

// обычный сервер (статика) на порту 8080
var fileServer = new Static.Server('./dist/prod');
http.createServer(function (req, res) {
  
  fileServer.serve(req, res);

}).listen(8080);

console.log("Сервер запущен на портах 8080, 8081");

