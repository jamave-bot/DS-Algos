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

    shift(){
        if(this.length ===0) return undefined;
        let head = this.head;
        this.head = this.head.next;
        this.length--;
        return head;
    }

    unshift(value){
        let newHead = new Node(value);
        if (!this.head){
            this.head = newHead;
            this.tail = this.head;
        } else{
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    get(index){
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head
        while (counter < index){
            current = current.next;
            counter++
        }
        return current;
    }

    set(value, index){
        let node = this.get(index);
        if (node){
            node.value = value;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
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
// console.log(list.pop())
list.unshift("YO!")
// console.log(list)

console.log(list.get(3))