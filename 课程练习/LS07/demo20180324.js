(function test1() {
    console.log("this is",this);
})();// this is window

(function test2() {
    (function test3(){
        console.log("this is",this);
    })();
})();// this is window

var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();// 23 {name: "obj", x: 23, test: ƒ}

var x = 45;
var test = function(){
	console.log("输出：",this.x);
}
var obj = {
    x:23
};
obj.test = test;
obj.test();// 输出：23
test();// 输出：45

var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;
obj.sayHi();// Hi，i'm undefined

objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();//AA
objA.foo.call(objB);//BB

var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};
var me = {
    name:"ABC"
};
bird.fly(5,6);// i'm:polly i can fly ___ 5 6
fish.swim.call(me,3,4);// i'm ABC i cam swim ___ 3 4
bird.fly.call(me,7,8);// i'm:ABC i can fly ___ 7 8

function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();//Hi,i'm Jack

