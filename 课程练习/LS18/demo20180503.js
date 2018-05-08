var arr2 = new Array("5");
console.log(arr2);// ["5"]
console.log(new Array(5));// [empty × 5]
var arr2 = new Array(5);
console.log(arr2);// [empty × 5]
arr2[3];// undefined

var arr = [];
arr[4] = 2;
arr;// [empty x 4, 2] 长度为5

var arr22 = [];
for(var i=0;i<5;i++){
	document.onclick = function(){
		arr22[i] = i;
	}
}
arr22;// [empty x 5,6]

var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;// 对象数据类型，引用赋值，指向同一个
console.log(a1,a2);// [] []

var a3 = [1,2,3];
var a4 = a3;
a4 = [];
console.log(a3,a4);// [1,2,3] []

var arr = [1,2,3];
delete arr[2];// 长度不变，删除不彻底
console.log(arr);// [1,2,empty]

var arr = [1,2,3];
var p = arr.pop();// 删除的最后元素
console.log(p);// 3

var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]] = b[0];// 传入一个未定义的值
console.log(b);// [empty x 2,3,undefined]

var arr = [];
arr[-1.23] = "xx";// "xx"
arr["-1.23"];// "xx"
arr.hasOwnProperty("xx");// true
arr["5"] = "yy";
arr;// [empty x 5,"yy", -1.23:"xx"]  类与数组对象
arr[1.23] = "zz";// 转换成属性

function f(){
	console.log(arguments);
}
f(1,2,3,"x");// Arguments(4) [1, 2, 3, "x", callee: ƒ, Symbol(Symbol.iterator): ƒ]

var arr = [,,];
console.log(arr.length);// 2

var a1 = [,"abc"];
console.log(a1.length);

for(var i in a1){
    console.log(i,a1[i]);//输出2个元素
}
console.log(0 in a1,1 in a1);// false true

var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(5);
}
for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);// 输出5x5矩形数组
// (5) [0, 0, 0, 0, 0]
// (5) [0, 1, 2, 3, 4]
// (5) [0, 2, 4, 6, 8]
// (5) [0, 3, 6, 9, 12]
// (5) [0, 4, 8, 12, 16]

var table = new Array(5);
for(var i=0;i<table.length;i++){
    table[i] = new Array(i);
}
for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
var product = table[2][4];
console.log(table);// 输出交错数组
// []
// [0]
// (2) [0, 2]
// (3) [0, 3, 6]
// (4) [0, 4, 8, 12]

var a = Array.of(7); // [7]
var b = Array.of(1,2,3); // [1,2,3]
var arr1 = [1,3,4];
console.log(Array.isArray(arr1));// true
arr1.x="xx";
console.log(Array.isArray(arr1));// true

function f(){
	console.log(Array.isArray(arguments));
}
f(1,2,3,"x");// false

function f(){
	console.log(arguments);
	Array.prototype.pop.call(arguments);
	console.log(arguments);
}
f(1,2,3,"x");
// Arguments(4) [1, 2, 3, "x", callee: ƒ, Symbol(Symbol.iterator): ƒ]
// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]