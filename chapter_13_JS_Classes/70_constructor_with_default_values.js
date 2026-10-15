/* Contructor with default values
A constructor with default values give a parameter a fallback value. If the caller doesn't pas that argument (or passed undefined), the default is used instead of leaving the property as undefined
*/

class Student {
    constructor(name, address = 'Hyderabad', course = 'Playwright') {
        this.sName = name;
        this.sAddress = address;
        this.sCourse = course;
    }
}

const s1 = new Student();
console.log(s1); // Student { sName: undefined, sAddress: 'Hyderabad', sCourse: 'Playwright' }

const s2 = new Student('Susagar');
console.log(s2); // Student { sName: 'Susagar', sAddress: 'Hyderabad', sCourse: 'Playwright' }

const s3 = new Student('Pavan', 'Chennai');
console.log(s3); // Student { sName: 'Pavan', sAddress: 'Chennai', sCourse: 'Playwright' }

const s4 = new Student('Ravi', 'Bangalore', 'Python');
console.log(s4); // Student { sName: 'Ravi', sAddress: 'Bangalore', sCourse: 'Python' }

const s5 = new Student('Raghu', undefined, 'Python');
console.log(s5); // Student { sName: 'Raghu', sAddress: 'Hyderabad', sCourse: 'Python' }

const s6 = new Student('Charan', null, 'Python');
console.log(s6); // Student { sName: 'Charan', sAddress: null, sCourse: 'Python' }

const s7 = new Student('Tej', '', 'Python');
console.log(s7); // Student { sName: 'Tej', sAddress: '', sCourse: 'Python' }