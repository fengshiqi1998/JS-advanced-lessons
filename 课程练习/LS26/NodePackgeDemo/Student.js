function Student(name,age){
    this.name=name;
    this.age=age;
}
Student.prototype.show = function(){
    console.log("I am",this.name,",I am",this.age,"years old.");
}
module.exports = Student;