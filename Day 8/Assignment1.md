# Assignment 1 Week 2 Day 3

## Theory:

1. ### What are the basic data types in TypeScript?
      
   JavaScript has eight data types. Seven primitive types and one object Data type. The primitive types are number, string, boolean, bigint, symbol, undefined, and null. Everything else is an object in JavaScript.

   The TypeScript Type System supports all of them and also brings its own special types. They are unknown, any, void & never.

   TypeScript also provides both numeric and string-based enums. Enums allow a developer to define a set of named constants
   
2. ### What is Generic data type.

     A generic type is a generic class or interface that is parameterized over types.
   - A generic types allow you to write a general, generic class (or method) that works with different types, allowing for code re-use.
   
3. ### What is type inferring in TS. 

     TypeScript infers types of variables when there is no explicit information available in the form of type annotations.
     When a type inference is made from several expressions, the types of those expressions are used to calculate a “best common type”.
     
     Example:
     
   ```
   let x = [0, 1, null];
   
   let x: (number | null)[]
   ```
   
   
4. ###  What are the possible ways to define typing for functions.

      In TypeScript, there are multiple syntaxes for declaring the type of a function:
      
  - Method signatures.
     
      The method signature syntax is probably the most straightforward to use. When defining an object type
```
interface Date {
  toString(): string;
  setTime(time: number): number;
  // ...
}
```

   - Function type literals.
        
       Function type literals are another way to declare the type of a function. They're typically used in the signature of a higher-order function, that is, a function which accepts functions as parameters or which returns a function:
          
```
interface Array<T> {
  sort(compareFn?: (a: T, b: T) => number): this;
  // ...
}
```          
          
  - Object type literals with call/construct signatures.
    
       In JavaScript, functions are nothing but special objects than can be called. This fact is reflected in the syntax of object type literals: they describe the shape of an object, which also happens to have a call signature:
  
```
interface Date {
  toString(): string;
  setTime(time: number): number;
  // ...
}
``` 


5. ###  How to define Generic type for Classes.
        
     A Generic class simply means that the items or functions in that class can be generalized with the parameter(example T) to specify that we can add any type as a parameter in place of T like Integer, Character, String, Double or any other user-defined type.
     - These classes are known as parameterized classes or parameterized types because they accept one or more parameters.
    
     For example:

   ```ts
   class StudentInfo<T, U> {
     private Id: T;
     private Name: U;

     setValue(id: T, mame: U): void {
       this.Id = id;
       this.Name = name;
     }

     display(): void {
       console.log(`Id = ${this.Id}, Name = ${this.Name}`);
     }
   }

   let student1 = new StudentInfo<number, string>();
   student1.setValue(123, "Sameer");
   student1.display();
   ```

     
    <hr>

## Program:

1. ### Define the types in typescript for the given following JavaScript code.

   Todo:

   - Define type/interface for a single Todo object.
   - Define type for each function.
   - Do not use `any` (TS Data Type) type of typescript.

   Code(Js):

```js
   var todos = [];
   function add(name, description) {
     return todos.push({ name: name, description: description, done: false });
   }
   function remove(index) {
     return todos.splice(index, 1);
   }
   function list() {
     todos.forEach(function (todo, index) {
       console.log(index + " -" + todo.name);
     });
   }
   function update(index, name, description) {
     todos[index].name = name;
     todos[index].description = description;
     return todos[index];
   }
   ```
   Solution :
   
```ts
   class Himanshu {
     name: string;
     description: string;
     done: boolean;
   }

   var todos: Himanshu[] = [];

   function add(name: string, description: string): number {
     return todos.push({
       name: name,
       description: description,
       done: false,
     });
   }

   function remove(index: number): Himanshu[] {
     return todos.splice(index, 1);
   }

   function elelist(): void {
     todos.forEach(function (todo: Himanshu, index: number) {
       console.log(index + " - " + todo.name);
     });
   }

   function update(index: number, name: string, description: string): Himanshu {
     todos[index].name = name;
     todos[index].description = description;
     return todos[index];
   }

   console.log(add("Hii", "My name is Himanshu Patni"));        // 1
   elelist();        // 0 - Go to College
```
