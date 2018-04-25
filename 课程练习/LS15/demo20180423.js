// 生成对象的三种方式
var obj1={
	name:"no1",
	age:1
}// {name: "no1", age: 1}  字面量创建
var obj2=Object.create(obj1);// Object静态创建
obj2.name="no2";
obj2.age=2;
// {name: "no2", age: 2}
function Obj(name,age){
	this.name=name;
    this.age=age;
}// 构造函数实例化创建
var obj3=new Obj("no3",3);// Obj {name: "no3", age: 3}

var empty={};
var obj2=Object.create(empty,{
	x:{value:1},y:{value:2,enumerable:true}
});
console.log(obj2);// {y: 2, x: 1}  枚举属性的优先显示
console.log(obj2.hasOwnProperty("x"));// true
for(var k in obj2){
	console.log(k,obj2[k]);
}// y 2

var a={};
a.__proto__;// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
a.__proto__===Object.prototype;// true
var b=new Object();
b.__proto__===Object.prototype;// true
b.__proto__.__proto__;// null
Object.prototype.__proto__;// null

var div=document.createElement("div");
div;// <div></div>
div.__proto__;// HTMLDivElement {constructor: ƒ, Symbol(Symbol.toStringTag): "HTMLDivElement"}

div.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__===Object.prototype;// true
div.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__===null;// true

var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.__proto__ === Object.prototype);// true
var newObj = Object.create(obj);// {}
var newObj2 = Object.create(obj);// {}
newObj.age = 23;// {age: 23}
console.log(newObj.__proto__ === obj);// true
console.log(newObj2.__proto__ === obj);// true

var proObj = {
    z:3
};
var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;
console.log(obj.x);// 1
console.log(obj.y);// 2
console.log(obj.z);// 3
console.log("z" in obj);// true
console.log(obj.hasOwnProperty("z"));// false
// 原型链操作
obj.z = 5;
console.log(obj.hasOwnProperty("z"));// true
console.log(obj.z);// 5
console.log(proObj.z);// 3
obj.z = 8;
console.log(obj.z);// 8
delete obj.z;//true
console.log(obj.z);// 3
delete obj.z;//true
console.log(obj.z);// 3
// 删除原型上的属性
delete  obj.__proto__.z;// 或者 delete proObj.z;
console.log(obj.z);// undefined

function Person(name,age){
	this.name=name;
	this.age=age;
}
Person.prototype.sayHi=function(){
	console.log(this.name,this.age);
}
var p = new Person("Mike",23);
p.sayHi();// Mike 23
p.__proto__===Person.prototype;// true
Person.__proto__===Function.prototype;// true

function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);// Jack
console.log(p1.age);// 20
p1.sayHi();// Hi,i'm Jack

