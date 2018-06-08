// 函数提升
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";
    }// 该出没有作用域块
}
f();// undefined
// 等价于
// function f() {
//     var temp;
//     console.log(temp);
//     if(false){
//         temp = "Hi!";
//     }
// }

var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        let temp = "Hi!";
    }
}
f();// 输出时间

var temp = new Date();
function f() {
    console.log(temp);
        let temp = "Hi!";// 暂存区锁死,temp属于整个函数，相当于使用（console.log(temp)）后定义,let不会提升
}
f();// 报错

typeof b;// undefined

typeof b;//报错 ReferenceError 需要使用前定义 下面有let b的声明
let b;

typeof b;// undefined
var b = 4;
// 变量提升，代码变为
// var b;
// typeof b;
// b = 4;

// let const不能重复定义
function foo1() {
    let x;
    var x;
}
foo1();//报错 重复定义