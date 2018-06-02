var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function(req,res){
    var getDataObj = url.parse(req.url,true).query;
    var arrayIndex = getDataObj.id-1;
    fs.readFile("./NodeJsonTest.json",function readData(err,data){
        var jsonArr=JSON.parse(data);
        res.writeHead(200,{
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods":"GET, POST"
        });

        res.end(JSON.stringify(jsonArr[arrayIndex]));
    });
}).listen(8080,"127.0.0.1");
console.log("start server!");