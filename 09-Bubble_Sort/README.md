# Bubble Sort

## Introduction to Sorting Algorithms

### What is sorting? 

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order

e.g.
- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

```js
function sort(arr){
    return arr //where array is sorted
}

sort([23,45,6,12,13]) //[6,12,13,23,45]
```

### Why do need to learn this?
- Sorting is an incredibly common task, so it's good to know how it works. 
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages
- CLASSIC INTERVIEW TOPIC

## Objectives
- Implement bubble sort
- Implement selection sort
- Implement insertion sort
- Understand why it is important to learn these simpler sorting algorithms

<hr>

## Telling JS how to sort
- The built in sort method accepts an optional comparator function 
- You can use this comparator function to tell JavaScript how you want it to sort
- The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
    - If it return a negative number, a should come before b 

e.g.

```js
function numberCompare(num1, num2){
    return num1-num2
}

[6,4,15,19].sort(numberCompare) //[4,6,15,19]
```

<hr>

## BubbleSort
A sorting algorithm where the largest values bubble up to the top.

[Resource to see sorting algorithms](visualgo.net)

### How we swap 
Many sorting 

```js
function swap(arr, i1, i2){
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

```

### Bubble Sort Psuedocode
- Start looping from the end of the array towards the beginning with a variable called i
- Start an inner loop with a variable called j from the beginning until i-1
- If arr[j] is greater than arr[j+1], swap those two values
- Return the sorted array

## Naive way
```js
function bubbleSort(arr){
    for (let i = 0; i< arr.length; i++){
        for (let j = 0; j < arr.length;j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([37,45,29,8]) //[8,29,37,45]
```
We would be performing unneccessary comparisons in this Naive way


## Better Way
```js
function bubbleSort(arr){
    for (let i = arr.length; i > 0; i--){
        for (let j = 0; j < i-1 ; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([37,45,29,8]) //[8,29,37,45]
```

<hr>

## Optimization 

What if we use bubbleSort with a nearly sorted array?

```js
function bubbleSort(arr){
    let noSwaps;
    for (let i = arr.length; i > 0; i--){
        noSwaps = true;
        for (let j = 0; j < i-1 ; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false; 
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

bubbleSort([37,45,29,8]) //[8,29,37,45]
```

<hr>

## Big O Complexity

**O(n<sup>2</sup>)**