












// 字面值生成对象
var obj1 = {a:1,b:2};
var obj2 = {c:3,d:4};
Object.setPrototypeOf(obj2,obj1);// 让obj2的原型为obj1
console.log(obj2.a,obj2.b,obj2.c,obj2.d);// 1 2 3 4

// 函数创建对象
var obj1 = {a:1,b:2};
var obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;
console.log(obj2.a,obj2.b,obj2.c,obj2.d);// 1 2 3 4
Object.keys(obj2);// ["c","d"]
"a" in obj2;// true 从自身属性和原型中查找

var obj = {foo:"bar",baz:42};
Object.values(obj);// ["bar",42]
Object.entries(obj);// [["bar",42],["baz",42]]
for(var [k,v] of Object.entries(obj)){
    console.log(k,v);
}
// foo bar
// baz 42