window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var eventHandler = function (e) {
        console.log(e.clientX,e.clientY);
    }
    div1.onclick = eventHandler;
    div1.onclick = function(){
        console.log("xx");
    };//思考：是覆盖还是两个语句都会输出？
    div2.onclick = eventHandler;
    //div2.onclick = null;//取消事件响应
}
// true表示该元素在事件的“捕获阶段”（由外往内传递时）响应事件；
// false表示该元素在事件的“冒泡阶段”（由内向外传递时）响应时间。

// 阻止默认事件
e.prevnetDefault();
// 阻止事件冒泡
e.stopPropagation();// 此时事件冒泡运行到此为止