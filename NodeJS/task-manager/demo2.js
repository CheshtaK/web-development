var http = require('http');
var events = require('events');

var eventEmitter = new events.EventEmitter();

var server = http.createServer(function(req, res){
    eventEmitter.emit('someone requested', 'TEST'); //event trigger
    res.end('Server works!');
});

eventEmitter.on('someone requested', function(data){
    console.log('A request has been done on the server!', data);
}); //event listener

server.listen(3000, 'localhost', function(){
    console.log('Server started on port: 3000');
});