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

<hr>

## How recursive functions work
Invoke the **same** function with a different input until you reach your base case

## Base Case
- The condition when the recursion ends.
- **This is the most important concept** 

## Two essential parts of a recursive function
1) Base Case
1) Different Input

## Our first recursive function

```js
function countDown(num){
    if (num <= 0){//base case
        console.log("Add done!")
        return;
    }
    console.log(num);
    num--;
    countDown(num) // recursive call
}
```
<hr>

## Our second recursive function

```js
function sumRange(num){
    if (num === 1) return 1; //base case
    return num + sumRange(num-1); // recursive call
}

sumRange(3)
    // return 3 + sumRange(2)
                    //return 2 + sumRange(1)
                                    // return 1
```

<hr>

## Writing Factorial Recursively

> e.g. Write a function to find the value of a factorial recursively

## Non recursive (iterative):
```js
function factorial(num){
    let total = i;
    for (let i = num; i > 1; i--){
        total *= i;
    }
    return total;
}
```

## **Recursive:**
```js
function factorial(num){
    if (num === 1) return 1;
    return num * factorial(num - 1)
}

factorial(3)
// 3 * factorial(2)
        // 2 * factorial(1)
                // 1
```

<hr>

## Common Recursion Pitfalls
- No base case (or it's wrong)
- Forgetting to return (or returning the wrong thing)
- Stack Overflow!!

<hr>

## Helper Method Recursion

```js
function outer(input){
    let outerScopedVariable = [];

    function helper(helperInput){
        // modify the outer scoped variable
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable
}
```

Another example:

```js
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) { //base case
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0]) // pushes into the result array
        }
        
        helper(helperInput.slice(1)) //recursive call
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])
```

## Pure Recursion 
- Function is 100% self contained
    - No helper function

```js
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
//[1].concat(collectOddValues([2,3,4,5]))
            // [].concat(collectOddValues([3,4,5]))
                            // [].concat(collectOddValues([4,5]))
                                        // [].concat(collectOddValues([5]))
                                                    // [].concat(collectOddValues([]))
                                                                    // []
```

## Pure Recursion Tips
- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.
- Remember that string are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- To make copies of objects use Object.assign, or the spread operator

<hr>