var superObj = {
	x:1,
	y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x=5;
console.log(subObj_Second);// 原型内，x为5，y为2

var superObj = {
	x:3,
	y:4,
	show:function(){
		console.log(this.x,this.y);
	}
};
var subObj_first = Object.create(superObj);
subObj_first.x = 1;
subObj_first.y = 2;
subObj_first.show();// 1 2 this指向调用函数的主体subObj_first

function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
//var p1 = new Person("Mike");Student.prototype = p1;
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);
console.log(s1.name,s1.age,s1.id);// Mike 22 2017001
console.log(s2.name,s2.age,s2.id);// Mike 22 2017002
s1.__proto__.name = "Jack";
console.log(s2.name);// Jack
s2.__proto__.__proto__.age = 99;
console.log(s2.age);// 99

function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,age,id){
    Person.call(this,name,age);// 作为普通函数对待，即this.name=name;this.age=age; this为调用主体s1或s2
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);

function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
console.log(Person.prototype.constructor);
// ƒ Person(name,age){
//     this.name = name;
//     this.age = age;
// }
console.log(Student.prototype.constructor);
// ƒ Person(name,age){
//     this.name = name;
//     this.age = age;
// }
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
s1.__proto__===Student.prototype;// true
s1.__proto__.__proto__===Person.prototype;// true

Function.__proto__===Function.prototype;// true
Function.__proto__;// ƒ () { [native code] }
Function.prototype;// ƒ () { [native code] }

var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1 This is a method in Base.prototype");
};
var instance1 = new BaseClass();
instance1.method1();// 1 This is a method in Base.prototype

instance1.method1 = function(){
    console.log("2 This is a method in instance1");
};
instance1.method1();// 2 This is a method in instance1

function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);// Mike
console.log(y instanceof Constr);// true


function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); //function person()
console.log(Father.prototype.constructor); //function person()
Father.prototype.constructor = Father;     //修正constructor指向
console.log(Father.prototype.constructor); //function father()
var one = new Father(25);

function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);// 123
console.log(a.privateId);// undefined
a.getId();// 123 456

function Person(name){	this.name = name;}
Person.prototype.getName = function(){}
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype);// true
console.log(p.__proto__ === p.constructor.prototype);// true
console.log(Object.prototype === p.constructor.prototype);// false
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);// false

function Person(name){
	this.name = name;
}
Person.prototype = { //测试如果更改了Person.prototype输出又会变成什么?
	getName:function(){}
}
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype);// true
console.log(p.__proto__ === p.constructor.prototype);// false
console.log(Object.prototype === p.constructor.prototype);// true
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);// true