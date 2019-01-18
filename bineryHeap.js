class MaxBineryHeap {
    constructor(){
        this.values = []; 
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        return this.values;
    }
    bubbleUp(){
       let index = this.values.length -1;
       
       while(index>0){
         let parentIndex = Math.floor((index-1)/2) ;
         let temp = this.values[parentIndex];
         if(this.values[index]<= this.values[parentIndex]) break;
         this.values[parentIndex] = this.values[index];
         this.values[index] = temp;
         index = parentIndex;
       }
    }
    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end ;
            this.sinkdown();
        }
        this.sinkdown();
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
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx<length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild> element)||
                    (swap !== null && rightChild > leftChild)){
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

let bineryHeap = new MaxBineryHeap();
bineryHeap.insert(41);
bineryHeap.insert(39);
bineryHeap.insert(32);
bineryHeap.insert(18);
bineryHeap.insert(27);
bineryHeap.insert(12);
bineryHeap.insert(55);
console.log(bineryHeap);

bineryHeap.remove();

console.log(bineryHeap);