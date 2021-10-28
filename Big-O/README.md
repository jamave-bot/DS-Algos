# BIG-O
- Time complexity/space complexity
- Bit of math with logarithms

## Why big o?
 - Multiple ways to solve a problem, we want to find the best way. 
    + "Write a function that accepts a string input and returns a reversed copy" 
- It's important to have a precise vocabulary to talk about how our code performs.
- Useful for discussing trade-offs between different approaches.
- It's important to identify parts of your code that are inefficient 
- INTERVIEWS 

### Write a function that calculates the sum of all numbers from 1 up to (and including) some number *n*
```js
function addUpTo(n){
    let total = 0;
    for (let i =1; i <= n; i++){
        total += 1;
    }
    return total;
}
```

```js
function addUpTo(n){
    return n * (n+1) / 2;
}
```

#### So which one is better?
- What does better MEAN
    + Faster?
    + Less memory intensive?
    + More readable? 
- It's the first 2 lmao

### The Problem with Time
- Diff machines will record diff times
- The *same* machine could record diff times
- For fast algorithms, speed measurements may not be precise enough

### If not Time, then what?
- Rather than counting seconds, which are so variable, we count the number of simple operations the computer has to perform.

### Counting Operations? 

```js
function addUpTo(n){
    return n * (n+1) / 2;
}
```
- We have 
    - 1 multiplication
    - 1 addition
    - 1 division


```js
function addUpTo(n){
    let total = 0;
    for (let i =1; i <= n; i++){
        total += 1;
    }
    return total;
}
```
- We have 
    - A GODDAMN LOOP 🚨🚨🚨🚨
    - *n* additions
    - *n* assignments
    - *n* comparisons 
    - It scales with *n*


