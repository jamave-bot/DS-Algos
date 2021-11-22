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