// JS(ES5)六种数据类型，两类划分
// 基本（原始）数据类型：（Number String Boolean Null Undefined）基本类型的函数局部变量分配在栈区。
// 引用（对象）类型：(Object(Array Function Date Error...)) 引用类型的变量，其引用（即地址）分配在栈区或堆区，引用的对象分配在堆区。


// 基本类型与引用类型的区别
// 内存分配
function foo() {
    var n = 10;
    var m = true;
    var str = "Hello World"; // str:"Hello World"存在栈中
    // obj的引用存在栈中，{value:"Hello World"}存在堆中，通过栈中的变量名obj(访问地址)访问
    var obj = { value: "Hello World" };
};
var a = 24;// 存在栈中

// 赋值
var str_a = "a"; //
var str_b = str_a; // 原始类型直接访问值,是值赋值
str_b = "b"; // str_b的值为"b",而str_a的值仍然是"a"
console.log(str_a,str_b);// a b
var obj_a = {v:"a"}; // obj_a存的是引用，引用堆内存中存的对象:{v:"a"};
var obj_b = obj_a; // obj_b存的也是引用,引用了堆内存的值{v:"a"}；是引用赋值
obj_b.v = "b"; // 通过obj_b访问(修改)堆内存的变量,这时候堆内存中对象值为:{v:"b"},由于obj_a和obj_b引用的是堆内存中同一个对象值
console.log(obj_a,obj_b);// {v:"b"} {v:"b"}
obj_b = {v:"c"}; // 因为改的是整个对象，这里会在堆内存中创建一个新的对象值:{v:"c"},而现在的obj_b引用的是这个对象，
console.log(obj_a,obj_b);// {v:"b"} {v:"c"}

// 判等
var a1 = 100;
var b1 = 100;
console.log(a1 == b1);// true
console.log(a1 === b1);// true
var a2 = new Number(200);
var b2 = new Number(200);
console.log(a2 == b2);// false
console.log(a2 === b2);// false
var a3 = new Number(200);
var b3 = a3;
console.log(a3 == b3);// true
console.log(a3 === b3);// true

// 函数参数传递
var str_a = "Hello World";
function fn_a(arg){
    console.log(arg); // #1 Hello World
    arg = "Hai";
    console.log(str_a,arg); // #2 Hello World , Hai
};
fn_a(str_a);
console.log(str_a);// #3 "Hello World"
//从上面#1处可以看出，传入函数fn_a的是str_a的值,并且内存中分配了新的空间来保存函数参数和其值(函数运行后自动释放这部分内存),所以在#2处打印的是2个不同的字符串。也正是因为传值时候对str_a值进行了值的复制，而这又是原始类型的值，所以在#3处的str_a与早先声明的str_a保持一致
var obj_a = {value:1};
function fn_a(arg){arg.value=3;};
fn_a(obj_a);
console.log(obj_a);// {value:3}

function fn_b(arg){
    arg={value:2};//创建了一个新的对象，arg指向新对象
};
fn_b(obj_a);
console.log(obj_a);// {value:3}
// 上面这个问题也可以从内存角度去理解，两个函数都是传址，而这个址引用了obj_a在内存中对应的对象，所以两个函数中的arg起初都是引用和obj_a同一个内存中的对象值，而fn_a中访问的依旧是和obj_a同一个内存对象，所以fn_a修改是成功的，但是在fn_b中重新为arg赋值新的对象，arg指向新对象并不会影响obj_a


// Number类型
var a1 = 20;
var a2 = 23.4;
console.log(parseInt(a2));// 23 如果是非数字，则先转换为字符串，然后在转成整型
console.log(parseFloat("23.456xy"));//同上，结果为23.456
// parseInt和parseFloat都为全局方法，即window全局对象的方法
console.log(Math.ceil(a2));// 24
console.log(Math.floor(a2));// 23
console.log(Math.round(a2));// 23
a3 = 5e2;//指数形式 5 X 10^2
console.log(a3);// 500
console.log(typeof Math);// object


// String类型
console.log("abc\ndefghi\\\n\'mn\'");
// abc
// defghi\
// 'mn'
var str = "abc_def_ghi_jkl_mn";
str.split("_");// ["abc", "def", "ghi", "jkl", "mn"]
str.split("_",2);// ["abc", "def"]
str.concat("_opq");// "abc_def_ghi_jkl_mn_opq"
str.substr(4,7);// "def_ghi" 从4开始7个
str.substring(4,7);// "def" 4到6
str.slice(2);// "c_def_ghi_jkl_mn"
str.slice(2,5);// "c_d"
str.slice(-2);// "mn"
str.slice(2,-2);// "c_def_ghi_jkl_"


// Boolean类型: true、false

// Undefined
// unfefined 表示“没有值”（既不是原始值也不是对象）。访问未初始化的变量、缺失的参数，以及缺失的属性会返回这个。函数中没有任何返回值时也会返回 undefined
function foo(x,y) {
    console.log(x,y);//1 undefined
}
foo(1);

// null
// null表示“没有对象”。在用到对象的时候他表示空值。
// null是原型链最顶端的元素，一切皆源于空。
console.log(typeof null);//object


// 简单对象
