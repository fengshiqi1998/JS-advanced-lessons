// ES5里面对象的属性名都是字符串，新增的属性名就很可能和原来的属性名发送冲突
var obj = {
    x:1,
    y:2,
    moveTo:function(x,y){
        this.x = x;
        this.y = y;
    }
}
obj.moveTo = function(x,y){
    console.log("方法被覆盖了");
};
obj.moveTo(0,0);

let s = Symbol();
typeof s;// "symbol"
var s1 = Symbol('foo');
var s2 = Symbol('bar');
console.log(s1);// Symbol(foo)
console.log(s2);// Symbol(bar)

// Symbol有唯一性
// 没有参数的情况
var s1 = Symbol();
var s2 = Symbol();
s1 === s2 // false
// 有参数的情况
var s1 = Symbol("foo");
var s2 = Symbol("foo");
s1 === s2 // false

var a = {};
"toString" in a;// true toSring方法定义在Object.prototype上

const obj = {
    toString() {// 覆盖原型中的toSrting方法
        return 'abc';
    }
};
const sym = Symbol(obj);
sym // Symbol(abc)

const obj = {
};
const sym = Symbol(obj);
sym // Symbol([object Object])


var mySymbol = Symbol();
// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';//注意中括号内不要加引号
// 第二种写法
var a = {
    [mySymbol] : 'Hello!'
};
// 第三种写法
var a = {};
Object.defineProperty(a,mySymbol,{value:'Hello!'});
// 以上写法都得到同样结果
a[mySymbol];// "Hello!" 使用Symbol时不使用"."

var sy1 = Symbol("xx");
var sy2 = Symbol("xx");
var st1 = "xx";
var st2 = "xx";
var obj = {};
obj[sy1] = "12";
obj[sy2] = "34";
obj[st1] = "56";
obj[st2] = "78";
obj;// {xx: "78", Symbol(xx): "12", Symbol(xx): "34"}

var aSymbol = Symbol("abc");
var obj = {
    [aSymbol]: 'Hello!'
};
Object.defineProperty(obj, Symbol("abc"), { value: 'World!' });
console.log(obj);// {Symbol(abc): "Hello!", Symbol(abc): "World!"} 两种创建方式创建，key值相同，但是symbol类型有唯一性

//注意，Symbol值作为对象属性名时，不能用点运算符，使用中括号是注意使用引号和不用引号的区别
var mySymbol = Symbol();
var a = {};
a.mySymbol = 'Hello!';// 等价于a['mySymbol'] = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
//上面代码中，因为点运算符后面总是字符串，所以不会读取mySymbol作为标识名所指代的那个值，导致a的属性名实际上是一个字符串，而不是一个Symbol值。
a;// {mySymbol: "Hello!"} 只有一个属性值

var myS1 = Symbol("xx");
var myS2 = "xx";
var obj = {
    [myS1]:123,
    [myS2]:456
};
console.log(obj[myS1],obj[Symbol("xx")]);// 123 undefined
console.log(obj[myS2],obj["xx"]);// 456 456
console.log(obj["myS1"]);// undefined
console.log(obj["myS2"]);// undefined

//Symbol用于switch时可以避免重复问题
const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();
function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_GREEN:
            return COLOR_RED;
        default:
            throw new Error('Undefined color');
    }
}
// 常量使用Symbol值最大的好处，就是其他任何值都不可能有相同的值了，因此可以保证上面的switch语句会按设计的方式工作。

var obj = {};
var s1 = Symbol();
var s2 = Symbol();
obj[s1] = 123;
obj[s2] = 345;
obj["s1"] = 678;
obj.s2 = 910;
for(var k in obj){
    console.log(k,typeof k);
}// s1 string \n s2 string
Object.getOwnPropertySymbols(obj);// [Symbol(), Symbol()]
Object.getOwnPropertySymbols(obj).forEach((v) => {console.log(obj[v]);});// 123 345

// Symbol.for()不会每次调用就返回一个新的Symbol类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2); // true
console.log(Symbol.for("bar") === Symbol.for("bar"));// true
console.log(Symbol("bar") === Symbol("bar"));// false
console.log(Symbol.for("bar") === Symbol("bar"));// false

// Symbol.keyFor方法返回一个已登记的Symbol类型值的key。
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined
var s3 = Symbol(Symbol.keyFor(s1));
console.log(s1 === s3);// false
console.log(s2 === s3);// false
var s4 = Symbol.for(Symbol.keyFor(s1));
console.log(s1 === s4);// true
console.log(s2 === s4);// false

var s1 = new Set([1,2,3,4,5,5,6,2,2]);
console.log(s1);// Set(6) {1, 2, 3, 4, 5, 6}
var s2 = new Set();
[2,3,5,4,5,2,2].map(x => s2.add(x));
for(var i of s2){
    console.log(i);
}// 2 3 5 4

var set = new Set([1,2,3,3,3,4,4]);
console.log([...set]);// [1, 2, 3, 4] Set剔除重复项，...拆成散列，[]生成数组
set.size;// 4 元素个数

//区分基本类型和引用（对象）类型，两个对象总是不相等的
var set = new Set();
set.add({});
console.log(set.size); // 1
set.add({});
console.log(set.size); // 2

var set = new Set();
var a = {};
var b = a;
set.add(a);
set.size;// 1
set.add(b);
set.size;// 1

var set = new Set();
set.__proto__ === Set.prototype;// true

//关于Set的遍历方法
var set = new Set(['red', 'green', 'blue']);
console.log(typeof set.keys());// object
console.log(typeof set.values());// object
console.log(typeof set.entries());// object
//keys方法、values方法、entries方法返回的都是遍历器对象
for (var item of set.keys()) {
    console.log(item);
}
// red
// green
// blue
for (var item of set.values()) {
    console.log(item);
}
// red
// green
// blue
for (var item of set.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

// 使用解构赋值，将数据提取
for (var [key,value] of set.entries()) {
    console.log(key,value);
}
// red red
// green green
// blue blue

//Set结构的实例的forEach方法，用于对每个成员执行某种操作，没有返回值。
var set = new Set([1, 2, 3]);
set.forEach((value, key) => console.log(value * 2) );
// 2
// 4
// 6

//数组的map和filter方法也可以间接用于Set，通过...转成数组后调用后再生成set
var set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
// {2, 4, 6}
var set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// {2, 4}

// set应用案例 并集、交集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}