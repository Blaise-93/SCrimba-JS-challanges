__Part 1 of the Question__:

1. Why do we call javascript as a dynamic lanaguage?
- ANS:
JavaScript is a dynamic language because it allows variables, functions, and code to change at runtime. 
This means that the type, value, and behavior of variables and functions can be modified while
the program is running


2. How does javascript determine data types?
- ANS:
JavaScript determines data types depending on the value assigned during the runtime.

__eg:
```javascript
var x = 100;
var whatisdataType = typeof(x);
x = 'something';
var whatisdataType = typeof(x);
x = true;
var whatisdataType = typeof(x);

```

3. What is typeof function?
- ANS: Used to determine the datatype variables of any javascript.
eg:

```javascript
const age = 'Blaise'
function studentAge(arr){
    return arr.split('')
}

console.log(typeof(studentAge(age)))
// typeof => object
```

4. How to check data types in javascript ?
- ANS:
    1. You can use the `typeof operator` to check the primitive data types,
    such as string, number, boolean, undefined, and symbol. 
    For example, typeof "Hello" will return "string", and typeof 42 will return "number".
    However, this operator has some limitations, such as returning "object" for both null and arrays.

    
    ```javascript
    let ages = [];
    let studentAge = 25
    const allowedToPlay = (age) => {
    //return typeof age
    return typeof age
    }
    console.log(allowedToPlay(ages)) // object
    ```


   2. You can use the `instanceof operator` to check if an object is an instance of a certain constructor 
   function or class. For example, [] instanceof Array will return true, and new Date() instanceof Date
    will return true. However, this operator does not work well with primitive values or across different frames or windows.

    ```javascript
    let ages = [];
    let studentAge = 25

    const allowedToPlay = (age) => {
    //return typeof age
    return age instanceof Array
    }
    console.log(allowedToPlay(ages)) //returns true

    ```
   3. You can use the `Object.prototype.toString.call() method` to get the internal property of an object. This method returns a string in the format of "[object Type]", where Type is the name of the object’s class. 
   For example, `Object.prototype.toString.call([]) will return "[object Array]", and Object.prototype.toString.call(null) will return "[object Null]"`. This method is more reliable than the typeof operator for checking the type of any value23.

    4. You can also use custom functions or libraries to check the data types in JavaScript. For example, you can write a function that checks if a value is an integer by using the Number.isInteger() method or by comparing the value with its floor value. Alternatively, you can use a library like YourJS that provides various type checking functions


5. Explain Undefined Data types?
- ANS: Undefined means that the variable has been declared but no value is assigned to it.

```javascript
let ages;
const allowedToPlay = (age) => {
    return age
}

console.log(allowedToPlay(ages)) // returns undefined in the console because ages which is a variable is not
// assigned with a  value eg string | number | boolean etc

```

6. What is Null?
- ANS: Null indicates intentional absence of data. Null indicates its not ZERO. It is not empty,
 its just absence of data

 ```javascript
 var emptyString = '' // nt null
 var age = 0 // nt null
 var age //  nt null but undefined
 var age = null // yes
 ```


7. What are different datatypes in javascript?
- ANS: There are 8 different datatypes in Javascript, they are [S N N U B B O S]:

```javascript
//primitive
var str = 'Shiv' //string
var num = 10 // number
var null = null // null
var bool = true // boolean
var big = 100 //bigint
var sym = Symbol() //symbol
var undefined = undefined // undefined

// objects
var obj = new Object() // obj
var arr = new Array() // ARRAY is not a datatype

```


8. Differentiate between Null and Undefined?
- ANS: Undefined means that a variable is declared but no value is assigned to to it, while null is an absence of data, thus we assign value NULL.


9. Explain Hoisting?
- ANS: It's a mechanism where variables and function declaration are moved to the top of the scope before the code execution

```javascript

console.log(studentAge) // it won't execute because because it is nt hoisted.
let ages = [];
let studentAge = 25



```

10. Are Javascript initialization hoisted?
- ANS: No



11. What are global variables?
- ANS: Global variables are accessible through out the webpage or the documents.
    
```javascript
    let ages = []; //global variable

    const allowedToPlay = (age) => {
    //return typeof age
      let studentAge = 25 //local  variable

    return age
    }
    console.log(allowedToPlay(ages)) //returns true

```

12. What are the issues with global variables? 
- ANS: It is dificult to debug esp when you use it quite often. They include:
        - Unintended side effects: Global variables can be modified by any function or statement, 
        which can lead to unexpected changes in the program’s behavior and make it hard to debug.
        - Namespace pollution: Global variables can clutter the global namespace and increase the risk of name collisions with other variables or functions.
        - Reduced modularity: Global variables can create dependencies between different parts 
        of the program, which can make it difficult to reuse, test, or maintain the code.

13. What happens when you declare variables with out VAR? 
- ANS: when you declare a variable without a var keyword, it becomes Global

Thus, When you declare variables without using the var keyword, you are creating implied globals1. 
This means that the variable will become a property of the global object, which is window in browsers2.
 This can lead to unexpected behavior and conflicts with other variables in the global scop

14. What is Use Strict?
- ANS: 'Use strict' strictly checks if the variable is defined using 'var' keyword or 'let keyword'.
    With strict mode, you can not, for example, use undeclared variables. Introduced in ecma5

```javascript
'use strict'

var age = 30
```


