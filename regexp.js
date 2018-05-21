// 1.
var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
function selectNum(str){
	var reg1 = /\d{3}/g;
	return str.match(reg1);
}
console.log(selectNum(s1));
// 2.
var s2 = "get-element-by-id";
function lowToUp(str){
	var reg2 = /-\w/g;
	return str.replace(reg2,function(x){
		return x.slice(1).toUpperCase();
	});
}
console.log(lowToUp(s2));
// 3.
var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
function getUrl(str){
	var reg3=/www.\w+.\w+/g;
	return str.match(reg3);
}
console.log(getUrl(s3));