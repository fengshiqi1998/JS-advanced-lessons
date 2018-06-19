// 箭头函数
// ES5写法
var max = function(a,b){
    return a>b?a:b;
}
max(2,3);// 3
// ES6写法
var max = (a,b) => a>b?a:b;// 函数体只有一行代码时，直接返回该行的结果，可以不用return
max(2,3);// 3

// ES5写法
var f = function (v) {
    return v + 1;
};
f(2);// 3
// ES6写法
var f = v => v + 1; //单参数可以不用（），没有参数时需要加
f(2);// 3

var person = {
    first:"Ming",
    last:"Li"
}
// ES5
function full(person){
    return person.last+" "+person.first;
}
full(person);
// ES6
const full = ({first,last}) => last+' '+first;
full(person);

// ES5软绑定解决this缺陷
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定 将this赋值给that
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;//this绑定到了哪里？
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);// {x: 2, y: 2, moveTo: ƒ}
console.log(window.x,window.y);// undefined undefined

//ES6中 箭头函数中this是与函数定义时所在的对象绑定，而不是使用时所在的对象（避免this缺陷）,箭头函数导致this总是指向函数定义生效时所在的对象
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        var moveToX = ()=>this.x=x;
        //内部嵌套函数
        var moveToY = ()=>this.y=y;
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
console.log(window.x,window.y);
// 结果同上

function foo(x,...y){
    console.log(y);
}
foo(1,2,3);// [2,3]

function a(x,y){
    console.log(x,y);
}
a.call({},1,2);// 1 2
a.apply({},[1,2]);// 1 2

var getTempItem = itemId => ({id:itemId,name:"temp"});
getTempItem(23);// {id: 23, name: "temp"}

// ES5 this缺陷
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定到了哪里？
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this绑定到了哪里？
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);// {x: 0, y: 0, moveTo: ƒ}
console.log(window.x,window.y);// 2 2

// ES6 中实现函数参数默认值的方法 ,使用babble查看ES5的写法
var sum = function(a,b=4,c=5){
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3=6
console.log(sum(1,2));//1+2+5=8
console.log(sum(1));//1+4+5=10
console.log(sum(1,0,0));//1+0+0=1

//默认值案例
function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
    console.log(url);
    console.log(body);
    console.log(method);
    console.log(headers);
}
fetch('http://example.com');// http://example.com

//所有默认值的参数在最后
function f(x,y = 1) {// 以x为传递的参数，y为默认的值
    return [x,y];
}
f();//[undefined, 1]
f(2);//[2, 1]

// ES5中 实参数大于形参数量时，可以通过arguments来获得所有参数
function test() {
    console.log(arguments);//console.log(test.arguments);
}
test("a","b","c");// Arguments(3) ["a", "b", "c", callee: ƒ, Symbol(Symbol.iterator): ƒ]
//...Rest 相当于合并若干参数为一个数组，主要用于函数定义时，代替 arguments，组解决arguments的弊端
function f(...y){
    console.log(y);
}
f("a","b","c");// ["a", "b", "c"]
function add(...values) {
    let sum = 0;
    for (var val of values) {
      sum += val;
    }
    return sum;
}
add(2, 5, 3) // 10
//比arguments使用更加灵活,比如只想看从第二个开始之后的参数
function f(x,...y){
    console.log(x,y);
}
f("a","b","c","d");//输出 "a",["b","c","d"]
//思考：f("a",["b","c","d"]);//输出 "a",[["b","c","d"]]
f("a");//输出 "a",[]
f();//输出 undefined,[]

//...Spread 扩展操作符 相当于解数组为分散的参数，主要用于函数调用时，...Rest的逆运算
function f(x,...y){
    console.log(x,y);
}
f("a",...["b","c"]);//等价于f("a","b","c");
f("a");//输出 "a",[]
f();//输出 undefined,[]

// call与apply的转换 两者之间的区别 课通过...Rest和...Spread转换
function a(x,y){
    console.log(x,y);
}
var arr = [1,2];
a.call({},...arr);// 等价于a.call({},arr[0],arr[1])