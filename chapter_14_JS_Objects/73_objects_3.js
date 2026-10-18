// 1. Object literals: {}
const user = {
    name: 'michael',
    age: 25,
    country: 'USA',
    occupation: 'Engineer'
};
console.log(user.name, user.age, user.country, user.occupation);

// Constructor Function
function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};
const c1 = new Car("BMW", "520d", 10000);
console.log(c1.brand + " "+ c1.model + " "+ c1.price);

const c2 = new Car("Audi", "ZXV", 20000);
console.log(c2.brand + " "+ c2.model + " "+ c2.price);

// 3. Class style
class Customer {
    constructor(name, product){
        this.name = name;   // Instance variable
        this.product = product;
    }
    addToCart(){
        console.log(`${this.product} added to cart`);
    }
}
// instance of the class
const cust1 = new Customer('Name', 'Macbook Pro');
cust1.addToCart();

// 4. Object.create(): with some prototype object
const employeePrototype = {
    printInfo: function() {
        console.log(`Hello, emp name is ${this.name}`);
    }
}
const e1 = Object.create(employeePrototype);
e1.name = 'Susagar Divi';
e1.printInfo();

// 5. using Factory Function: return an object
function createDepartment(deptName, hod){
    return {
        deptName: deptName,
        hod: hod,
        getDepartmentInfo: function() {
            console.log(`Hello, dept name is ${this.deptName} and hod is ${this.hod}`);
        }
    }
}
const dept1 = createDepartment("Physics", "H C Varma");
const dept2 = createDepartment("Mathematics", "R C Chowdary");
dept1.getDepartmentInfo();
dept2.getDepartmentInfo();