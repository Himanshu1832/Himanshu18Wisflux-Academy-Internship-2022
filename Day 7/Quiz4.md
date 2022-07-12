## Theory 
# 1.What are anonymous functions in JavaScript?
- an anonymous function is that type of function that has no name or we can say which is without any name. When we create an anonymous function, it is declared without any identifier.
The main focused point is that there is no function we have declared before. It is just the keyword function and parenthesis
```js
let a_fx = function () {  
    console.log('anonymous function');  
};  
a_fx();
``` 
- USES
+ Immediate execution of a function

In order to invoke and execute a function immediately after its declaration, creating an anonymous function is the best way. 
```js
(function() {  
    console.log('Hello');  
})(); 
```
+ Passing an anonymous function to other function as its argument
```js
abs(function () {  
    console.log('Execute later after 1 second')  
}, 100);  
```

# 2.Explain strict comparison and Abstract comparison in javascript?
- (Abstract) == or === (Strict)
Abstract equality will attempt to resolve the data types via type coercion before making a comparison. Strict equality will return false if the types are different. 
```js
console.log(true == '1'); // true
console.log(true === '1'); // false
```
The abstract equality comparison performs a type conversion.

## 3.Difference b/w arrow functions and regular functions?
- Regular functions are constructible and they can be called using the new keyword
-The arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions
```js
var add = function(x, y) {
  return x + y;
};
//arrow fx ->
let add = (x, y) => { return x + y };
```
+ Curly brackets aren’t required if only one expression is present.
```js
let add = (x, y) => x + y;
```
+ if there are no arguments-
```js
let sayHi = _ => console.log(“Hi”);
```
+ Arrow functions do not have an arguments binding
```js
let myFunc = {  
 showArgs(){ 
  console.log(arguments); 
 } 
}; 
myFunc.showArgs(1, 6, 13, 4);
```
+ Arrow function do not have their own this but regular function have.
## 4.What is Hoisting in JavaScript?
- Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.
- In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.


## 5.JavaScript is a garbage collected programming language, explain how?
- The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.When it comes to programming, Garbage Collection means cleaning the memory spaces which don’t contain useful data and then reallocating those cleared memory to some other data which is both active and useful. That is the basic process of Garbage Collection in pretty much all the programming languages in the world. Some programming languages needs explicit interference from the developer while some other languages do this automatically. A low level programming language like C, requires the developer to free the memory by the use of methods such as malloc() and free() when the program no longer needs those variables or objects.It is a developer prerogative to free the memory and the ball is in the developer’s court to decide explicitly whether to free the meory or not. But this is not always the case.For a high level programming language like JavaScript, the memory management process is automated. The browser takes care of that thing for us.

## 6.Explain Shallow copy vs Deep copy in Javascript?
- A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. A shallow copy means that certain (sub-)values are still connected to the original variable.
- Shallow Copy:
When a reference variable is copied into a new reference variable using the assignment operator, a shallow copy of the referenced object is created.
a reference variable mainly stores the address of the object it refers to. When a new reference variable is assigned the value of the old reference variable, the address stored in the old reference variable is copied into the new one.
This means both the old and new reference variable point to the same object in memory. As a result if the state of the object changes through any of the reference variables it is reflected for both.
- Deep copy:
deep copy makes a copy of all the members of the old object, allocates separate memory location for the new object and then assigns the copied members to the new object.
In this way, both the objects are independent of each other and in case of any modification to either one the other is not affected.

## 7.What is Object.freeze
- The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed.
- Freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

## Program-
+ Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900.

```js
function getRandomNumberBetween(min1,max1,min2,max2){
    var v1=Math.floor(Math.random()*(max1-min1+1)+ min1);
    var v2=Math.floor(Math.random()*(max2-min2+1)+min2);
    
    console.log( Math.random() < 0.5 ? v1 : v2 );
}
getRandomNumberBetween(800,900,-100,0);
```
