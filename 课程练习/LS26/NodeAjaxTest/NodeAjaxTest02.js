var http = require("http");
var url = require("url");

http.createServer(function(req,res){
    var postData = "";
    req.on("data",function(chunk){
        postData+=chunk;
        console.log(typeof postData,postData);
    });

    req.on("end",function(){
        res.writeHead(200,{
            "Content-Type":"text/plain",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods":"GET, POST"
        })
        setTimeout(function(){
            res.end("你提交的数据："+postData);
        },200*Math.random());
    });
}).listen(8080,"127.0.0.1");
console.log("start server!");