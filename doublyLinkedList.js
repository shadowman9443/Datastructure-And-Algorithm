class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
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
    pop() {
        if (!this.head) {
            return undefined;
        }
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        }
        this.length--;
        return this;

    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = temp.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return this;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        let count = 0;
        let current = null;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count != index) {
                current = current.next;
                count++;
            }

        } else {
            count = this.length - 1;
            current = this.tail;
            while (count != index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index,val){
        let current = this.get(index);
        if(current != null){
            current.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if(index == 0 ){
            this.unshift(val);
        }else if(index == this.length){
            this.push(val);
        }else{
            let beforeNode = get(index-1);
            let afterNode = beforeNode.next;
            let newNode = new Node(val);
            beforeNode.next = newNode;
            newNode.next = afterNode;
            newNode.prev = beforeNode;
            afterNode.prev = newNode;
            this.length++;
        }
        return this;

    }
    remove(index){
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if(index == 0 ){
            this.shift();
        }else if(index == this.length-1){
            this.pop();
        }else{
            let current = get(index);
            let beforeCur = current.prev;
            let afterCur= current.next;
            afterCur.prev = current.prev;
            beforeCur.next = current.next;
            current.next = null;
            current.prev = null ;
            this.length--;
        }
        return this;
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list);
console.log('**********');
console.log(list.get(2));