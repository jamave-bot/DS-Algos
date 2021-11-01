# Optional Challenges

## Frequency Counter - sameFrequency 

> Write a function called **sameFrequency**. Given two positve integers, find out if the two numbers have the same frequency of digits.
Your solution must have a time complexity of O(n)

```js
sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false
```
(My attempt in index.js)

## Colt's solution: 

<hr>

## Frequency Counter/ Multiple Pointers 

> Implement a function called, **areThereDuplicates** which accepts a **variable number of arguments**, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

> Restrictions: Time - O(n)/ Space - O(n)

> Bonus: Time - O(nlogn) / Space - O(1)  

[StackOverflow variable number of arguments](https://stackoverflow.com/questions/2141520/javascript-variable-number-of-arguments-to-function)

Basically use the .arguments objects

```js
areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true 
areThereDuplicates('a','b','c','a') // true  
```

