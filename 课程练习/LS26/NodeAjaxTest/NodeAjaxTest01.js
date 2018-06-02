var http = require("http");
var url = require("url");

http.createServer(function(req,res){
    var getDataStr = url.parse(req.url).query;
    res.writeHead(200,{
        "Content-Type":"text/plain",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":
        "GET, POST"
    });
    setTimeout(function(){
        res.end("你好，我已经收到你发的消息："+getDataStr);
    },20000*Math.random());
}).listen(8080,"127.0.0.1");
console.log("start server!");