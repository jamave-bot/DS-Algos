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
    if (arr.length === 0) return false;

    let start = 0;
    let end = arr.length-1;

    while (start < end){
        if ((arr[start] + arr[end])/2 === avg){
            return true;
        } else if ((arr[start] + arr[end])/2 > avg){
            end--;
        } else if ((arr[start] + arr[end])/2 < avg){
            start++;
        }
    }

    return false; 
}


// console.log(averagePair([1,2,3], 2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19], 8)) // true
// console.log(averagePair([-1, 0, 3, 4,5,6], 4.1)) // false
// console.log(averagePair([], 4)) // false


// =======================================================
// isSubsequence
// =======================================================
// Write a function called **isSubsequence** which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, **without their order changing**. 

const isSubsequence = (str1, str2) =>{
    let index1 = 0;
    let index2 = 0;

    while (index2 < str2.length){
        if (str2[index2] === str1[index1]){
            index1++;
        }
        
        if (index1 === str1.length){
            return true;
        }

        index2++;
    }
    return false;
}

// console.log(isSubsequence('hello', 'hello world')) // true
// console.log(isSubsequence('sing', 'sting') ) // true
// console.log(isSubsequence('abc', 'abracadabra')) // true
// console.log(isSubsequence('abc', 'acb')) // false


// =======================================================
// maxSubarraySum
// =======================================================
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. 

const maxSubarraySum = (arr, num) => {
    if (num > arr.length) return null;

    let total = 0;

    for (let i = 0; i < num; i++){
        total += arr[i]
    }

    let temp = total;

    for (let i = num; i < arr.length; i++){
        temp += arr[i] - arr[i-num]
        // console.log("this is temp: ", temp)
        total = Math.max(total, temp)
    }
    return total
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)) // 39
// console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)) // 5
// console.log(maxSubarraySum([2,3], 3)) // null