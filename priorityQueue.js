class Node {
    constructor(val,priority) {
        this.val = val;
        this.priority = priority;
        
    }
}

class PriorityQueue{
    constructor(){
        this.values = []; 
    }
    enqueue(value,priority){
        let newNode = new Node(value,priority);
        this.values.push(newNode);
        let index = this.values.length -1;
        while(index>0);{
            let parentIndex = Math.floor((index-1)/2) ;
            let parentNode = this.values[parentIndex];
            let indexNode = this.values[index];
            if(indexNode.priority<= parentNode.priority) break;
            this.values[parentIndex] = this.values[index];
            this.values[index] = temp;
            index = parentIndex;
        }
    }
    insert(value,priority) {
        let newNode = new Node(value,priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this.values;
    }
    bubbleUp(){
       let index = this.values.length -1;
       
       while(index>0){
         let parentIndex = Math.floor((index-1)/2) ;
         let temp = this.values[parentIndex];
         let indexNode = this.values[index];
         if(indexNode.priority<= temp.priority) break;
         this.values[parentIndex] = this.values[index];
         this.values[index] = temp;
         index = parentIndex;
       }
    }
    dequeue(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end ;
            this.sinkdown();
        }
        return max;
    }
    sinkdown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2* idx +1 ;
            let rightChildIdx = 2* idx +2;
            let leftChild,rightChild ;
            let swap = null;
            if(leftChildIdx< length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority > element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx<length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority> element.priority)||
                    (swap !== null && rightChild.priority > leftChild.priority)){
                        swap = rightChildIdx;
                    }
            }
            if(swap === null) break;
            this.values[idx]= this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }

    }
}

var result = (function () { 
    var name = "Barry"; 
    console.log(name);
    return name; 
})(); 
// Immediately creates the output: 
console.log(result);