15. How to force developers to use VAR keyword?
- ANS:
    There is no definitive answer to how to force developers to use the VAR keyword, 
    as different programming languages have different rules and conventions for using it.
    However, some possible ways are:

    Using a code style checker or formatter that enforces the use of VAR, such as
    ESLint for JavaScript1 or ReSharper for C#.

16. How can we handle Global variables?
    - ANS: We can't avoid global variable in our projet, However, we can avoid global variables. 
    But we can organize it properly by doing two things:-

    Put global variables in a proper Namespace. Module pattern using Closures and IIFE
    eg:

```javascript

var global = {}

global.connectionString = 'Turing Test is today.'
global.logDir = 'd:\Logs'

//closures 
var myGlobal = (function() {
    var connectionString = 'Test'
    function GetConnection() {
        return connectionString
    }
    return {
        GetConnection
    }
})()
var str = myGlobal.GetConnection()
console.log(str) //print Test in the console
```


17. How can we avoid Global variables?
- ANS: To avoid global variables, we can use some alternative techniques such as:

   1. Local variables: Local variables are variables that are declared and used within 
   a specific function or block. They are not accessible from outside their scope and are
    destroyed when the function or block ends. Local variables can help us to limit the 
    scope of our data and avoid unwanted interference from other parts of the program.

    2. Parameters and return values: Parameters and return values are ways of passing
     data between functions. Instead of using global variables to share data between a function
      and its caller, we can write functions so that they receive all the required information 
      at the input and return all their results to the caller. That way, we provide all the 
      inputs needed by the function to run and avoid modifying any global state.

    3. Object-oriented programming: Object-oriented programming is a paradigm that organizes 
    data and behavior into objects, which are instances of classes. Objects have attributes
     (data) and methods (behavior) that are encapsulated within the object. Objects can
      communicate with each other by sending messages (calling methods). Object-oriented 
      programming can help us to create modular and reusable code that avoids global 
      variables by grouping related data and behavior into self-contained units.


18. What are closures?
- ANS: Closures are functions inside function and it makes a normal function stateful.
Thus A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function.

```javascript


const closureFunc = (() => {
    let num = 0
    function incrementNum() {
        return num++
    }
    return incrementNum
})()


console.log(closureFunc()) // 0
console.log(closureFunc()) // 1
console.log(closureFunc()) // 2
console.log(closureFunc()) // 3

```

19. Why do we need Closures?
- ANS: We need it to create self contained modules, functions and state which leads us to avoid global variable issues. It makes us to expose only what we want.


20. Explain IIFE?
- ANS: stands for Immediately Invoked Function Expression. It's an anonymous fn which get invoked immediately and any type of variable created inside IIFE is local to IIFE
```javascript
    var stdAge = 30

    (function() {
        var y = 10
        alert("I am IIFE")
    })()
    alert(y)

```

-- NB: Name collision happens when you name the same variable names or mtd names in the same function

21. What is the use of IIFE 
- ANS: B/c IIFE does not have name, So there is no way you can get name collision.


22. What is the name collision in global scope? 

- ANS:  Name collision in global context happens when you name the same variable names or mtd names in the same function under global scope.

23. IIFE vs Normal func
    - ANS: A normal function has a name while IIFE does not have a name. So with a mormal function you can have a name collision but with IIFE you will not have a name or either name collision.


24. What are design patterns in JavaScript?

    - ANS: Design patterns are `time tested architecture solutions`. So, create 
    a single instance we can use `singleton pattern`, if the object creational process
    is complex, we can use `factory pattern` and so on.
    - Other design patterns are:
        1. Constructor pattern: This pattern is used to create new objects with their own 
        properties and methods. It is similar to the concept of classes in other languages


        ```javascript
        
        class Person {
            constructor(age, name){
                this.age = age
                this.name = name
            
                this.greet = function(){
                    return `Good afternoon, ${this.name}, you are ${this.age}`
                }
            }
        
        }

        let studentName = new  Person(22, "Blaise Ejikeme")
        console.log(studentName.greet()) // Good afternoon, Blaise Ejikeme

        ```
    2. Singleton pattern: This pattern ensures that a class has only one instance and
        provides a global point of access to it. It is useful when we want to have a single
        source of truth or a shared state across our application. We can implement this 
        pattern by creating an object literal or using a self-invoking function that returns
        an object. For example:

        ```javascript
                var Config = {
        start: function(){
            console.log(`Listening to port 5000`)
        },
        update: function(){
            console.log("Update Application every 6 months.") 
        }
        }
        // can be used anywhere throughout the programS
        Config.start() //Listening to port 5000
        Config.update() //Update Application every 6 months.


        ```
    3. Prototype pattern: This pattern is based on the concept of prototypal inheritance in JavaScript, which means that objects can inherit properties and methods from other objects. This allows us to create objects that share common functionality without having to duplicate code. We can use the Object.create() method or the prototype property of constructor functions to implement this pattern. For example:

    ```javascript
        let Animal = {
        name: '',
        speaks: function(){
            return `The ${this.name } makes ${this.sound} sound.`
        }
        }


        let dog = Object.create(Animal)

        dog.name = "Rux"
        dog.sound = 'Meow'
        console.log(dog.speaks())
        console.log(dog)
    ```
    *__Others are the module pattern, the decorator pattern, the observer pattern__*

25. Which is the most used design pattern?
     - ANS Module pattern or revealing module pattern has two big advantages:
     a) Self-contained independent components
     b) Provides encapsulation and Abstraction

