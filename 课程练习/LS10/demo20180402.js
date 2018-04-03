var a = 10,
    b = 20;
function fn() {
    var a = 100,
        c = 200;
    console.log(a,b,c,d);// 访问不到 d
    function bar() {
        var a = 500,
            d = 600;
        console.log(a,b,c,d);// 500 20 200 600
    }
    bar();
}
fn();
console.log(a,b,c,d);// 访问不到 c d

var a = 10,
    b = 20;
function fn() {
    var a = 100,
        c = 200;
    function bar() {
        var a = 500;
            d = 600;// 此时d为全局变量，定义在window上
    }
    bar();
     console.log(a,b,c,d);// 500 20 200 600
}
fn();

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();// Jack  与echo距离最近的name为jack

var scope = "global";
function checkScope(){
    var scope = "local";
    return function(){
        return scope;
    };
}
console.log(checkScope()());// local

var scope = "global";
function checkScope(){
    var scope = "local";
    return new Function("return scope;");
}
console.log(checkScope()());// global

var scope = "g";
function foo(){
    var scope = "l";
    return new Function("console.log(scope);")
}
foo()();// g

// ES5采用的是函数级作用域，没有块级作用域，跨文件也会影响。
{
    var foo = 4;
}
console.log(foo);

var userId = 123;
document.onclick = function () {console.log("userId = ",userId);};
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;// 去掉var后全局中userId的值变为234
    }
}());// userId为123

