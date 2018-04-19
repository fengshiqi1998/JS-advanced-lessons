var obj1={x:1};

var obj2=Object.create(obj1);
obj2.y=2;

var Obj3=function(){this.z=3;}
var obj3=new Obj3();

var objProto = {z:3};
var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;
console.log(obj.x);// 1
console.log(obj.y);// 2
console.log(obj.z);// 3
console.log(obj.toString);// ƒ toString() { [native code] }
for(var k in obj){
    console.log(k,obj[k]);
}
// x 1
// y 2
// z 3

var obj = {
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
    console.log(k,obj[k]);
}// y 2

var obj = {
    x:1,
    y:2
};
Object.defineProperty(obj,"x",{writable:false});
for(var k in obj){
    console.log(k,obj[k]);
}// x 1 "\n" y 2

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,
    configurable:false,
    enumerable:true,
    value:"Mike"
});// 当writable:true configurable:false时,结果为Mike Lucy Lucy;当writable:true configurable:true时,结果为Mike Lucy;当writable:false configurable:true时,结果为Mike Mike
console.log(person.name);// Mike
person.name = "Lucy";
console.log(person.name);// Mike
delete person.name;
console.log(person.name);// Mike

var obj2={
    _name:"Lucy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name);// Lucy_hihi
obj2.name="jack";
console.log(obj2.name);// Jack_haha_hihi

var obj={x:1};
Object.defineProperty(obj,"y",{value:2,writable:false});
var xDes=Object.getOwnPropertyDescriptor(obj,"x");
var yDes=Object.getOwnPropertyDescriptor(obj,"y");
console.log(xDes,yDes);

var obj2= Object.create({x:1});
obj2.y=2;
Object.keys(obj2);// ["y"] Object.keys()只找到自身可枚举的值
Object.defineProperty(obj2,"z",{value:3});
Object.getOwnPropertyDescriptor(obj2,"z");
Object.getOwnPropertyNames(obj2);// ["y","z"] Object.getOwnPropertyNames()返回素有自有的键值，包括不可枚举
for(var k in obj2){
	console.log(k,obj2[k]);
}// retsult:y 2"\n"x 1
"x" in obj2;// true
"y" in obj2;// true
"z" in obj2;// true

var obj2= Object.create({x:1});
obj2.y=2;
Object.defineProperty(obj2,"z",{value:3});
obj2.hasOwnProperty("x");// false
obj2.hasOwnProperty("y");// true
obj2.hasOwnProperty("z");// true

var o3={};
o3.y="yyy";
Object.defineProperty(o3,"x",
	{configurable:true,enumerable:false,writable:true,value:"xxx"}

);
console.log(o3.hasOwnProperty("x"));// true
console.log(o3.propertyIsEnumerable("x"));// false

var obj = {x:1,y:2};
Object.seal(obj);// {x:1,y:2}
Object.getOwnPropertyDescriptor(obj,"x");// {value: 1, writable: true, enumerable: true, configurable: false}
obj.z=3;
delete obj.x;// false
delete obj.y;// false
delete obj.z;// true
Object.isSealed(obj);// true
Object.isExtensible(obj);// false
Object.isFrozen(obj);// false
Object.freeze(obj);// {x:1,y:2}
Object.getOwnPropertyDescriptor(obj);// undefined