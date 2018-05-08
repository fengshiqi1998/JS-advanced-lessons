var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function(a,i){
	console.log(a,i,this);
},arr2);// a为arr1的遍历元素，i为索引
// 2 0 (3) [1, 6, 7]
// 5 1 (3) [1, 6, 7]
// 8 2 (3) [1, 6, 7]

var arr1=[2,5,8];
var arr2=[1,6,7];
var arr3=[];
arr1.forEach(function(a,i){
	arr3[i]= a>arr2[i]?a:arr2[i];
});
console.log(arr3);// (3) [2,6,8]

var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.every(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    console.log(a);
    return a%2===0;
});
console.log(returnValue);
// 2
// 5
// false

var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.some(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    console.log(a);
    return a%2===0;
});
console.log(returnValue);
// 2
// true

var arr2= [1,3,5,7,9];
var newArray = arr2.map(function (a) { //Map映射 返回新的数组
    return a*a;
});
console.log(newArray,arr2);// (5) [1, 9, 25, 49, 81] (5) [1, 3, 5, 7, 9]

var arr2= [1,3,5,7,9];
var newArray = arr2.filter(function (a) {// Filter过滤 返回新的数组.产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log(newArray,arr2);// [3,5,7] [1,3,5,7,9]

// Array.prototype.reduce(element,initialValue?) 从左向右迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduce(add));// 14

// Array.prototype.reduceRight(callback,initialValue?) //从右向左迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduceRight(add));// 14

function printArgs(prev,cur,i) {
    console.log("prev",prev,",cur:",cur,",i:",i);
    return prev+cur;
}
var arr4 = ["a","b","c","d"];
console.log(arr4.reduce(printArgs));
// prev a ,cur: b ,i: 1
// prev ab ,cur: c ,i: 2
// prev abc ,cur: d ,i: 3
// abcd
console.log(arr4.reduce(printArgs,"x"));
// prev x ,cur: a ,i: 0
// prev xa ,cur: b ,i: 1
// prev xab ,cur: c ,i: 2
// prev xabc ,cur: d ,i: 3
// xabcd
console.log(arr4.reduceRight(printArgs));
// prev d ,cur: c ,i: 2
// prev dc ,cur: b ,i: 1
// prev dcb ,cur: a ,i: 0
// dcba
console.log(arr4.reduceRight(printArgs,"x"));
// prev x ,cur: d ,i: 3
// prev xd ,cur: c ,i: 2
// prev xdc ,cur: b ,i: 1
// prev xdcb ,cur: a ,i: 0
// xdcba
