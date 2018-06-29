//ES5 中使用构造函数定义并生成新的对象 
var Point = function(x,y){
    this.x = x;
    this.y = y;
}
Point(1,2);// 普通函数调用this指向window
p = new Point(3,4);// 作为构造函数调用,this指向实例化对象
console.log(window.x,window.y);// 1 2
console.log(p.x,p.y);// 3 4

function Point(x,y){
    this.x = x;
    this.y = y;
}
Point.prototype.show = function(){
    console.log("Point:",this.x,this.y);
};
var p1 = new Point(1,2);
p1.show();
console.log(Object.keys(p1));
console.log(Object.keys(p1.__proto__));
console.log(p1.__proto__ === Point.prototype);// true
console.log(p1.constructor === Point);// true
console.log(Point.__proto__ === Function.prototype);// true

var Point = function(x,y,z){
    this.x = x;
    this.y = y;
    var z = z;// 函数的私有变量
}
Point.prototype.show = function(){
    console.log(this.x,this.y,this.z);
};
var p = new Point(1,2,3);
p.show();// 1 2 undefined 找不到私有变量z 只能通过闭包实现




// ES6中引入Class作为对象模型
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    show() {
        console.log("show:",x,y);
    }
}// 注意：方法前不加function，方法之间不用逗号分隔，如果没有写constructor方法，会添加一个默认的constructor   方法默认不可枚举
var p1 = new Point(1,2);
var p2 = new Point(1,2);
p1.__proto__ === p2.__proto__;// true 与ES5中一样，实例化出的对象的原型是共享的
console.log(Object.getOwnPropertyNames(p2));// ["x", "y"]
p2.show();// 1 2
typeof Point;// "function"
console.log(Object.getOwnPropertyNames(p2.__proto__));// ["constructor", "show"]
p2.__proto__ === Point.prototype;// true