var http = require('http');
var querystring = require('querystring');

var postData = querystring.stringify({
	'constent':'一起期待',
	'cid':348
})

var options = {
	hostname:'www.imooc.com',
	port:80,
	path:'/course/document',
	method:'POST',
	headers:{

	}
}


var req = http.request(options,function(res){
	console.log('Status:'+res.statusCode);
	console.log('headers:'+JSON.stringify(res.headers));
})

res.on('end',function(){
	console.log('评论完毕！');
})

req.on('error',function(e){
	console.log('Error:'+e.message)
})

req.write(postData);
req.end();