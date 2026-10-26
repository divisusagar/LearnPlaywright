/**
 * Enum: Enumeration : data types : hold the set of constants
 * Types of Enum
 *  1. Numeric
 *  2. String
 *  3. Hetrogenous
 */

// Numeric Enum
// enum variables holds the values, if nothing is mentioned then the starts value is 0 and follwed with 1 increment
enum Browser1 {
    Chrome,
    Firefox,
    Safari,
    Edge
}
console.log(Browser1);
console.log(Browser1.Chrome);  // 0
console.log(Browser1.Firefox); // 1
console.log(Browser1.Safari);  // 2
console.log(Browser1.Edge);    // 3

enum Browser2 {
    Chrome=5,
    Firefox=9,
    Safari,
    Edge
}
console.log(Browser2);
console.log(Browser2.Chrome);  // 5
console.log(Browser2.Firefox); // 9
console.log(Browser2.Safari);  // 10
console.log(Browser2.Edge);    // 11

enum Browser {
    Firefox,
    Safari,
    Edge = getVersion('chrome') * 5,
    Chrome = getVersion('chrome') // all the non-intializer enum members should be at top
}

function getVersion(browserName: string):number {
    if(browserName === 'chrome') {
        return 115;
    }
    return -1;
}

console.log(Browser.Chrome);
console.log(Browser.Edge);

// String enum
enum environment{
    DEV = 'dev',
    QA = 'qa',
    STAGE = 'staging',
    PROD = 'prod'
}
console.log(environment);
console.log(environment.DEV);
console.log(environment['STAGE']);

// Heterogenous enum
enum Status {
    ACTIVE = 'active',
    DEACTIVE = 1,
    PENDING
}
console.log(Status);
console.log(Status.ACTIVE);
console.log(Status.DEACTIVE);
console.log(Status.PENDING);