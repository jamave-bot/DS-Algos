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