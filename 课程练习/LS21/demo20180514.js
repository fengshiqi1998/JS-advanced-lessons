// 异常处理目的： 避免用户使用时程序崩溃。   开发时更快错误定位。
try{
	var a = new Array(-5);
	console.log("xx");
}
catch(e){
	console.log(e);
}
finally{
	console.log("finally");
}

// console用法
console.log("xx");// xx
console.warn("yy");// 警告式yy
console.assert(3>2,"xx");// 若前面参数结果为false，则返回第二个参数

try {
    try {
        throw "oops";
    }
    catch (ex) {
        console.error("inner", ex);// inner opps
    }
    finally {
        console.log("finally");// finally
    }
}
catch (ex) {
    console.error("outer", ex);
}

try {
    try {
        throw "oops";
    }
    catch (ex) {
        console.error("inner", ex);// inner oops
        throw ex;
    }
    finally {
        console.log("finally");// finally
    }
}
catch (ex) {
    console.error("outer", ex);// outer oops
}

var e1 = new Error("e1 Error Msg");
try {
    throw  e1;
} catch (e) {
    console.log(e.name + ": " + e.message);// Error: e1 Error Msg
}

//可以直接创建Error对象
console.log(Error.prototype);//{name: "Error", message: "", constructor: function, toString: function}
var myError = new Error("NewMessage");
console.log(myError.name,myError.message);// Error NewMessage

function MyError(name,message) {
    this.name = name||'MyError';
    this.message = message || 'Default Message';
}
MyError.prototype.__proto__ = Error.prototype;
try {
    throw new MyError('custom message');
} catch (e) {
    console.log(e.name);     // custom message
    console.log(e.message);  // Default Message
}
try {
    throw new MyError();
} catch (e) {
    console.log(e.name);     // MyError
    console.log(e.message);  // Default Message
}

try {
    throw n; // 抛出一个数值异常
} catch (e) {
    if (e <= 50) {
        // 异常在 1-50 之间时，直接处理
    } else {
        // 异常无法处理，重新抛出，可再外层再次被捕获
        throw e;
    }
}

