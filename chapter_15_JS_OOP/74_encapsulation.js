/* Encapsulation

Encapsulation means bundling data (properties) and the code that works on it (methods) into one unit (a class), and controlling access to that data so outside code can’t change it carelessly.

Analogy: an ATM. You can press buttons (public methods: deposit, withdraw, check balance), but you can’t open the machine and change the cash count (private data). The bank controls every change through rules like “PIN required” and “can’t withdraw more than the balance”.
*/

// The problem: no protection
class Account {
    constructor(balance) {
        this.balance = balance;
    }
}
const acc = new Account(1000);
acc.balance = -9999;      // anyone can set the invalid data
console.log(acc.balance); // -9999
// Nothing stops outside code from putting the object into invalid state

// Way1: private field with # (the real and modern way)
//       Action methods that doesn't expose the raw value at all
//       Callers can only change it through meaningful actions with rules 

class Account1 {
    #balance = 0;
    constructor(initial) {
        this.#balance = initial;
    }

    deposit(amount) {
        if (amount <= 0) 
            console.log("Deposit must be positive");
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount >= this.#balance) 
            console.log("Insuffient funds")
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const acc1 = new Account1(1000);
acc1.deposit(500);
acc1.withdraw(200);
console.log(acc1.getBalance()); // 1300
acc1.deposit(-100);             // Deposit must be positive
acc1.withdraw(2000);           // Insufficent funds
// console.log(acc1.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
console.log(acc1.balance);     // undefined

// Way2: Getter and Setter (controlled access with property-style syntax)

//Program-1:- get  and set 
class Student {
    #studentAge = 0;
    #studentCourse = '';
    get age() {
        return this.#studentAge
    }
    
    set age(value) {
        if (value <=0 || value > 100) {
            throw new Error("Invalid age");
        }
        console.log('setter called with ', value)
        this.#studentAge = value;
    }
    get course() {
       return this.#studentCourse;
    }
    set course(value) {
        if (value === 'Playwright') {
            console.log('setter called with ', value)
            console.log('Playwright Course')
            this.#studentCourse = value;
        } 
        else if (value === 'Python') {
            console.log('setter called with ', value)
            console.log('Python Course');
            this.#studentCourse = value;
        }
        else console.log('Different Course')
    }
}
const s = new Student();
s.age = 35;
console.log(s.age);
// s.age = 130;    // Error: Invalid age

s.course = 'Playwright';
s.course = 'Python';

console.log(s.course);

//Program-2:- Regular methods (also very common)
//              The earlier Account example used getBalance(), deposit(), withdraw() this way
class Student1 {
    #age = 0;
    getAge (){
        return console.log(this.#age);
    }
    setAge(value) {
        this.#age = value;
    }
}
const s1 = new Student1();
s1.setAge(36);
s1.getAge();



// Way3: underscore converntion, (old, not enforced)
//       The _ is only a signal to other developers, We will see it in older code. Prefer # in new code 
class Account2 {
    constructor(balance){
        this._balance = balance;    // "please dont touch" by agreement only
    }
}
const acc2 = new Account2(1000);
acc2._balance = 5000;
console.log(acc2._balance); // 5000
console.log(acc2.balance);  // undefined

// Way4: Cache (speeding up repeated work)
//       Callers never need to know a cache exists, if you changes how caching works, nothing ouside breaks
class UserService {
    #cache = new Map();
    getUser (id){
        if (this.#cache.has(id)) {
            console.log(`User ${id}: from cache`);
            return this.#cache.get(id);
        } else {
            console.log(`User ${id}: loading...`);
            // this.#cache.set(id, `User${id}`)
            // return this.#cache;             // Map(1) { 1 => 'User1' }
            const user = { id, name: `User${id}` };
            this.#cache.set(id, user);
            return user;
        }
     }
}
const service = new UserService();
console.log(service.getUser(1));
console.log(service.getUser(2));
console.log(service.getUser(1));
console.log(service.getUser(2));