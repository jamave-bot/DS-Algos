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