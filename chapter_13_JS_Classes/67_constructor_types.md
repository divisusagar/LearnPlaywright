Constructor:-
A constructor is a special method inside a class that runs automatically once when we create an object with 'new' keyword. Its job is to set up the object's starting data.

Rules for the Constructor:-
a) Name it 'constructor': The initialization method inside a class must literally be named 'constructor'. JavaScrip automatically executes this method when you initantiate an object using new keyword
b) A class can have ONLY ONE constructor method. If we declare 2 constructor, then JS immediately throws a Syntax Error (A class may only have one constructor)
c) Use parameters for dynamic data: Pass arguments into the constructor and assign them using 'this'

Types of Constructor:=
1*. Default constructor (implicit)
2**. Parameterized constructor
3**. Constructor with default values
4*. Constructor with an options object (substitute for overloading)
5**. Constructor in a child class
6. Copy constructor
7*. Static factory methods (alternative "named constructors")
8. Constructor function (the old, pre-ES6 way)
9**. Build-in constructors
