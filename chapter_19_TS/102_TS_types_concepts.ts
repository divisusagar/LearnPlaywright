// TS is a statically typed language
// Type Inference
// Type Annotations

/* What is Statically typed language?
In JS, a variable can be store type of data i.e
    let  age;
    age = 30;   // here "let age"  is storing a Number type value
    age = "Susagar" // here age is reassigned with String type value
    age = true;     // now, age is reassigned with Boolean type value

So, with this we can say JS is non-statically typed language i.e. variables behavior changes as per the assigned/reassigned value

In TS,
*/

let firstName: string; // Type Annotation: Explicitly deciding the type of the variable
firstName = "Susagar";
// firstName = 40; // Error at compile-time
console.log(firstName);

let num: number;
num = 90;
// num = true; // Error at compile time

let n: number = 50;
let lName:string = "Divi";

// Type Inference:
// So when the compile-type the type is decided, then this feature is called Type Inference
let test = "TypeScript"; // string value and haven't give any type. So compile-time will decided the type of variable
let billAmount = 6000; // type=Number -> decided at Compile type as the value assigedn -> Type Inference

// type: boolean
let isActive:boolean = true;

// type: null / undefined
let city:null = null;
let country:undefined = undefined;

//type: any
let value:any = 80;
value = 'DevOps';
value = true;
value = null;
value = undefined;

// multi-type 
let value1: (string | number);
value1 = 'Susagar';
console.log(value1);
value1 = 100;
console.log(value1);

let suspenseType;
console.log(suspenseType, typeof(suspenseType));    //undefined undefined
suspenseType = 20;
console.log(suspenseType, typeof(suspenseType));    // 20   number

//type: void - use in function - where function doesn't return valuee
function printHello():void {
    console.log("Hello...");
    //return 123; // function void and return with value leads compile-time error
    return; // function void and return without value is acceptable, to avoid confusion prefer not use empty return statememt.
}

function getNumber():number {   // return type is number --> CT
     return 123;
    // return "123"; // Tyoe 'string' is not assignable to type 'number'
}

function getAnyValue():any {
    return "AnyValue";
}


// function name: add
// params: a:number, b:number
// function return type: number 
function add(a:number, b:number):number {
    return a+b; // at the CT, the type inference will applied as number
}
console.log(add(10,20));


// custom types
type testStatus = "pass" | "fail" | "skip";

type Env = 'dev' | 'qa' | 'prod';
let env: Env = "prod";   // valid & assignable
// env: Env = 'staging'; // ❌ staging not in the list

const show = (value: string | number) => {
    if (typeof value === "string") {
        return value.toUpperCase();    // TS knows it's a string here
    }
    return value.toFixed(2);           // and a number here
};
console.log(show("Susagar"));
console.log(show(2.7589));