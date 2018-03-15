var a1=20;
var a2=23.4;
console.log(parseInt(a2));//23
console.log(parseFloat("23.456xy"));//23.456
console.log(parseInt===window.parseInt);//true
console.log(Math.ceil(a2));//24
console.log(Math.floor(a2));//23
console.log(Math.round(a2));//23
a3=5e2;
console.log(a3);//500
console.log(typeof Math);//object
var x=Number("xis021");
console.log(x);//NaN
typeof NaN;//"number"

var obj_a = {value:1};
function fn_a(arg){
    arg.value=3;
};
fn_a(obj_a);
console.log(obj_a);// {value:3}
function fn_b(arg){
    arg={value:2};
};
fn_b(obj_a);
console.log(obj_a);// {value:3}

var y1 = 2/0;
console.log(y1);//Infinity
var y2 = -2/0;
console.log(y2);//-Infinity
isFinite(y2);//false
isFinite(23);//true
isFinite(y1);//false
var z1 = 1/Infinity;//0
var z2 = -1/Infinity;//-0

var obj = {x:1,y:2};
console.log(obj.__proto__ === Object.prototype);//true

var arr = [1,2,3,4,5];
console.log(arr.__proto__ === Array.prototype);//true
console.log(arr.__proto__.__proto__ === Object.prototype);//true

var obj = {x:1,y:2};
var arr = [1,2,3,4,5];
function foo() {
    console.log("foo function!");
};
console.log(foo.__proto__ === Function.prototype);
console.log(foo.__proto__.__proto__ === Object.prototype);
console.log(obj instanceof Object);
console.log(arr instanceof Object);
console.log(foo instanceof Object);
console.log(foo === window.foo);
// 结果均为true

console.log(typeof (a>b),a>b);//boolean false
console.log(typeof (a==b),a==b);//boolean false
console.log(typeof (a<b),a<b);//boolean true

var c = "img" + 3 +".jpg";//img3.jpg
var d = "23" - 5;//18

var e = !23;//false
var f = !!34;//true
var g = !!{};//true

var h = {x:1};
if(h){
    console.log("h:",h);
}//h:{x:1}
var h = "";
if(h){
    console.log("h:",h);
}//undefined