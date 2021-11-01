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

```js
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}
```

<hr>

## Frequency Counter/ Multiple Pointers 

> Implement a function called, **areThereDuplicates** which accepts a **variable number of arguments**, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

> Restrictions: Time - O(n)/ Space - O(n)

> Bonus: Time - O(nlogn) / Space - O(1)  

[StackOverflow variable number of arguments](https://stackoverflow.com/questions/2141520/javascript-variable-number-of-arguments-to-function)

Basically use the ...[variable name] to spread the arguments in an array

```js
areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true 
areThereDuplicates('a','b','c','a') // true  
```

## Colt's Solution(s):

## Frequency Counter: 

```js
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}
```

## Multiple Pointers:
```js
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false
}
```

## One liner solution:

```js
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length; // a set doesn't have duplicate values
}
```