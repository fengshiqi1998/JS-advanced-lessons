NaN==NaN;//特例
// result:false
{x:1}=={x:1};
// result:false
console.log(typeof null);//历史遗留问题
// result:object
function foo(){

}
foo instanceof Object;
// true
var str="abcdef";
str.length;// 存储或读取基本类型（字符串、数字、布尔）值的属性时，会创建临时包装对象
// result:6
str.length=1;// 设置临时对象属性
console.log(str,str.length);// 临时对象已释放
// resutl:abcdef 6
var arr=[1,2,3,4,5];
arr.length=1;
console.log(arr,arr.length);
// result:[1] 1
if(new Boolean(false)){
    console.log("执行");
}//对象Object的值总为true
// result:执行
console.log(parseFloat("123.345xx"));
console.log(Number.parseFloat("123.345xx"));
console.log(window.parseFloat("123.345xx"));
// result:123.345  123.345  123.345
var temp="23"-1;
typeof temp;
// result:"number"
var a1=2;
var b1=new Number(2);
a1==b1;
// result:true
var a=2;
if(2==a){//判等时将数字写在前面，漏写等号时会报错
	console.log("输出");
}
// result:输出