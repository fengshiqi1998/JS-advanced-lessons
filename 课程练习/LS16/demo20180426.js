var a = 1;
function f1(){
	var b = 2;
	function f2(){
		console.log(a,b);// 1 2
    }
	f2();
}
f1();

function thisTest(){
    console.log(this === window);
}
thisTest();// true

var a = 1,b=3;
function thisTest(){
	this.a = 2;
	delete this.b;
	this.c = "5";
}
thisTest();
console.log(a,c);// 2 "5"

function thisTest(){
	var a = b = 2;// 等效于 var a = 2;b = 2;
}
thisTest();
console.log(a);// 报错
console.log(b);// 2

var point = {
	x : 0,
	y : 0,
	moveTo : function(x,y) {
        this.x = x;
		this.y = y;
    }
};
point.moveTo(1,1);
console.log(point);// {x: 1, y: 1, moveTo: ƒ}

var Person = function(name,age){
	this.name = name;
	this.age = age;
	this.showMe = function(){
		console.log(this.name,this.age);
	}
}// this指向实例化对象
var p1 = new Person("Mike",23);
var p2 = new Person("Lucy",22);
p1.showMe();// Mike 23
p2.showMe();// Lucy 22

var Person = function(name,age){
	var namePrivate = name;
	var agePrivate = age;
	this.showMe = function(){
		console.log(namePrivate,agePrivate);
	}
}
var p1 = new Person("Mike",23);
var p2 = new Person("Lucy",22);
p1.showMe();
p2.showMe();

objA = {name:"AA",x:1}
objB = {name:"BB",x:5}
function test(){
	console.log(this.name,this.x);
}
objA.fun = test;
objA.fun();// AA 1
objA.fun.call(objB);// BB 5

Function.prototype.hasOwnProperty("call");// true

function f1(){};
f1.hasOwnProperty("call");// false
f1.__proto__.hasOwnProperty("call");// true

var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        (function moveToX() {
            this.x = x;//this绑定到了window上
        })();
        //内部嵌套函数
        (function moveToY() {
            this.y = y;//this绑定到了window上
        })();
    }
};// 嵌套时this不进行函数作用域传递
point.moveTo(2,2);
console.log(point);// 0 0
console.log(window.x,window.y);// 2 2

// 解决方案一：软绑定
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定,作用域传递
        //内部嵌套函数
        (function moveToX() {
            that.x = x;//this改为that
        })();
        //内部嵌套函数
        (function moveToY() {
            that.y = y;//this绑定到了哪里？
        })();
    }
};
point.moveTo(2,2);
console.log(point);// {x: 2, y: 2, moveTo: ƒ}
console.log(window.x,window.y);// undefined undefined

// 解决方案二：通过call和apply来解决
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this绑定到了point上
        }
        (function moveToY() {
            this.y = y;//this绑定到了window上
        })();
        moveToX.call(this);//->this.moveToX()->point.MoveToX()
    }
};
point.moveTo(2,2);
console.log(point);// {x: 2, y: 0, moveTo: ƒ}
console.log(window.x,window.y);// undefined 2
// 或者
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        (function moveToX() {this.x = x;}).call(this);
        (function moveToY() {
            this.y = y;//this绑定到了window上
        })();
    }
};
point.moveTo(2,2);
console.log(point);// {x: 2, y: 0, moveTo: ƒ}

//解决方案三：通过bind来解决
var point = {
    x:0,y:0,
    moveTo:function (x,y) {
        function moveToX() {
            this.x = x;//this绑定到了point
        }
        function moveToY() {
            this.y = y;//this绑定到了point
        }
        moveToX.bind(point)();
        moveToY.bind(point)();
    }
};
point.moveTo(2,2);
console.log(point);// {x: 2, y: 0, moveTo: ƒ}

// bind
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
		moveX.bind(this,x)();
		moveY.bind(this,y)();
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);// 3 4

// call/apply
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
		moveX.call(this,x);
		moveY.apply(this,[y]);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);