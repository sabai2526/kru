var http = require("http");
http.createServer(function(req, resp){
    resp.writeHead(200, {"Context-Type" : "text/plain"});
    resp.end("Hello World.");

}).listen(8124);
console.log(" Server running at http://127.0.0.1:8124");