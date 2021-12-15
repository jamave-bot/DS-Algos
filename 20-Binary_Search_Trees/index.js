class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if (this.root === null){
            this.root = newNode;
            return this;
        } else{
            let checkNode = this.root;
            while (true){
                if (value === checkNode.value) return undefined
                if (checkNode.value < value){
                    if (checkNode.right === null){
                        checkNode.right = newNode;
                        return this;
                    } 
                    checkNode = checkNode.right;
                    
                } else if (checkNode.value > value) {
                    if (checkNode.left === null){
                        checkNode.left = newNode;
                        return this;
                    } 
                    checkNode = checkNode.left;
                }
            }
        }
    }

    find(value){
        if (this.root === null) return false;

        let checkNode = this.root;
        let found = false;
        while (checkNode && !found){
            // if (checkNode.value === value) return checkNode;
            if (value < checkNode.value){
                checkNode = checkNode.left;
            } else if (value > checkNode.value){
                checkNode = checkNode.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }

}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);