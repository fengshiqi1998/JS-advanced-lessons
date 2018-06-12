// ES6为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历
for (let codePoint of 'foo') {
    console.log(codePoint)
}
// f o o

for (let key in 'foo') {
    console.log(key);
}
// 0 1 2

//提供新的方法用于查找、判断和生成字符串,第二个参数，表示开始搜索的位置
var s = 'Hello world!';
s.startsWith('Hello'); // true
s.endsWith('!'); // true
s.includes('o'); // true
s.startsWith('world', 6); // true
s.endsWith('Hello', 5); // true
s.includes('Hello', 6); // false

var reg1 = /^hello/gi;
var reg2 = /\bhello/gi;
"hello world".replace(reg1,"*");// "* world"
reg1.test("hello world");// true

//在ES5中，RegExp构造函数的参数有两种情况。第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符（flag）。第二种情况是，参数是一个正则表示式，这时会返回一个原有正则表达式的拷贝,但是，ES5不允许此时使用第二个参数，添加修饰符，否则会报错。
var regex = new RegExp('xyz', 'i');
var regex = new RegExp(/xyz/i);
// 等价于 var regex = /xyz/i;

//repeat方法返回一个新字符串，表示将原字符串重复n次。
'x'.repeat(3); // "xxx"
'hello'.repeat(2); // "hellohello"
'na'.repeat(0); // ""
'na'.repeat(2.9); // "nana" 参数如果是小数，会被取整
//如果repeat的参数是负数或者Infinity，会报错。
'na'.repeat(Infinity);// RangeError
'na'.repeat(-1);// RangeError

//ES6中，如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。
var  reg = new RegExp(/abc/gi,"i");
reg.flags;// "i"

//（粘连sticky）修饰符
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;
r1.exec(s); // ["aaa"]
r2.exec(s); // ["aaa"]  第一次执行的时候，两者行为相同，剩余字符串都是_aa_a
r1.exec(s); // ["aa"]  由于g修饰没有位置要求，所以第二次执行会返回结果
r2.exec(s); // null  y修饰符要求匹配必须从头部开始，所以返回null

var r = /hello\d/y;
r.sticky // true

// ES5的source属性
// 返回正则表达式的正文
/abc/ig.source
// "abc"

// ES6的flags属性
// 返回正则表达式的修饰符
/abc/ig.flags
// 'gi'

//ES6在Number对象上，新提供了Number.isFinite()和Number.isNaN()两个方法。Number.isFinite();//用来检查一个数值是否为有限的（finite）。
Number.isFinite(15); // true
Number.isFinite(0.8); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false
Number.isFinite('foo'); // false
Number.isFinite('15'); // false
Number.isFinite(true); // false

//Number.isNaN()//用来检查一个值是否为NaN。
Number.isNaN(NaN); // true
Number.isNaN(15); // false
Number.isNaN('15'); // false
Number.isNaN(true); // false
Number.isNaN(9/NaN); // true
Number.isNaN('true'/0); // true
Number.isNaN('true'/'true') // true
// 与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断
isFinite(25); // true
isFinite("25"); // true
Number.isFinite(25); // true
Number.isFinite("25"); // false
isNaN(NaN); // true
isNaN("NaN"); // true
Number.isNaN(NaN); // true
Number.isNaN("NaN"); // false 

Number.parseInt === parseInt // true
Number.parseFloat === parseFloat // true

//Number.isInteger()用来判断一个值是否为整数。需要注意的是，在JavaScript内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。
Number.isInteger(25); // true
Number.isInteger(25.0); // true
Number.isInteger(25.1); // false
Number.isInteger("15"); // false
Number.isInteger(true); // false

function foo(){
    console.log(arguments);
    console.log(arguments instanceof Array);// false
    console.log(arguments instanceof Object);// true
    console.log(arguments.constructor);// ƒ Object() { [native code] }
    // ES5
    var arr = Array.prototype.slice.call(arguments);
    console.log(arr);// [1,2,3,"4","5"]
    // ES6
    var arry = Array.from(arguments);
    console.log(arry);
}
foo(1,2,3,"4","5");// Arguments(5) [1, 2, 3, "4", "5", callee: ƒ, Symbol(Symbol.iterator): ƒ]

var abc = {a:1,"0":2,length:3} ;
var arr = Array.from(abc);
console.log(arr);// [2,undefined,undefined]

//Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。Array.of总是返回参数值组成的数组。如果没有参数，就返回一个空数组
var a = Array.of(1,2,3,"x");
console.log(a);// [1,2,3,"x"]

//数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
//它接受三个参数
//target（必需）：从该位置开始替换数据。
//start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
//end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数
[1, 2, 3, 4, 5].copyWithin(0, 3);// [4, 5, 3, 4, 5]  将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, 3, 4);// [4, 2, 3, 4, 5]  将3号位复制到0号位
[1, 2, 3, 4, 5].copyWithin(0, -2, -1);// [4, 2, 3, 4, 5]  -2相当于3号位，-1相当于4号位

//数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
[1, 4, -5, 10].find(// 找出数组中第一个小于0的成员
    function(n){
        return n<0;
    }
);// -5

// find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
[1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
}); // 10

//数组实例的findIndex方法的用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
[1, 5, 10, 15].findIndex(function(value, index, arr) {
    return value > 9;
}) // 2

//fill方法使用给定值，填充一个数组。
['a','b','c'].fill(7);// [7, 7, 7]
//fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
['x', 'y', 'z'].fill(7, 1, 2);// ['x', 7, 'z']  从1号位开始，向原数组填充7，到2号位之前结束

// keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
for (let index of ['a', 'b'].keys()) {
    console.log(index);
}// 0 1
for (let elem of ['a', 'b'].values()) {
    console.log(elem);
}// 'a' 'b'
for (let [index, elem] of ['a', 'b'].entries()) { //[index,elem] 解构赋值
    console.log(index, elem);
}// 0 "a" 1 "b"

