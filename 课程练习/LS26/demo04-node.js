var http = require("http");
var url = require("url");

http.createServer(function (req,res) {
    var getDataStr = rul.parse(req.url).query;// parse解析,query查询，最终返回字符串

    res.writeHead(200, {
        "Content-Type":"text/plain",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"GET, POST"
    });
    setTimeout(function(){
        res.end("你好，我已经收到你发的信息:"+getDataStr);
    },20000*Math.random());
}).listen(8080,"127.1.0.0.1");
console.log("start server!");