var obj={a:12,b:{c:"abc"}};//����a�����ڶ����������������Ͳ�һ��������ջ����


var obj_a={v:"a"};
var obj_b=obj_a;
obj_b.v="b";
console.log(obj_a,obj_b);
obj_b={v:"c"};
console.log(obj_a,obj_b);
// results:
// {v: "b"} {v: "b"}
// {v: "b"} {v: "c"}


var a =2;
var b=2;
a==b;
true//������������ֻ��ֵ��2�������е�

var c=[1,2];
var d=[1,2];
c===d;
c==d;
false//Object���Ͷ����ý����е�
false//
d=c;//���ö���ֵ
c===d;//�����ý��бȽ�
true


var a=123;//������������
var b = new Number(123);//��������
console.log(a===b);
console.log(a==b);
false
true//��ʽ����ת��


var a =123;
function foo(x){
	x=345;
}
foo(a);
console.log(a);
123//ֵ���ʹ���

var a ={y:123};
function foo(x){
	x.y=345;
}
foo(a);
console.log(a.y);
345//�������ʹ���

var a ={y:123};
function foo(x){
	x.y=345;
	x={y:456};//�󴴽��µ�y
}
foo(a);
console.log(a.y);
345

var a ={y:123};
function foo(x){
	x={y:456};//�ȴ����µ�y
	x.y=345;
}
foo(a);
console.log(a.y);
123


var a=Number("xx1s2s3");
undefined
a;
NaN
typeof NaN;
"number"