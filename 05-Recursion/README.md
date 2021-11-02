# Recursion

## Objectives

- Define what recursion is and how it can be useful
- Understand the two essential components of a recursive function
- Visualize the call stack to better debug and understand recursive functions
- Use helper method recursion and pure recursion to solve more difficult problems

## What is recursion? 
A **process** (a function in our case) that **calls itself**

## Why use it?
- It's everywhere:
    - JSON.parse / JSON.stringify
    - document.getElementById and DOM traversal algorithms
- Object traversal
- We will see it with more complex data structures
- It's sometimes a cleaner alternative to iteration
<hr>

## The Call Stack

In almost all program languages, there is a built in data structiure that manages when happens when functions are invoked. 

It's named the call stack

- It's a **stack** data structure - we'll talk about that later
- Any time a function is invoked it is placed (**pushed**) on the top of the call stack
- When JavaScript sees the return keyword or when the function ends, the compiler will remove (**pop**)

## Why do I care?
- You're used to functions being pushed on the call stack and popped off when they're done
- When we write recursive functions, we keep pushing new functions onto the call stack