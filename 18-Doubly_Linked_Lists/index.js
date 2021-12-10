// All my attempts in this file


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


    push(value){
        let newNode = new Node(value);
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if (!this.head) return undefined;
        let currentTail = this.tail;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = currentTail.prev
            this.tail.next = null;
            currentTail.prev = null;
        }
        this.length--; //forgot to add this
        return currentTail;
    }

    shift(){
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            oldHead.next = null;
            this.head.prev = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(value){
        let newHead = new Node(value);
        if (this.length === 0){
            this.head = newHead;
            this.tail = newHead;
        } else{
            this.head.prev = newHead;
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }
}