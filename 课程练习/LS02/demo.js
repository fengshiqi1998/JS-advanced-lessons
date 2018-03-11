var obj={a:12,b:{c:"abc"}};//其中a分配在堆区（基本数据类型不一定分配在栈区）


var obj_a={v:"a"};
var obj_b=obj_a;
obj_b.v="b";
console.log(obj_a,obj_b);
obj_b={v:"c"};
console.log(obj_a,obj_b);
// results:
// {v: "b"} {v: "b"}
// {v: "b"} {v: "c"}


var a =2;
var b=2;
a==b;
true//基本数据类型只对值（2）进行判等

var c=[1,2];
var d=[1,2];
c===d;
c==d;
false//Object类型对引用进行判等
false//
d=c;//引用对象赋值
c===d;//对引用进行比较
true


var a=123;//基本数据类型
var b = new Number(123);//对象类型
console.log(a===b);
console.log(a==b);
false
true//隐式类型转换


var a =123;
function foo(x){
	x=345;
}
foo(a);
console.log(a);
123//值类型传递

var a ={y:123};
function foo(x){
	x.y=345;
}
foo(a);
console.log(a.y);
345//引用类型传递

var a ={y:123};
function foo(x){
	x.y=345;
	x={y:456};//后创建新的y
}
foo(a);
console.log(a.y);
345

var a ={y:123};
function foo(x){
	x={y:456};//先创建新的y
	x.y=345;
}
foo(a);
console.log(a.y);
123


var a=Number("xx1s2s3");
undefined
a;
NaN
typeof NaN;
"number"