window.onload = function(e) {
    // console.log(e.target);
    // console.log(this);
    // console.log("window onload");
    var div1 = document.getElementById("div1");

    function clickHandler(e) {
        console.log(e.target,this);
    }
    // div1.onclick = clickHandler;
    // div2.onclick = clickHandler;

    div1.addEventListener("click",clickHandler);
    div2.addEventListener("click",clickHandler);
    document.addEventListener("click",clickHandler);
    window.addEventListener("click",clickHandler);
    // div1.removeEventListener("click",clickHandler);

    // div1.onclick = function(e) {
    //     // console.log("div1 onclick");
    //     // console.log(e.clientX,e.clientY,e.ctrlKey);
    //     // console.log(e);
    //     // console.log(e.type,e.target);
    //     // console.log(e.target,this);

    //     // console.log(e);
    //     // console.log(e.hasOwnProperty("target"));
    //     // console.log(e.__proto__);
    //     // console.log(e.__proto__.__proto__);
    //     // console.log(e.__proto__.__proto__.__proto__);
    //     // console.log(e.__proto__.__proto__.__proto__.hasOwnProperty("target"));
    //     // console.log(e.__proto__.__proto__.__proto__.__proto__);
        

    //     // for(var k in e){
    //     //         console.log(k,e[k]);
    //     //     }
    //     // for(var k in e.__proto__){
    //     //     console.log(k);
    //     // }
    //     // for(var k in e.__proto__.__proto__){
    //     //     console.log(k);
    //     // }
    //     // for(var k in e.__proto__.__proto__.__proto__){
    //     //     console.log(k);
    //     // }

    //     document.addEventListener("myclick",function(){console.log(e.type)});
    //     // document.dispatchEvent(new Event("myclick"));
    // }
    // // div1.ondrag = function(){
    // //     console.log("div1 ondrag");
    // // }
    
}

function div2click(e){
    console.log("xxx");
}