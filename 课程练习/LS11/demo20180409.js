(function(x,y){
	return x>y?y:x;
}(2,3));// 2
(function(x,y){
	return x>y?y:x;
})(2,3);// 2

true && function(a,b){
    return a>b?a:b;
}(5,9);// 9
0 && function(a,b){
    return a>b?a:b;
}(5,9);// 0

!function(x,y){
    return x==y?true:false;
}("5",5);// false
!function(x,y){
    return x===y?true:false;
}("5",5);// true

0 || function(a,b){
	return a>b?a:b;
}(2,3);// 3
1 || function(a,b){
	return a>b?a:b;
}(2,3);// 1

// demo0409
//(function () {  // IIFE开始
    var x = 10;
    document.onclick = function () {
        // console.log("x = ",x);
        alert("x = "+x);
    };
//})();

function f(){
    var getNumFuncs = [];
    for(var i=0;i<10;i++){
        getNumFuncs[i] = function(){
            return i;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();// 10 都指向同一个i

function f(){
    var getNumFuncs = [];
    for(var i=0;i<10;i++){
        (function (j) {
            getNumFuncs[j] = function(){return j;};
        })(i);// 每一个都独立
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();// 3

function f(){
    var getNumFuncs = [];
	var j;
    for(var i=0;i<10;i++){
		j=i;
        getNumFuncs[j] = function(){
            return j;
        };
    }
    return getNumFuncs;
}
var tmp = f();
tmp[3]();// 9 都指向同一个j