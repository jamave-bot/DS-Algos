# Problem Solving Approach 

## Algorithms and Problem Solving Patterns

## Objectives
- Define what an algorithm is 
- Devise a plan to solve algorithms
- Compare and contrast problem solving patterns

<hr>

## What is an algorithm?
A **process** or **set of steps** to accomplish a certain task

## Why do I need to know this?
- Almost **everything** that you do in programming involves some kind of algorithm.
- It's the foundation for being a successful problem solving and development
- **Interviews**

## How do you improve?
1) **Devise** a plan for solving problems
2) **Master** common problem solving patterns

## Problem Solving
- Understand the Problem
- Explore Concrete Examples
- Break it Down
- Solve/Simplify
- Look Back and Refactor

<hr>

# Understand the Problem
1) Can I restate the problem in my own words?
2) What are the inputs that go into the problem?
3) What are the outputs that should come from the solution to the problem?
4) Can the outputs be determined from the inputs? Do I have enough enough information to solve the problem?
5) How should I label the important pieces of data that are part of the problem?

eg. **Write a function which takes two numbers and returns their sum**

1) Can I restate the problem in my own words?
    - implement addition
2) What are the inputs that go into the problem?
    - consider all amounts of inputs
3) What are the outputs that should come from the solution to the problem?
    - consider if it should be a number/float/string
4) Can the outputs be determined from the inputs? Do I have enough enough information to solve the problem?
    - What happens if someone only passes in one number? Do we return null? We should ask the interviewer for clarification
5) How should I label the important pieces of data that are part of the problem?
    - What matters in this problem? num1/num2? sum?

<hr>

# Concrete Examples

Coming up with examples can help you understand the problem better

Examples also provide sanity checks that your eventual solution works how it should

User Stories! Unit Tests! 

## Explore Examples 
- Start with Simple Examples
    - Write down the input and output
- Progress to more complex examples
- Explore examples with empty inputs
- Explore examples with invalid inputs

e.g. **Write a function which takes in a string and returns counts of each character in the string**

```js
charCount("aaaa"); //{a:4}
charCount("hello"); //{h:1, e:1, l:2, o:1}
```

- Start thinking about the output we want
- Think about other possible complex inputs, like numbers or capital letters
```js
charCount("my phone number is 12345")
```
- What if the user passes in nothing or null or an object?

<hr>

# Break it Down

Explicitly write out the steps you need to take

This forces you to think about your code before you actually write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details. 

e.g. **Write a function which takes in a string and returns counts of each character in the string** (the same one as before)


The interviewer has specified we only want alphanumerical lowercase values. 
```js
function charCount(str){
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string
}
```

```js
function charCount(str){
    // make object to return it at end
    // loop over string, for each character....
        // if the char is a number/letter AND if the char is a key in object, add one to count
        // if the char is a number/letter AND if the char is not in object, add it and set value to 1
        // if the character is something else, (space,period, etc..) don't do anything
    // return the object at the end
}
```

