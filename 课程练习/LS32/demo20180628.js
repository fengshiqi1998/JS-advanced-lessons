//如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
class Foo {
    static classMethod(){// Foo类的classMethod方法前有static关键字，表明该方法是一个静态方法
        return 'hello';
    }
}
Foo.classMethod(); // 'hello'
var foo = new Foo();
foo.classMethod();// TypeError: foo.classMethod is not a function 不能再Foo类的实例上调用
Foo instanceof Function;// true
Foo.secondMethod = function(){
    console.log("xx");
}// 添加静态方法
Foo.secondMethod();// xx

Object.myStaticMethod = () => {console.log(123);};
Object.prototype.myInstanceMethod = () => {console.log(456);};
var obj = {};
obj.myInstanceMethod();// 456
Object.myStaticMethod();// 123

// 静态方法可以与非静态方法重名。
class Foo {
    static bar () {// this指向类Foo
        this.baz();// 等价于Foo.baz();
    }
    static baz () {// 属于类
        console.log('hello');
    }
    baz () {// 属于实例化对象，实例化后才可通过实例调用
        console.log('world');
    }
}
Foo.bar(); // hello

class Foo {
    static baz () {
        console.log('hello');
    }
    baz () {
        console.log('world');
        Foo.baz();//
    }
    static fun1(o){
        o.fun2();
        // this.fun2();//报错
    }
    fun2(){
        console.log("fun2")
    }
}
var a = new Foo();
a.baz();//world hello
Foo.fun1(a);//fun2




class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // 1
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);// 调用父类构造函数
        this.klass = klass;// 此语句必须在调用父类构造函数之后写
    }
    show(){// 该函数在父类Person的位置1也可以，运行时找原型的原型中的函数
        console.log(this.name,this.age,this.klass);
    }
}
var student = new  Student(1,2,3);
student.show();// 1 2 3
Student.prototype.__proto__ === Person.prototype;// true
student.__proto__.__proto__ === Person.prototype;// true
Student.__proto__.__proto__ === Function.prototype;// 

class A {
    constructor() {
        console.log(new.target.name);// new.target指向当前正在执行的函数。
    }
}
class B extends A {
    constructor() {
        super();
    }
}
new A(); // A
new B(); // B

class A {
    p() {
        return 2;
    }
    static q(){
        return 3;
    }
}
class B extends A {
    constructor() {
        super();
        console.log(super.p()); // 2  super指向A.prototype
    }
    f(){
        console.log(super.p()); // 2  super指向A.prototype
    }
    static f(){
        console.log(super.q()); // 3  super指向A的static q
    }
}
let b = new B();
b.f();// 2 2
B.f();// 3



//如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的prototype
class Parent {
    static myMethod(msg) {
        console.log('static', msg);
    }
    myMethod(msg) {
        console.log('instance', msg);
    }
}
class Child extends Parent {
    static myMethod(msg) {
        super.myMethod(msg);//super 指的是Parent类
    }
    myMethod(msg) {
        super.myMethod(msg);//super 指的是Parent.prototype
    }
}
Child.myMethod(1); // static 1
var child = new Child();
child.myMethod(2); // instance 2
//上面代码中，super在静态方法之中指向父类，在普通方法之中指向父类的原型对象即Parent.prototype


