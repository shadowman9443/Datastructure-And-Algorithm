class Graph{
    constructor(){
        this.adjaccencyList = {};
    }
    addvertext(vertex){
        if(!this.adjaccencyList[vertex]) this.adjaccencyList[vertex]= [];    
    }
    addeEdge(vertextOne,vertexTwo){
        if(this.adjaccencyList[vertextOne]) this.adjaccencyList[vertextOne].push(vertexTwo);
        if(this.adjaccencyList[vertexTwo]) this.adjaccencyList[vertexTwo].push(vertextOne);
    }
    removeEdge(vertextOne,vertexTwo){
        if(this.adjaccencyList[vertextOne]) this.adjaccencyList[vertextOne].filter(
            v=>v !==vertexTwo
        )
        if(this.adjaccencyList[vertexTwo]) this.adjaccencyList[vertexTwo].filter(
            v=>v !==vertextOne
        )
    }
    removeVertex(vertex){
        while(his.adjaccencyList[vertextOne].length){
            const adjaccentVertx = this.adjaccencyList(vertex).pop();
            this.removeEdge(vertex,adjaccentVertx);
        }
        delete this.adjaccencyList[vertex];

    }
}