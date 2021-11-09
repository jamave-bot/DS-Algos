# Searching Algorithms

## Intro to Searching

## Searching Algorithms

Basically how we can search across arrays and strings

### Objectives
- Describe what a searching algorithm is
- Implement linear search on arrays
- Implement binary search on sorted arrays
- Implement a naive string searching algorithm
- Implement the KMP string searching algorithm

<hr>

## How Do We Search?

Assume we have an array of strings (the U.S. states)

## Linear Search

Let's search for 12: 

```js
[5,8,1,100,12,3,12]
```

## Linear Search Psuedo code
- This function accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

```js
function linearSearch(arr,val){
  for (let i = 0; i < arr.length; i++){
      if (arr[i] === val){
          return i
      }
  }
  return -1;
}
```
Time Complexity: O(n) as the array grows

## Linear Search Big O

O(1) Best
O(n) Average
O(n) Worst

<hr>

## Binary Search
- A much faster form of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Binary search only works on *sorted* arrays, whether it be alphabetically or numerically, anything

## Divide and Conquer
**Remember the array HAS to be sorted**

e.g. Let's search for 15

```js
[1,3,4,6,8,9,11,12,15,16,17,18,19]
```
- We'd look at 11 as a pivot, if it's <15 then we only check the elements on the right
- We find another pivot and do another check
- We keep going until we find the element we're looking for

## Binary Search Psuedocode
- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer:
    - Create a pointer in the middle
    - If it's the value, return the index
    - If the value is too small, move the left pointer up
    - If it's too large, move the right pointer down
- If you never find the value, return -1

```js
function binarySearch(array, val){
    let min = 0;
    let max = array.length - 1;

    while (min <= max){
        let middle = Math.floor((min + max) / 2)
        let currentElement = array[middle]

        if(array[middle] < val){
            min = middle + 1; 
        }
        else if (array[middle] > val){
            max = middle - 1;
        }
        else{
            return middle;
        }
    }

    return -1;
}
```
