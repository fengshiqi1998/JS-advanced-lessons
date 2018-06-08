// 解构赋值
let [a,b,[c],d] = [{x:1},3,[true],"ab"];
console.log(a,b,c,d);// {x:1} 3 true "ab"

var [foo2] = [];
var [bar2,fee2] = [1];
console.log(foo2,fee2);// undefined undefined

var [a,b] = [[1],[2]];
// 等效于var a = 1,b = 2;
console.log(a,b);// [1] [2]
[a,b] = [b,a];
console.log(a,b);// [2] [1]

//解构赋值中的默认值
var [foo3 = true] = [];//foo3 为 true
[x3, y3 = 'b'] = ['a']; // x3='a', y3='b'
[x4, y4 = 'b'] = ['a',undefined]; // x4='a'y4='b'
[x4, y4 = 'b'] = ['a',null]; // x4='a'y4=null

null = undefined// true
null === undefined// false  ES6内部使用严格相等运算符（===），判断一个位置是否有值

function f2() {
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);// 1

let [m1 = 1, n1 = m1] = []; // m1=1; n1=1
let [m2 = 1, n2 = m2] = [2]; // m2=2; n2=2
let [m3 = 1, n3 = m3] = [1, 2]; // m3=1; n3=2
let [m4 = n4, n4 = 1] = []; // ReferenceError
var [m4 = n4, n4 = 1] = [];// undefined 1

let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a == b);// false

let a = [];
let b=[2,3,4];
a = b;
console.log(a == b);// true

// 不完全解构
let a = [];
let b = [1,2,3,4,5];
[a[0],,a[1],,a[2]] = b;
console.log(a);// [1,3,5]

// 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定。而对象的属性没有次序，变量必须与属性同名，才能取到正确的值
var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };// 等效于var { foo1:foo1, bar1:bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);
console.log(foo1,bar1);
var { bar2, foo2 } = { foo2: "ccc", bar2: "ddd" };//顺序不同，没关系
console.log(foo2,bar2);
var { baz3 } = { foo3: "ccc", bar3: "ddd" };
console.log(baz3);

//左侧为键值对时,注意键值对赋值时的对应关系
var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);// "aaa"

let obj1 = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj1;
console.log(f,l);// hello world
let { first, last } = obj1;
console.log(first,last);

// 和数组一样，解构也可以用于嵌套结构的对象,如果是键值对的情况，键只用于匹配，真正赋给的是对应的值
var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2;
console.log(x); // "Hello"
console.log(y); // "World"
console.log(p);// 报错 p是默认值，如果有赋值，则不存在p
var {p} = obj2;
console.log(p);// p存在

//对象的解构也可以指定默认值。
var {x2 = 3} = {};
console.log(x2); // 3

//字符串也可以解构赋值
const [a, b, c, d, e] = 'hello';//相当于将'hello'转成了["h","e","l","l","o"]后解构

//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length : len} = 'hello';
console.log(len); // 5

//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象
let {toString: s1} = 123;// 123被封装为一个Number对象，有一个原型函数toString
console.log(s1);// ƒ toString() { [native code] }
s1 === Number.prototype.toString // true




