var obj = {
    num:10,
    str:"Hi",
    show:function(){
        console.log(this.str);
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
obj.show();			 //Hi

var me={
	age:20,
	name:"unknown",
	show:function(){
		console.log("I am "+this.name+",I am "+this.age+" years old.");
	}
}
me.show();// I am unknown,I am 20 years old.

Person = function(name){
	this.name=name;
}
var p=new Person("unknown");
p.name;// "unknown"
p instanceof Person// true

console.log(typeof Array);// function
console.log(typeof Math);// object
console.log(typeof Date);// function
console.log(typeof Function);// function
console.log(typeof JSON);// object
console.log(typeof Object);// function

console.log(Object instanceof Function);// true
console.log(Object instanceof Object);// true
console.log(Boolean instanceof Function);// true
console.log(Boolean instanceof Object);// true
console.log(String instanceof Function);// true 构造函数是函数也是对象
console.log(String instanceof Object);// true
console.log(Number instanceof Function);// true
console.log(Number instanceof Object);// true
console.log(Function instanceof Function);// true
console.log(Function instanceof Object);// true
console.log(Array instanceof Function);// true
console.log(Array instanceof Object);// true
console.log(Date instanceof Function);// true
console.log(Date instanceof Object);// true
console.log(Math instanceof Function);// false
console.log(Math instanceof Object);// true
console.log(JSON instanceof Function);// false
console.log(JSON instanceof Object);// true
console.log(new Function() instanceof Function);// true
console.log(new(new Function()) instanceof Function);// false
console.log(new(new Function()) instanceof Object);// true

var o = {
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x);// 1
o.x = 2;
console.log(o.x,o._x);// 2 2

var o = {
    _x:1.0,
    get x(){// 只读属性
        return this._x;
    }
};
console.log(o.x);//1
o.x = 2;
console.log(o.x,o._x);// 1

var p1 = {
    _name:"Jack",
    _age:23,
    set age(val){
        if(val>0&&val<150){
            this._age = val;
        }else{
            console.log("请设置正常年龄");
        }
    },
    get age(){
        return this._age;
    }
};
p1.age = 178;// 请设置正常年龄
console.log(p1.age);// 23

var arr=[1,2,3];
arr.__proto__;
arr.__proto__===Array.prototype;// true
({}).__proto__===Object.prototype;// true
({}).__proto__.__proto__;// null

var o={
	x:12
}
o.__proto__===Object.prototype;// true
o.__proto__.__proto__;// null
var o2=Object.create(o);
o2.__proto__===o;// true
var Person=function(name){
	this.name=name;
}
var p=new Person("abc");
p.__proto__===Person.prototype;// true
Person.__proto__===Function.prototype;// true
Person.__proto__.__proto__===Object.prototype// ture
Person.__proto__.__proto__.__proto__;// null

var obj={
	x1:12,
	x2:23,
	x3:34
}
for(var i=1;i<4;i++){
	console.log(obj["x"+i]);
}