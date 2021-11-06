//================================================================
// power
//================================================================
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents. 

const power = (base, exp) =>{
    if (exp === 0) return 1;
    return base*power(base, exp-1)
}

// console.log(power(2,0)) // 1
// console.log(power(2,2)) // 4
// console.log(power(2,4)) // 16



//================================================================
// factorial
//================================================================
// Write a function **factorial** which accepts a number and returns the factorial of that number.

const factorial = (num) =>{
    if (num === 0) return 1
    return num * factorial(num-1)
}

// console.log(factorial(1)) // 1
// console.log(factorial(2)) // 2
// console.log(factorial(4)) // 24
// console.log(factorial(7)) // 5040


//================================================================
// productOfArray
//================================================================
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all. 

const productOfArray = (arr) =>{
    if (arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1))
}

// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60



//================================================================
// recursiveRange
//================================================================
// Write a function called **recursiveRange** which accepts a number and adds up all the numbers from 0 to the number passed to the function.

const recursiveRange = (num) =>{
    if (num === 0) return 0;
    return num + recursiveRange(num-1)
}

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55



//================================================================
// fib
//================================================================
// Write a recursive function called **fib** which accepts anumber and returns the *n*th number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8 ... which starts with1 and 1, and where every number thereafter is squal to the sum of the previous two numbers. 


const fib = (num) =>{
    if (num <= 2) return 1;
    return fib(num-1) + fib(num-2);
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) //9227465



