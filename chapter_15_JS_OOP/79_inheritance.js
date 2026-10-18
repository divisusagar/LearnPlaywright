/* Inheritance (Parent -> Child class) */
// Multiple Inheritance is not allowed in JS, We can have only and only one parent cla

class Cycle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
}

// Super Class
class Autombile {
    constructor(chasisNumber) {
        this.chasisNumber = chasisNumber;
    }
    useAeroDynamic() {
        console.log("Autombile -- Aerodynamic : "+this.chasisNumber)
    }
}


// parent (super class)
class Vehicle extends Autombile {
    constructor(make, model, year){
        super(1000);
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo(){
        console.log(`${this.make}, ${this.model}, ${this.year}`);
    }
    startEngine() {
        console.log(`Starting enginee... ${this.make}`);
    }
    stopEngine() {
        console.log(`Stop... ${this.make}`);
    }
}

// child (sub-class)
class Car extends Vehicle {
// class Car extends Vehicle, Cycle {           // Multiple Inheritance is not allowed
    constructor(make, model, year, fuelType) {
        super(make, model, year); // call the parent class constructor
        this.fuelType = fuelType;
    }
    driveCar() {
        console.log(`driving the ${this.make} car with ${this.fuelType} type`)
    }
}

class Truck extends Vehicle {
    constructor(make, model, year, loadCapacity) {
        super(make, model, year); // call the parent class constructor
        this.loadCapacity = loadCapacity;
    }
    driveTruck() {
        console.log(`driving the ${this.make} car with ${this.loadCapacity} load capacity`)
    }
}

const c1 = new Car('Honda City', 'Civic', 2016, 'Petrol');
c1.getInfo();
c1.startEngine();
c1.driveCar();
c1.stopEngine();
// c1.driveTruck();    // TypeError: c1.driveTruck is not a function
c1.useAeroDynamic();

console.log('*'.repeat(50));

const t1 = new Truck('Tata', 'Sumo', 2021, 1000);
t1.getInfo();
t1.startEngine();
t1.driveTruck();
t1.stopEngine();
// t1.driveCar();      // TypeError: t1.driveCar is not a function
t1.useAeroDynamic();