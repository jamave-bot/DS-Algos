# Selection Sort

## Introduction

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position. 

We could re use the swap code from bubble sort

## Psuedocode
- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find a smaller number
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted

<hr>

## Implementation

```js
function selectionSort(arr){
    for (let i = 0; i < arr.length; i++){
        let lowest = i; // we only want the index of the lowest value
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        // this is where we swap our values
        if (i !== lowest){ // if it didn't change, don't swap
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
    return arr; 
}

selectionSort([34,22,10,19,17]) // [10,17,19,22,34]
```
<hr>

## Big O Complexity

**O(n<sup>2</sup>)**

We're still comparing each value through a nested loop


