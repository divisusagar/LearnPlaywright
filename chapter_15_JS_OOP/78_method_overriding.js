/*
I don't to use the Parent Class method logic, instead I need to use same method name with its own logic

*/
class Car {
    minSpeed = 100;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    startEngine(){
        console.log('Starting enginer ... for Car');
    }
}
class Audi extends Car {
    minSpeed = 80;
    //overridden method for Parent class
    startEngine() {
        console.log('Starting enginer ... for Audi');
    }

    autoParking() {
        console.log('Audi Auto Parking');
    }
}

const audi = new Audi();
audi.startEngine();
audi.autoParking();
console.log(audi.minSpeed);

const car = new Car();
car.startEngine();