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

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040

