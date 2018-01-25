//การใช้ http

var http = require("http");
http.createServer(function(req, resp){
    resp.writeHead(200,{"content-type":"text/plain"});
    resp.end("Hello World\n");
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081");
