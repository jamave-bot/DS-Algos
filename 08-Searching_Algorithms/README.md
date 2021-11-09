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

<hr>
