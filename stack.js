class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(value){
        let  newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode
        }else{
            let temp = this.first ;
            this.first = newNode;
            newNode.next = temp;
        }
        this.size ++;
        return this;
    }
    pop(){
        if(!this.first){
            return null;
        }else if(this.size === 1){
            this.first = null;
            this.last = null ;

        }else {
            let temp = this.first ;
            this.first = temp.next;
            temp = null;
            temp.next = null;
        }
        this.size --;
        return this;
    }
}