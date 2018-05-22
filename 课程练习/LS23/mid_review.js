console.log(typeof Math);// object
console.log(typeof Array);// function
console.log(typeof Number);// function
console.log(typeof Date);// function
Math instanceof Function;// false
Math instanceof Object;// true

var a = {x1:2,y1:3};
var b = {x2:2,y2:3};
console.log(a==b,a.x1===b.x1);// false true

2==new Number(2);// true
(5>4)&&([]==[]);// false
(1)&&null;// null
(2>3)||5;// 5

for(var i=1;i<=3;i++){// 变量污染，共享问题
	setTimeout(function(){console.log(i);},0);
}
// 4 4 4

for(var i=1;i<=3;i++){
	(function(i){
		setTimeout(function(){
			console.log(i);
		},0);
	})(i);
};// 1 2 3

(function(){// 预解析
	console.log(foo);// undefined
	var foo = 2;
	console.log(foo);// 2
	// 预解析后: 
	// var foo;
	// console.log(foo);
	// foo = 2;
	// console.log(foo);
})();

var tmp = 10;
function foo(x){
	var tmp = 3;
	return function(y){console.log(x+y+(++tmp));}
}
var fee = foo(2);
fee(10);// 16
fee(10);// 17
fee(10);// 18

var a = 15+(3+"2");// "1532"
var b = 15+3+"2";// "182"

var aa=[1,2,3];
var bb=aa;// 指向同一个空间
bb.shift();// 做同一个操作
console.log(aa);// [2,3]

var aa=[1,2,3];
var bb=aa;// 指向同一个空间
bb.shift();// 去掉1
bb = [2,3,4,5];// 不再指向同一个
bb.pop();// 去掉5
console.log(aa);// [2,3]

var arr = [1,2,3,4,5];
var num=10;
for(var i=1;i<=arr.length;i++){num+=arr[i];}
console.log(num);// NaN (Not a Number)

function add(a,b){
	this(a,b);// this指向sub
	console.log(a+b);
}
function sub(a,b){console.log(a-b);}
var arr = [3,1];
add.apply(sub,arr);// 2 4

function foo(){// 闭包 独立
	var i=0;
	return function(){console.log(++i);}
}
var a = foo();
var b = foo();
a();// 1
a();// 2
b();// 1

/\d{3}/g

var obj = {};
var newObj = Object.create(obj);
console.log(newObj.__proto__===obj);// true
console.log(obj.__proto__===Object.prototype);// true

var x = 1;
function foo(y){
	y=2;
}
foo(x);
console.log(x);// 1

var x = [1];
function foo(y){
	y[0]=2;
}
foo(x);
console.log(x[0]);// 2