function foo(){
	var a=b=3;//等价与var a=3;b=3;b为全局变量
}
foo();
console.log("b:",b);//是否报错？输出几？为什么？
console.log("a:",a);//是否报错？
// result: b:3 a报错
window.b===b;
// result: true

function foo(){
	console.log("this:",this);
	console.log(this===window);
}
foo();
// result: this:Window   非严格模式下this指向调用函数的对象，严格模式下指向undefine
var i = 65;
switch(true){ //思考若是改为 switch(new Boolean(true)){ 会怎样
    case i>=60:
        console.log('及格');
        break;
    case i<60:
        console.log('不及格');
        break;
    default:
        console.log('default');
}
// result:及格
switch(new Boolean(true)){
    case i>=60:
        console.log('及格');
        break;
    case i<60:
        console.log('不及格');
        break;
    default:
        console.log('default');
}
// result:default   new Boolean()是一个对象，switch中new Boolean(true)===基本数据类型，结果为false，所以直接跳至default

1&&2;// result:2

if(false){
    var a = 20;
}
console.log(a);
// result:undefined

//检测是否在严格模式下
"use strict"
function isStrictMode(){
	return this === window?false:true;
	//return this===undefined;
	//return this!=window;
}
console.log(isStrictMode());

function f(a){
    "use strict";
    a = 42;
    return [a, arguments[0]];
}
var pair = f(17);
console.log(pair[0]);
console.log(pair[1]);
result: 42,17;
var year = 2017,
    month = 5,
    date = 20,
    sum = 0;
switch(month-1){
    case 11:
        sum += 30;
    case 10:
        sum += 31;
    case 9:
        sum += 30;
    case 8:
        sum += 31;
    case 7:
        sum += 31;
    case 6:
        sum += 30;
    case 5:
        sum += 31;
    case 4:
        sum += 30;
    case 3:
        sum += 31;
    case 2:
        sum += year%4==0&&year%100!=0||year%400==0?29:28;
    case 1:
        sum += 31;
    default:
        sum += date;
}
console.log(sum);
// result:140