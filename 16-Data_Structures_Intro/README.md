# Intro to Data Structures

## Which Data Structure is the Best?

![data structures](./data_structures.jpg)

## What do they do?
Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data

## Why so many? 
Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used. 

## Why care?
The more time you spend as a developer, the more likely you'll need to use one of these data structures

We've already worked with many of them unknowingly!

## They all excel in different situations 

> e.g. Working with map/location data? 

Use a **graph**!

> Need an ordered list with fast inserts/removals at the beginning and end?

Use a **linked list**!

> Web scraping nested HTML?

Use a **tree**!

> Need to write a scheduler?

Use a **binary heap**!

---

## ES2015 Class Syntax Overview

## Objectives
- Explain what a class is
- Understand how JavaScript implements the idea of classes
- Define terms like abstraction, encapsulation and polymorphism
- Use ES2015 classes to implement data structures

## What is a class?
A blueprint for creating objects with pre-defined properties and methods

## Why do we need to learn this?
We're going to implement data structures as classes

---

## The Class Keyword

## The syntax

```js
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);
```
- The method to create new objects **must** be called constructor
- The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well

## Creating objects from classes
we use the **new** keyword


---

## Adding Instance Methods

Instance methods are called on the instance of a class

```js
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`; // the "this" refers to the INSTANCE we're calling it on
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }  
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);
```

---

## Adding Class Methods

Uses **static** keyword before the function definiton

Allows us to define methods pertinent to the classes but not the instances of a class

Not that common

### The **static** keyword defines a static method for a class. Static methods are called without instantiating their class and cannot be called through a class instance. Static methods are often used to create utility functions for an application

```js
class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }
    static EnrollStudents(){
        return "ENROLLING STUDENTS!"
    }
    
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);
```


```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

## How we'll be using classes

```js
class DataStructure(){
    constructor(){
        // what default properties should it have?
    }
    someInstanceMethod(){
        // what should each object created from this class be able to do?
    }
}
```

We will be using the **constructor** and **instance methods** quite a bit

We will almost **never** be using **static** methods

## One gotcha with 'this'
Inside all of our **instance** methods and **constructor**, the keyword 'this' refers to the object created from that class (also known as an **instance**)

## Recap
- Classes are blueprints that when created make objects known as **instances**
- Classes are created with the **new** keyword
- The **constructor** function is a special function that gets run when the class is instantiated
- Instance methods can be added to classes similar to methods in objects
- Class methods can be added using the **static** keyword