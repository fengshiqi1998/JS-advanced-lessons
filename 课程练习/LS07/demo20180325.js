(function test() {
    console.log(arguments);// ["hello,","world!"]
    console.log(test.arguments==arguments,arguments);// false   ["hello,","world!"]
    console.log(arguments.length);// 2
	console.log(typeof arguments);// object
	console.log(arguments instanceof Array);//false
	console.log(arguments instanceof Object);// true
    console.log(Array.prototype.slice.call(arguments));// ["hello,","world!"]
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;// "hello,world"
})("hello,", "world!");

var a = 1;
console.trace("a:",a);// a:1
 (function foo(x) {
    console.trace("a:",a," x:",x);// a:1 x:1
    x = 2;
    console.trace("a:",a," x:",x);// a:1 x:2
})(a);
console.trace("a:",a); // a:1

var obj = {x:1};
console.trace("obj.x :",obj.x);// obj.x:1
(function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x);// obj.x:1 o.x:1
    o.x = 3;
    console.trace("obj.x :",obj.x," o.x :",o.x);// obj.x:3 o.x:3
})(obj);
console.trace("obj.x :",obj.x);// obj.x:3