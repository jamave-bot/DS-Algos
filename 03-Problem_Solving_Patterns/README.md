# Problem Solving Patterns

## How do you improve?
1) **Devise** a plan for solving problems
1) **Master** common problem solving patterns

## Some Patterns
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conquer
- Dynamic Programming
- Greedy Algorithms
- Backtracking
- **Many more**

<hr>

# Frequency Counters

This pattern uses objects or sets to collect values/frequencies of values

This can ofen avoid the need for nested loops or O(n<sup>2</sup>) operations with arrays/strings

> e.g. Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

```js
same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
```

This is a **naive** way to solve it:
```js
function same(arr1, arr2){
    if(arr.length != arr2.length){
        return false; // if the arrays don't have the same length, then already it's false
    }
    for (let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr[i] ** 2) // finds the index of the square value of arr[i]
        if (correctIndex === -1){ // if the index is not found it returns -1
            return false; // if the element isn't there we return false
        }
        arr2.splice(correctIndex, 1) //if the element was found we remove the element from arr2
    }
    return true // if we haven't returned false by here, then it has to be true
}
```

This would give us a quadratic relationship in terms of time complexity, which is what we try to avoid

Refactored: 
```js
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){ //return false if the square of the key in counter1 isn't a key in counter2
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){ //return false if the values(the amount of times they occur in each array) are not the same for each key
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])

```

This would give us a time complexity of O(n), we don't need to have nested loops or searches 

<hr>

## Anagrams

This should be a perfect use case for a frequency counter

> Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as *cinema*, formed from *iceman*. 

```js
validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
```
## (my solution in index.js)

## Colt's Solution: 
```js
function validAnagram(first, second){
    if (first.length !== second.length){
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++){
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++){
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true
}
```
<hr>

## Multiple Pointers

Creating **pointers** or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.

**Very** efficient for solving problems with minimal space complexity as well

> Write a function called **sumZero** which accepts a **sorted** array of integers. The function should find the **first** pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist. 

```js
sumZero([-3,-2,-1, 0, 1,2,3]) // [-3,3]
sumZero([-2, 0, 1,3]) // undefined
sumZero([1,2,3]) // undefined
```

## Naive Solution: 

```js
function sumZero(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}
```

This would give us a **Time Complexity of O(n<sup>2</sup>)**

And a **Space Complexity of O(1)**

## Refactored Solution

```js
function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while (left < right){
        let sum = arr[left] + arr[right];
        if (sum === 0){
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }
}
```

This would give a **Time Complexity of O(n)**

<hr>

> Implement a function called countUniqueValues, which accepts a sorted array. There can be negative numbers in the array, but it will always be sorted. 

```js
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7 
countUniqueValues([]) //0
countUniqueValues([-2, -1, -1, 0, 1]) // 4
```

(My solution in index.js)

## Colt's Solution: 

```js
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
```
<hr>

## Sliding Window Pattern

This pattern involves creating a **window** which can either be an array or number from one position to another

Depending on certain conditions, the window either increases or closes (and a new window is created)

Very useful for keeping track of a subset of data in an array/string etc

> e.g. Write a function called maxSubarraySum which accepts an array of integers and a number called **n**. the function should calculate the maximum sum of **n** consecutive elements in the array. 

```js
maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
maxSubarraySum([4,2,1,6], 1) // 6
maxSubarraySum([4,2,1,6,2], 4) // 13
maxSubarraySum([], 4) // null
```

## Naive Solution: 

```js
function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
```

This has a time complexity of O(n<sup>2</sup>)

## Refactored Solution: 

```js
function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]; // basically, we're subtracting the value at the previous index(arr[i - num]) while adding the value from the next index (arr[i])
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```
Time complexity of O(n) (linear complexity)

<hr>

## Divide and Conquer Pattern



