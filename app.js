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
