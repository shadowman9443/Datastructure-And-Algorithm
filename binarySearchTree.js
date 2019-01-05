class Node {
    constructor(value){
        this.value = value ;
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
        if(this.root === null){
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            while(true){
                if(value === current.value) return undefined;
                if(value <current.value){
                    if(current.left === null){
                        current.left = newNode
                    }else{
                        current = current.left;
                    }
                }else if(value >current.value){
                    if(current.right === null){
                        current.right = newNode
                    }else{
                        current = current.right;
                    }
                }
            }
        }
       
    }
    find(value){
        if(this.root === null){
            return false;
        }
        let current = this.root;
        let found = false ;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                found = true;
            }
        }
        if(!found) return undefined;
        return current ;

    }
    BFS(){
        let node = this.root,
            data = [],
            queue = [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(12);
bst.insert(9);
bst.insert(13);
bst.insert(8);
console.log(bst);
console.log("**************");
console.log(bst.BFS());