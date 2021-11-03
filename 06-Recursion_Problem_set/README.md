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

