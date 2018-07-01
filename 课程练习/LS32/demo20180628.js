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

// 静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。
class Foo {
}
Foo.prop = 1;
Foo.prop; // 1
//上面的写法为Foo类定义了一个静态属性prop。
//目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。

/*
// 以下两种写法都无效
class Foo {
    // 写法一
    prop: 2

    // 写法二
    static prop: 2
}
Foo.prop // undefined
*/

//目前有一个静态属性的提案，对实例属性和静态属性都规定了新的写法
class MyClass {
    static myStaticProp = 42;
    constructor() {
        console.log(MyClass.myStaticProp); // 42
    }
}
// 同样的，这个新写法大大方便了静态属性的表达，ES6暂不支持

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

// ES6 规定，通过super调用父类的方法时，方法内部的this指向子类。体现了多态性
class A {
    constructor() {
        this.x = 1;
    }
    print() {
        console.log(this.x);
    }
}
class B extends A {
    constructor() {
        super();
        this.x = 2;
    }
    m() {
        super.print();
    }
}
let b = new B();
b.m();// 2
// 上面代码中，super.print()虽然调用的是A.prototype.print()，但是A.prototype.print()内部的this指向子类B，导致输出的是2，而不是1。也就是说，实际上执行的是super.print.call(this)。
// 由于this指向子类，所以如果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。这体现了多态性

// 如果super作为对象，用在静态方法之中，这时super将指向父类，而不是父类的prototype
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


