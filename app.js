// Constructor Examples - Yapıcı
// Prototype Chance - Prototype zinciri
// Inheritance - Kalıtım - Miras Alma

function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}
Employee.prototype.showInfo = function () {
    console.log("show info working => " + this.name, this.age, this.salary);
}
const emp1 = new Employee("Mehmet", 23, 6000);
const emp2 = new Employee("Barış", 17, 5000);
// console.log(emp1);
// console.log(emp2);
// emp1.showInfo();
// emp2.showInfo();


// Prototype create // Miras Alma

function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.test1 = function () {
    console.log("test 1");
}
Man.prototype.test2 = function () {
    console.log("test 2");
}
//const per = new Man();

function Woman(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Woman.prototype = Object.create(Man.prototype);

Woman.prototype.myTest = function () {
    console.log("my test");
}

const miras = new Woman("Name", 10, 1000);
console.log(miras);
miras.test1();


// Class yapısını kullanma ve constructor oluşturma

class Employee2 {
    constructor(name, age, salary) { //create a constructor function. Don't need to write "function"
        this.name = name,
            this.age = age,
            this.salary = salary
    }
    showInfo2() {
        console.log("showInfo2 aktif edildi");
    }
}

const emp = new Employee2("Mehmet", 23, 6000);
console.log(emp);
emp.showInfo2();


class Code {
    html() {
        console.log("html working");
    }
    static js() {
        console.log("js working");
    }
}
//working together
const emp3 = new Code();
emp3.html();
Code.js();
//emp3.js(); this is a wrong usages * is not a function error

// ES6 class create
class Person{ //SuperClass - BaseClass
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    showInfo3(){
        console.log("showInfo3 working");
    }
}
class Employee3 extends Person{ // Derived - SubClass - ChildClass
    constructor(name, age, salary){
        super(name,age),
        this.salary = salary
    }
    showInfo3(){
        console.log("showInfo3 working in base prototype");
    }
    toString(){
        console.log("Employee3");
    }
    Increase(amount){
        this.salary += amount;
    }
}
const emp4 = new Employee3("Mehmet", 23, 6200);
console.log(emp4);
emp4.showInfo3();
emp4.toString();
emp4.Increase(100);