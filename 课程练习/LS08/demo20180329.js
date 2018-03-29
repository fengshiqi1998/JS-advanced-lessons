var obj1={
	x:12,
	foo:function(y){
		console.log(this.x,y);
	}
}
var obj2={
	x:34
}
obj1.foo.call(obj2,"xx");// 34 "xx"
var fee=obj1.foo.bind(obj2);//fee函数主体默认为obj2
fee("yy");

var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;
    }
};
obj.fun3 = fun1;// 函数对象赋值 fun1的返回值
obj.fun4 = fun1();// fun1函数内的返回值
console.log("输出：",obj.fun3());// f fun2(){return this.x;}
console.log("输出：",obj.fun3()());// 12
console.log("输出：",obj.fun4());// 34