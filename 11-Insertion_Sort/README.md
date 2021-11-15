# Insertion Sort

## Introduction

- Builds up the sort by gradually creating a larger left half which is always sorted

## Psuedocode
- Start by picking the second element in the array
- Now compare the second elements with the one before it and swap if necessary
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place. 
- Repeat until the arry is sorted

<hr>

## Implementation

```js
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])
```

<hr>

## Big O Complexity

**O(n<sup>2</sup>)** unless our data is nearly sorted