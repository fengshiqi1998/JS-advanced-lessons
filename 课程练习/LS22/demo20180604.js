//Math 对象属性
console.log(Math.PI);// 3.141592653589793
console.log(Math.E);// 2.718281828459045
console.log(Math.LN2);// 0.6931471805599453
console.log(Math.LN10);// 2.302585092994046
console.log(Math.LOG2E);// 1.4426950408889634
console.log(Math.LOG10E);// 0.4342944819032518

//Math 对象数值方法
console.log(Math.random());// 0.5430168241166717
console.log(Math.abs(-123.456));// 123.456 绝对值
console.log(Math.pow(2,3),Math.pow(4,0.5));// 8 2 2的3次幂 4的0.5次幂
console.log(Math.sqrt(256));// 16

// round四舍五入  ceil向上取整  floor向下取整
console.log(Math.round(0.60),Math.ceil(0.60),Math.floor(0.60));// 1 1 0
console.log(Math.round(0.50),Math.ceil(0.50),Math.floor(0.50));// 1 1 0
console.log(Math.round(0.40),Math.ceil(0.40),Math.floor(0.40));// 0 1 0
// 不考虑进位
console.log(Math.round(0.49),Math.ceil(0.49),Math.floor(0.49));// 0 1 0
console.log(Math.round(-4.40),Math.ceil(-4.40),Math.floor(-4.40));// -4 -4 -5
console.log(Math.round(-4.60),Math.ceil(-4.60),Math.floor(-4.60));// -5 -4 -5

console.log(Math.max(5,7),Math.max(5,7));// 7 7
console.log(Math.max(-3,5),Math.max(-3,5));// 5 5
console.log(Math.max(-3,-5),Math.max(-3,-5));// -3 -3
console.log(Math.max(7.25,7.30),Math.max(7.25,7.30));// 7.3 7.3

//Math 三角方法
//角度转弧度方法
function toRadians(degrees) {
    return degrees/180 *Math.PI;
}
console.log(toRadians(180));// 3.141592653589793

//弧度转角度方法
function toDegrees(radians) {
    return radians/Math.PI*180;
}
console.log(toDegrees(Math.PI/4));// 45

console.log(Math.sin(toRadians(90))); // 1 参数一个以弧度表示的角。将角度乘以 （2PI/360）即可转换为弧度
console.log(Math.cos(toRadians(180)));// -1
