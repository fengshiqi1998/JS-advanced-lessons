new Promise((resolve,reject) => {
    console.log("start promise");
    console.log("111");
    setTimeout(resolve,2000,"xx");// 2秒后调用函数resolve，传入参数xx  代码等效于setTimeout(() => {resolve("xx")},2000);
    setTimeout(() => {reject("xx")},5000);
    console.log("222");
}).then(// 一旦成功执行了resolve，调用then
    (val) => {console.log("val1:",val)},// 成功时调用 
    (err) => {console.log("val1:",err)}// 失败时调用
).then(
    (val) => {console.log("val2:",val)},// 成功时调用 
    (err) => {console.log("val2:",err)}// 失败时调用
)
console.log("333");
// 输出结果
// start promise
// 111
// 222
// 333
// val1: xx
// val2: undefined