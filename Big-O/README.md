# BIG O
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


# Big O for real
Big O Notation is a way to formalize fuzzy counting

How the runtime of an algorithm grows as the input gros

We Say the an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n) as n increases

- f(n) could be linear 
- f(n) could be quadratic
- f(n) could be constant
- f(n) could be entirely different

```js
function addUpTo(n){
    return n * (n+1) / 2;
}
```
- Always 3 operations
    - **O(1)**

```js
function addUpTo(n){
    let total = 0;
    for (let i =1; i <= n; i++){
        total += 1;
    }
    return total;
}
```
- Number of operations is (eventually) bounded by a multiple of n, say 10n
    - **O(n)**

```js
function printAllPairs(n){
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){\
            console.log(i, j);
        }
    }
}
```
- We have a nested loop
- O(n) inside an O(n)
    - **O(n)<sup>2</sup>**


## Simplifying Big O expressions

These rules are consequences of the rules of Big O

- Constants don't matter
    - Instead of O(2n), we just say O(n)
    - Instead of O(500), we say O(1)
    - Instead of O(13n)<sup>2</sup> we say O(n)<sup>2</sup>

- Smaller Terms don't matter
    - O(n+10) -> O(n)
    - O(1000n + 50) -> O(n)
    - O(n<sup>2</sup> + 5n + 8) -> O(n)<sup>2</sup>

## Big O Shorthands
1) Arithmetic operations are constant
2) Variable assignment is constant
3) Accessing elements in an array (by index) or object (by key) is constant
4) In a loop, the complexity is the length of the loop times the complexity of whatever happens in the other loop


# Space Complexity

## What about the inputs?

- Auxiliary space complexity is the space required by the algorithm, not including space taken up by the inputs. 

## Rules of Thumb
- Most primitive data types are constant space (bool, numbers, undefined, null)
- Strings require O(n) space where n is the string length
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

```js
function sum(arr){
    let total = 0;
    for (let i = 0; i< arr.length; i++){
        total += arr[i]
    }
    return total;
}
```

- two numbers: total, i
- we only have those two variables that exist no matter what. 
- O(1) space

```js
function double(arr){
    let newArr = [];
    for (let i = 0; i< arr.length; i++){
        newArr.push(2* arr[i]);
    }
    return newArr;
}
```
- O(n) space since the elements in the array are dependent on the incoming arr variable. 
