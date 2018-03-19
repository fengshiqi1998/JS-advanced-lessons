(function(){
	var x=10;
	document.onclick=function(){
		console.log("x=",x);
	};
})();//使用IIFE函数立即执行表达式

console.log(a);// undefined
if(true){
    var a = 2;
}
console.log(a);// 2

console.log(b);// undefined
if(false){
    var b = 3;
}
console.log(b);// undefined

console.log(typeof NaN);// number
console.log(typeof Infinity);// number
console.log(typeof null);// object

console.log(typeof Number);// function
console.log(typeof String);// function
console.log(typeof Boolean);// function
console.log(typeof Object);// function
console.log(typeof Array);// function
console.log(typeof Function);// function
console.log(typeof RegExp);// function
console.log(typeof Error);// function
console.log(typeof Math);// object
console.log(typeof JSON);// object

var a1 = 2;
var a2 = "2";
console.log(a1==a2);// true  先试着进行类型转换，转换后，如果是基本类型，判断值是否相等，如果是引用类型，判断引用是否是同一个引用。
console.log(a1===a2);// false

var b1 = {};
var b2 = {};
console.log(b1==b2);// false
console.log(b1===b2);// false
console.log(b1===b1);// true

console.log({}instanceof Object);// true
console.log([]instanceof Object);// true
console.log([]instanceof Array);// true

console.log(2>1&&4<5);// true
console.log(true&&(!2));// false
console.log(false&&("2" == 2));// false
console.log(false&&false);// false
console.log(2>1||4<5);// true
console.log(true||(!2));// true
console.log(false||("2" == 2));// true
console.log(false||false);// false

console.log(1===1.0);// true
console.log(Number("xyz"));// NaN
console.log(3/0);// Infinity

(function (x,y) {
    return x>y?x:y;
}(4,5));// 5