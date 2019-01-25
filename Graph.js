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
        while(this.adjaccencyList[vertextOne].length){
            const adjaccentVertx = this.adjaccencyList(vertex).pop();
            this.removeEdge(vertex,adjaccentVertx);
        }
        delete this.adjaccencyList[vertex];

    }

    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjaccencyList = this.adjaccencyList;
        (function dfs(vertex){
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjaccencyList[vertext].forEach(neighbour => {
                if(!visited[neighbour]){
                    return dfs(neighbour);
                }
            });
        })(start)
        return result;
    }
    depthFirstIterative(start){
        const result = [];
        const stack =[];
        const visited = {};
        stack.push(start);
        visited[start] = true;
        let i = stack.length;
        let currentVertext ;
        while(istack.length){
            currentVertext =stack.pop();
            result.push(currentVertext);
            this.adjaccencyList[currentVertext].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] =true;
                    stack.push(neighbour);
                }
            });
        }
        return result; 
    }
    breathFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;
        let currentVertext ;
        while(queue.length){
            currentVertext =queue.shift();
            result.push(currentVertext);
            this.adjaccencyList[currentVertext].forEach(neighbour => {
                if(!visited[neighbour]){
                    visited[neighbour] =true;
                    queue.push(neighbour);
                }
            });
        }
    }
}