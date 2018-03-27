function checkVarCount(a, b) {
    if (checkVarCount.length !== arguments.length) {
        alert("The count of the parameters you passed into the function doesn't match the function definition.");
    }else{
        alert("Successfully call the function");
    }

}
checkVarCount(1, 2);// Successfully call the function
checkVarCount(1);// The count of the parameters you passed into the function doesn't match the function definition.

function swim(m,n){
    console.log("i'm:"+this.name+" i can swim ___",m,n);
}
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};
var me = {name:"ABC"};
swim(1,2);// i'm: i can swim ___ 1 2
bird.fly(5,6);// i'm:polly i can fly ___ 5 6
// call
swim.call(me,3,4);// i'm:ABC i can swim ___ 3 4
bird.fly.call(me,7,8);// i'm:ABC i can fly ___ 7 8
swim.call(null,1,2);// i'm: i can swim ___ 1 2
// apply
swim.apply(me,[9,10]);// i'm:ABC i can swim ___ 9 10
bird.fly.apply(me,[11,12]);// i'm:ABC i can fly ___ 11 12
swim.apply(null,[13,14]);// i'm: i can swim ___ 13 14

