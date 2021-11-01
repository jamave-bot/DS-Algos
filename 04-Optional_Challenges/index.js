// =======================================================
// sameFrequency
// =======================================================

// Write a function called **sameFrequency**. Given two positve integers, find out if the two numbers have the same frequency of digits.
// Your solution must have a time complexity of O(n)
const sameFrequency = (num1, num2) =>{
    if (num1.toString().length !== num2.toString().length){
        return false;
    }

    let counter = {};

    for (let i = 0; i < num1.toString().length; i++){
        let digit = num1.toString()[i];
        counter[digit] ? counter[digit] += 1 : counter[digit] = 1;
    }

    for (let i = 0; i < num2.toString().length; i++){
        let digit = num2.toString()[i];
        if (!counter[digit]){
            return false;
        } else {
            counter[digit] -= 1;
        }
    }
    return true; 
}

// Time - O(n)
// Space - O(n)

// console.log(sameFrequency(182, 281))
// console.log(sameFrequency(34, 14))
// console.log(sameFrequency(3589578, 5879385))
// console.log(sameFrequency(22, 222))

// =======================================================
// areThereDuplicates
// =======================================================

// Implement a function called, **areThereDuplicates** which accepts a **variable number of arguments**, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

const areThereDuplicates = (...args) =>{
    let counter = {};

    for (let i = 0; i < args.length; i++){
        counter[args[i]] ? counter[args[i]] += 1 : counter[args[i]] = 1; 
    }

    for (let key in counter){
        if (counter[key] > 1){
            return true;
        }
    }

    return false;
}

// Time - O(n)
// Space - O(n)

// console.log(areThereDuplicates(1,2,3)) // false
// console.log(areThereDuplicates(1,2,2) ) // true
// console.log(areThereDuplicates('a','b','c','a')) //true


// =======================================================
// averagePair
// =======================================================
// Write a function called **averagePair**. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target. 


const averagePair = (arr, avg) =>{

}