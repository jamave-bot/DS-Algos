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

## Push
Adding a node to the **end** of the Doubly Linked List

## Pseudocode
- Create a new node with the value passed to the function
- If the head property is null, set the head and tail to be the newly created node
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to be the tail
- Set the tail to be the newly created node
- Increment the length
- Return the Doubly Linked List

---

## Push Solution

(my attempts will be in index.js)

```js
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}
```

---


