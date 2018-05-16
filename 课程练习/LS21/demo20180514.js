// 异常处理目的： 避免用户使用时程序崩溃。   开发时更快错误定位。
try{
	var a = new Array(-5);
	console.log("xx");
}
catch(e){
	console.log(e);
}
finally{
	console.log("finally");
}

// console用法
console.log("xx");// xx
console.warn("yy");// 警告式yy
console.assert(3>2,"xx");// 若前面参数结果为false，则返回第二个参数