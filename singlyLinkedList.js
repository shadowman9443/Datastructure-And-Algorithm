class Node {
    constructor(value) {
        this.value = value;
        this.next = null;

    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        // console.log(this);
        this;

    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;

    }
    unshift(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
           
            
            newNode.next = this.head;
            this.head = newNode;
          
            
        }
        this.length++;
      //  console.log(this);
        return this;
    }

    get(index){
        if(index <0 || index>= this.length) return undefined;
        let count = 0;
        
        let desired=this.head;
        while(count <= index){
            desired=desired.next;
            count++;
        }
        return desired;
    }

    set(index, value){
       if(value == null || value == undefined) return undefined;
       let desired = this.get(index);
       if(desired){
         desired.value = value;
         return false ;
       }
       return false ;
    }
    insert(index, value){
        if(value == null || value == undefined) return undefined;
        let desiredPosNode= this.get(index);
        let newNode = new Node(value);
        
        newNode.next = desiredPosNode;
        desiredPosNode = newNode;
        this.length++;
    
        return this;
    }
}
let list = new SinglyLinkedList();
list.push('montu');
list.push('jontu');
list.push('kontu');

console.log(list.insert(0,'lonu'));
