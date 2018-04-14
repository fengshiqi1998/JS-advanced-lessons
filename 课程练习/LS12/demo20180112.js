function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
console.log(f3);// 1
console.log(f3);// 1

function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;// 返回f2函数对象
}
var f3 = f1();
console.log(f3());// 1
console.log(f3());// 2

function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));// 6
console.log(inc(2));// 8
var inc2 = createInc(5);
console.log(inc(1));// 9
console.log(inc2(1));// 6

var tmp = 100;// 自由变量
function foo(x) {
    var tmp = 3;// 若屏蔽此行，tmp为全局的100，返回的三个值为113，114，115
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);// 16
fee(10);// 17
fee(10);// 18

function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age); //和相关作用域形成了一个闭包
bar(10); // 15 1
bar(10); // 15 2
bar(10); // 15 3

function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count());// 1
console.log(d.count());// 1
console.log(c.reset());// 0
console.log(c.count());// 1
console.log(d.count());// 2

function fn() {
    var max = 10;//若屏蔽此行，则输出为100
    return function bar(x) {
        if(x > max){
            console.log(x);
        }else {
            console.log(max);
        }
    }
}
var f1 = fn();
var max = 100;
f1(15);// 15

var db = (function() {
// 创建一个隐藏的object, 这个object持有一些数据
// 从外部是不能访问这个object的
    var data = {};
// 创建一个函数, 这个函数提供一些访问data的数据的方法
    return function(key, val) {
        if (val === undefined) { return data[key] } // get
        else { return data[key] = val } // set
    };
// 我们可以调用这个匿名方法
// 返回这个内部函数，它形成了一个闭包
})();
db('x'); // undefined
db('x', 1);// 设置data['x']为1
db('x'); // 1
db('y',2);
db('y');// 2
// 我们不能直接访问data这个object本身
// 但是我们可以设置它的成员