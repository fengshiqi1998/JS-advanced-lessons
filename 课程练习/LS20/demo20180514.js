var reg = /\d/gi;// 匹配一个数字
reg.test("24xesfs");// true
RegExp.$_;// "24xesfs"

var execExp2 = /\d{1,2}(\d)(\d)/g;
var ts = "12s342dsfsf233s";
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 6
console.log(execExp2.exec(ts),execExp2.lastIndex);//lastIndex为 14

