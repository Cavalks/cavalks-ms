var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./app/");

var server = http.createServer(function (req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
});

server.listen(80);
console.log("Server started on 80's port.");
