console.log(a);
var a=2;
console.log(a);
// result:undefined 2
// 代码等价于
// var a;
// console.log(a);
// a = 2;
// console.log(a);

console.log(a,b);// undefined undefined
var b = 23;
console.log(a,b);// undefined 23
var a = b;
console.log(a,b);// 23 23

console.log(obj1,obj2);// undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);// {x:23} undefined
var obj2 = obj1;
console.log(obj1,obj2);// {x:23} {x:23}
obj2.x =25;
console.log(obj1,obj2);// {x:25} {x:25}

foo();
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
// result:f_2

foo();
var foo = function(){
    console.log("foo");
};// 报错

console.log(foo);// undefined
var foo = function(){
    console.log("foo");
};
foo();// foo

AA();// AA_1
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();// AA_2

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();// Jack

if(true){
    var z = 23;
}
console.log(z);// 23

if(true){
    (function () { //IIFE start
        var z = 23;
    }());           //IIFE end
}
console.log(z);// 报错z

if(true){var i = 0;}
function foo(){
    console.log("j:",j);//undefined
    var j = 10;
    console.log("j:",j);//10
}
foo();
console.log("i:",i);//0
console.log("j:",j);//报错

