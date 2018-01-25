var app = require('express')();
var http = require("http");
//var http = require('http').Server(app);
var books = require("../controllers/books");
var settings = require("../settings");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

http.createServer(function(req, resp){
    switch(req.method){
        case "GET":
            if(req.url === "/"){
                resp.end();
            }else if(req.url === "/books"){
                books.getList(req, resp);
            }

            break;
        case "POST":
            break;
        case "PUT":
            break;
        case "DELETE":
            break;
        default:
            break;
    }
}).listen(settings.webPort,function(){
    console.log("Started listening at: "+settings.webPort);
});
