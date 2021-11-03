# Recursion Problem Set

(My solutions/attemps in index.js)

## power

> Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents. 

```js
power(2,0) // 1
power(2,2) // 4
power(2,4) // 16
```

## Colt's Solution: 
```js
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}
```

<hr>

## factorial

> Write a function **factorial** which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all integers below it; e.g. factorial (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. **factorial zero (0!) is always 1**. 

```js
factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040
```

## Colt's Solution: 

```js
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
```

<hr>

## productOfArray

> Write a function called productOfArray which takes in an array of numbers and returns the product of them all. 

```js
productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60
```

## Colt's Solution: 

```js
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
```

<hr>

## Recursive Range

> Write a function called **recursiveRange** which accepts a number and adds up all the numbers from 0 to the number passed to the function.

```js
recursiveRange(6) // 21
recursiveRange(10) // 55 
```

## Colt's Solution: 

```js
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
```

<hr>

## fib

> Write a recursive function called **fib** which accepts a number and returns the *n*th number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8 ... which starts with1 and 1, and where every number thereafter is squal to the sum of the previous two numbers. 

```js
fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465
```

## Colt's Solution: 

```js
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
```