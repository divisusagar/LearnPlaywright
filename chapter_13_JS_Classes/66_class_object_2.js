class Student {
    // variables
    sName;
    sAddress;
    
    // method
    goesToSchool(schoolName) {
        console.log('Goes to School: ',schoolName);
    }
}

let s1 = new Student();
console.log(s1.sName);
console.log(s1.sAddress);
s1.goesToSchool('Vignam Institute');

let s2 = new Student('Ravi','Hyderabad');
console.log(s2.sName);
console.log(s2.sAddress);