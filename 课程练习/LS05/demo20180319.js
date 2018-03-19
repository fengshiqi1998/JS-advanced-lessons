var obj={x:10,y:20,z:"30"};
var str1=""+obj;
str1;// "[object Object]"
var str2=JSON.stringify(obj);
str2;// "{"x":10,"y":20,"z":"30"}"

var i=1;
var b= ++i + ++i + ++i;
b;// 9

var x="1";
x+=1;
console.log(x);// 11
typeof x;// "string"   +=转换为字符串类型

var x="1";
x/=1;
console.log(x);// 1
typeof x;//"number"    /=转换为数字类型

console.log(3===3);// true
console.log(3==="3");// false
console.log(3=="3");// true
console.log(3==new String(3));// true
console.log(3===new String(3));// false

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);
console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1 == new String("xyz"));
// 全为false，指向的都不是同一个对象

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);// false  ==时会先从引用类型转换为基本类型，再判断
console.log(obj1 !== obj2);// true
console.log(obj1 != obj2);// true
console.log(obj1 != new String("xyz"));// true

var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[2],z:new Boolean(true)};
obj1.x===obj2.x;// true
obj1.y===obj2.y;// false
obj1.z===obj2.z;// false
obj1.x==obj2.x;// true
obj1.y==obj2.y;// false
obj1.z==obj2.z;// false

var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[2],z:new Boolean(false)};
obj1.z==obj2.z;// true

var obj1={x:2,y:[1],z:false};
var obj2={x:2,y:[2],z:Boolean(new Boolean(false))};
obj1.z==obj2.z;// false