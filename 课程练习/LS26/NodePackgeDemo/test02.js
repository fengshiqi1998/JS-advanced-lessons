var test01 = require("./test01");
console.log(test01.a);
console.log(test01.b);
console.log(test01.c());

var Stu = require("./Student");
var s = new Stu("Jack",21);
s.show();