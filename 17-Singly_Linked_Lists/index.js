console.log("hello")

// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length += 1;
        return this;
    }
    pop(){
        if (this.length === 0){
            return undefined
        }

        let current = this.head;
        let secondToLast = this.head;
        while (current.next){
            if (current === this.head){
                current = current.next
            } else{
                secondToLast = current;
                current = current.next;
            }
        }
        secondToLast.next = null;
        this.tail = secondToLast;
        this.length--;
        return current;
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
console.log(list.pop())
console.log(list)