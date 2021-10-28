# Analyzing Performance of Arrays and Objects

-and built-in methods

## Objectives
- Understand how objects and arrays work through the lens of Big O
- Explain why adding elements to the beginning of an array is costly
- Compare and contrast the runtime for arrays and objects, as well as built-in methods
<hr>

## Objects
Unordered, key value pairs

```js
let instructors = {
    firstName: "Kelly",
    isInstructor: true,
    favNums: [1,2,3,4]
}
```

### When to use objects
- When you don't need order
- When you need fast access/removal

## Big O of objects
- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(1)

## Big O of Object Methods
- Object.keys - O(n)
- Object.values - O(n)
- Object.entries - O(n)
- hasOwnProperty = O(1)
    - This method just checks if an object has a certain key


<hr>

## Arrays

Ordered lists!

```js
let names = ["Mo", "Leon", "Jason"]

let values = [true, {}, "no"]
```

### When to use arrays
- When you need order
- When you need fast access/insertion and removal (sort of...)


## Big O of Arrays
- Insertion - it depends
- Removal - it depends
- Searching - O(n)
- Access - O(1)


Adding/Removing an element to the beginning of an array would mean that javascript would have to redo every index in the array. 

.push and .pop always faster than .shift/.unshift

Most Array methods are O(n) besides .sort which is O(N*logN), push and pop are O(1)
