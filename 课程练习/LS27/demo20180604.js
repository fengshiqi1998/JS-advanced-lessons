{var a = 23;}
console.log(a);// 23 没有块作用于，可以正常输出

for(var i = 0;i<5;i++){}
console.log("i",i);// i 5

var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
};
//一长串代码后，假如忘记上边定义了userID，容易重复定义造成变量污染
var a=2,b=3;
if(a<b){
    var userId = 234;
}
// 点击时，输出userId = 234

//使用了let就可以避免var所带来的问题
let userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
};
let a=2,b=3;
if(a<b){
    let userId = 234;
}
// 点击时，输出 userId = 123

//变量共享问题
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);// 输出的i值均为3
    }, 1000*i);
}
console.log("i：",i);// i 3

//通过IIFE（立即执行表达式）解决变量共享问题
for (var i = 0; i < 3; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}

//使用let可有效避免变量共享问题
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000*i);
}

//let 定义的变量 并不像 var 那样直接作为全局对象的属性
var x = 23;
let y = 34;
console.log(window.x,window.y);//23 undefined

const PI = 3.1415926;
console.log(PI);// 3.1415926
PI = 3;//给常量再赋值 报错

//const作用域同let
if(true){
    const MAX = 5;
}
console.log(MAX);//报错

//const 除了声明常量外，也常用来声明不变的函数
const fee = function () {};

//const指向的对象引用不可变，但其属性或元素（如果是数组对象的话）是可变的
const a = [];
a.push(123,234);//可以
a.length = 1;//可以
a = "str";//报错，因为a是const其元素或属性可改，但其引用不能修改类似于 const指针
a = [1];// 报错，修改了引用