var mysql = require("mysql");
var settings = require("../settings");

exports.execSQL = function(sql, callback){
    var conn = new mysql.createConnection(settings.dbConfig);
    conn.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        } else {
            conn.query(sql, function (error, recordset) {
                if (error) throw error;
                    callback(recordset);
            });
        }
        console.log('connected as id ' + conn.threadId);
    }); 

  /*  conn.connect()
    .then(function(){
        var req = new mysql.Request(conn);
        req.query(sql)
        .then(function(recordset){
            callback(recordset);    
        })
        .catch(function(){
            console.log(err);
            callback(null,err);
        });
    })
    .catch(function(err){
        console.log(err);
        callback(null, err);
    }); */
};