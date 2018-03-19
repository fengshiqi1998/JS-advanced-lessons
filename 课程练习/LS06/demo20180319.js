console.log(2>1&&4<5);// true
console.log(true&&(!2));// false
console.log(false&&("2" == 2));// false
console.log(false&&false);// false
console.log(2>1||4<5);// true
console.log(true||(!2));// true
console.log(false||("2" == 2));// true
console.log(false||false);// false

console.log(true&&true);// true
console.log(23&&true);// true
// 逻辑运算符两侧不是布尔类型时，先将左操作数转换成布尔类型进行逻辑判断，再根据短路原则返回原始左操作数或者右操作数
console.log(true&&23);// 23
console.log("abc"&&23);// 23
console.log(0&&23);// 0
console.log(new Boolean(false)&&23);// 23
var a=(new Boolean(false))||23;
console.log(a,typeof a);// Boolean {false} "object"
var a=(new Boolean(false)&&23);
console.log(a,typeof a);// 23 "number"


var score=76;
console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");// 良   小括号优先级最高

var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//6
console.log(sum(1,2));//8
console.log(sum(1));//10
console.log(sum(1,0,0));//10   0为false，所以b值为4，c值为5

var sum = function(a,b,c){
    if(b!=false){b = b||4;}
    if(c!=false){c = c||5;}
    return a+b+c;
};
console.log(sum(1));// 10
console.log(sum(1,0,0));// 1

var sum = function(a,b,c){
    (b!=false)&&(b=b||4);
    (c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1));// 10
console.log(sum(1,0,0));// 1

function foo(a,b){
	return (a+b)||"和不能为0";
};
foo(-2,2);// "和不能为0"

(function(a,b){
	return (a+b)||"和不能为0";
}(-2,2));
// "和不能为0"