var m = new Map();
var o = {p:'Hello World'};
m.set(o,'content');// 键值可以为字符串和symbol以外的类型，如引用类型。Object结构提供了“字符串-值”对应，Map提供了“值-值”对应。
m.get(o);// "content"
m.has(o);// true
m.delete(o);// true
m.has(o);// false

// 作为构造函数，Map也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。
var o = {};
var map = new Map([
    ['name', '张三'],
    [o, 'Author']
]);
map.size; // 2
map.has('name'); // true
map.get('name'); // "张三"
map.has(o); // true
map.get(o); // "Author"

//Map构造函数接受数组作为参数，实际上执行的是下面的算法。
var items = [
    ['name', '张三'],
    ['title', 'Author']
];
var map = new Map();
items.forEach(([key, value]) => map.set(key, value));
//等效于
// items.forEach(function(v){
// 	map.set(v[0],v[1]);
// });

// 如果对同一个键多次赋值，后面的值将覆盖前面的值。
let map = new Map();
map.set(1, 'aaa').set(1, 'bbb');
map.get(1); // "bbb"
// 上面代码对键1连续赋值两次，后一次的值覆盖前一次的值。

// 如果读取一个未知的键，则返回undefined。
new Map().get('asfddfsasadf');
// undefined

var map = new Map();
map.set('a', 555);// 基本类型（字符串）
map.get('a'); // 555
//
var map = new Map();
map.set(['a'], 555);// 引用类型（数组）
map.get(['a']); // undefined Map为严格判断（三等），['a'] === ['a']为false，所以找不到
//
var aa = ['a'];
var map = new Map();
map.set(aa, 555);
map.get(aa); // 555 aa指向同一空间，可以找到

var map = new Map();
var k1 = ['a'];
var k2 = ['a'];
map.set(k1, 111);
map.set(k2, 222);
map.get(k1); // 111
map.get(k2); // 222
//上面代码中，变量k1和k2的值是一样的，但是它们在Map结构中被视为两个键。由上可知，Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
var map = new Map();
var k1 = 'a';
var k2 = new String('a');
map.set(k1, 111);
map.set(k2, 222);
// k1 k2 并不严格相等
map.get(k1); // 111
map.get(k2); // 222

// 包括0和-0。另外，虽然NaN不严格相等于自身，但Map将其视为同一个键（特例）。
let map = new Map();
map.set(NaN, 123);
map.get(NaN); // 123
map.set(-0, 123);
map.get(+0); // 123

//Map原型属性和方法


//Map遍历相关的方法


//Map结构转为数组结构，比较快速的方法是结合使用扩展运算符（...）。

//结合数组的map方法、filter方法，可以实现Map的遍历和过滤（Map本身没有map和filter方法）。
let map0 = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');
let map1 = new Map(
    [...map0].filter(([k, v]) => k < 3)
);
// 相当于 let map1 = new Map([...map0].filter(function(k,v){k<3;})); // ERROR
// 产生Map结构 {1 => 'a', 2 => 'b'}
let map2 = new Map(
    [...map0].map(([k, v]) => [k * 2, '_' + v])
);