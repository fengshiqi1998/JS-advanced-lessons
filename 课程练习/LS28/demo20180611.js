function add([x, y]){
    return x + y;
}
add([1, 2]); // 3

[[1, 2], [3, 4]].map(function([a, b]){return a + b;});
// [ 3, 7 ]

// 从函数返回多个值
function example() {
    return [1, 2, 3];
}
var [a, b, c] = example();
console.log(a,b,c);// 1 2 3

// 函数参数的定义,解构赋值可以方便地将一组参数与变量名对应起来。
function f([x, y, z]) {
    console.log(x);
    console.log(y);
    console.log(z);
}
f([1, 2, 3]);// 实参有次序
f({z: 3, y: 2, x: 1});// 实参无序

// 提取JSON数据,解构赋值对提取JSON对象中的数据，尤其有用
var jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);// 42 "OK" [867,5309]