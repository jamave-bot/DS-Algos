# Merge Sort

More challenging, less intuitive, but much faster than the other algorithms. 

## Objectives
- Understand the limitations of the sorting algorithms we've learned
- Implement merge sort
- Implement quick sort
- Implement radix sort

## Why learn this?
- The sorting algorithms we've learned so far don't scale well
- Try out bubble sort on 100000 elements, it will take way too long

## Faster Sorts
- There is a family of sorting algorithms that can improve time complexity from O(*n*<sup>2</sup>) to O(*n*log*n*)
- There's a tradeoff between efficiency and simplicity
- The more efficient algorithms are much less simple, and generally take longer to understand

---

## Merge Sort: Introduction

- It's a combination of two things - merging and sorting!
- Exploits the fact that arrays or 0 or 1 element are always sorted
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array


## How does it work?

```js
[8,3,5,4,7,6,1,2]
```
with these 8 elements, we split this array in half, giving us 2 arrays of 4 elements

We keep splitting until we get arrays of 0 or 1 elements, then we merge the arrays until we get our original length back

---

## Merging Arrays Intro

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all the elements in the two input arrays
- This function should run in O(n+m) time and O(n+m) space and **should not** modify the parameters passed to it. 

## Psuedocode

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't look at...
    - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array 
    - Once we exhause one array, push in all remaining values from the other array

---

## Merging Arrays: Implementation

This is just the helper function to merge 2 already sorted arrays to return 1 sorted array 

```js
// Merges two already sorted arrays
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){ // while there are still elements to check
        if(arr2[j] > arr1[i]){ //checking each element in both arrays
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }

    //after the first while loop, if there are still elements in either array, these next while loops push the rest of the elements from the array
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

merge([100,200], [1,2,3,5,6])
```

---

## Writing Merge Sort Part 1

## mergeSort Pseudocode
- Break up the array into halves until you have arrays that are empty or have one element
- Once you have the smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged (and sorted!) array
 
---

## Writing Merge Sort Part 2

```js
// Merge function from earlier
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([10,24,76,73])
```

--- 


## Big O of mergeSort

| Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
|-|-|-|-| 
| O(nlogn) | O(nlogn) | O(nlogn) | O(n) |

