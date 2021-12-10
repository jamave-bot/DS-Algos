# Doubly Linked Lists

## Introduction

## Objectives
- Construct a doubly linked list
- Compare and contrast doubly and singly linked lists
- Implement basic operations on a doubly linked list

**Almost** identical to singly linked lists, except every node has another **pointer**, to the **previous** node!

![doubly linked list](./1.jpg)

## Comparisons with Singly Linked Lists
More memory === More Flexibility 

---

## Setting up our Node Class

### Node has:
- val
- next
- prev (**new**)

### DoublyLinkedList has (unchanged):
- head
- tail
- length


```js
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
```

---

