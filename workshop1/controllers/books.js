var db = require("../core/db");

exports.getList = function(req, resp){
   /* var data = {
		"Data":""
	};
	data["Data"] = "Welcome to Book Store DEMO...";
	resp.json(data);*/
    db.execSQL(" SELECT * FROM BOOKS", function(data, err){
        if(err) {
            resp.writeHead(500,"Internal Error occurred",{"Content-Type":"text/html"});
            resp.write("<html><head><title>500</title></head><body>500: Internal Error. Detail:"+err+"</body></html>");
            resp.end();
        }else {
            resp.writeHead(200,{ "Content-type":"application/json"});
            resp.write(JSON.stringify(data));
          //resp.json(data);
        }
        resp.end();
    });

};

exports.get = function(req, resp, resBody){

};

exports.add = function(req, resp, resBody){

};

exports.update = function(req, resp, reqBody){

};

exports.delete = function(req, resp, reqBody){

};