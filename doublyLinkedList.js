class Node {
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
    push(val){
        let newNode = new Node(val);
        if(this.length === 0 ){
            this.head = newNode;
            this.tail = newNode;

        }else{
            this.tail.next =newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined;
        }
        let temp = this.tail;
        if(this.length ===1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = temp.prev ;
            this.tail.next  = null;
            temp.prev  = null;
        }
        this.length --;
        return this;
      
    }
    shift(){
        if(!this.head){
            return undefined;
        }
        let temp = this.head;
        if(this.length ===1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = temp.next ;
            this.head.prev  = null;
            temp.next  = null;
        }
        this.length --;
        return this;
    }
    punshift(val){
        let newNode = new Node(val);
        if(this.length === 0 ){
            this.head = newNode;
            this.tail = newNode;

        }else{
            newNode.next =  this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list);
list.shift()
console.log('**********');
console.log(list);