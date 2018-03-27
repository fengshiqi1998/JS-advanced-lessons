console.log(typeof new Function());// function
console.log(typeof new new Function());// object

console.log(Function instanceof Function);// true
console.log(Function instanceof Object);// true

console.log(Array instanceof Function);// true
console.log(Array instanceof Object);// true

console.log(Date instanceof Function);// true
console.log(Date instanceof Object);// true

console.log(Math instanceof Function);// false不是函数
console.log(Math instanceof Object);// true

console.log(JSON instanceof Function);// false
console.log(JSON instanceof Object);// true

var Person = function(name){
	this.name=name;
}
console.log(Person instanceof Object);// true
console.log(Person instanceof Function);// true
var p=new Person("Jack");
console.log(p instanceof Object);// true
console.log(p instanceof Function);// false

function foo(x,y,z){}
console.log(foo.length);// 3

(function(n){
    if (n <= 0)
        return 1;
    else
        return n * arguments.callee(n - 1);
})(4);// 24

Object instanceof Function;// true
Object.__proto__===Function.prototype;// true
var o={};
o.__proto__===Object.prototype;// true
var arr=[];
arr.__proto__===Array.prototype;// true

var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo.bind(this)();// 23
		foo();// 45
    }
};
obj.test();

var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo();// 45
		foo.bind(this)();// 23
    }
};
obj.test();

function f1(x){return x+1;}
function f2(x){return x-1;}
function f3(x){return x*x;}
function foo(x,y,c1,c2){
	return 2*c1(x)-3*c2(x);
}
foo(1,1,f1,f3);// 1
foo(1,1,f3,f2);// 2
foo(1,1,f1,f2);// 4