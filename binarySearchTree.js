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
    DFSPreOrder(){
        let data=[];
        function DFSTravers(node) {
           
            data.push(node.value);
            if(node.left)DFSTravers(node.left)
            if(node.right)DFSTravers(node.right)
            
        }
        DFSTravers(this.root);
        return data;
    }
    DFSPostOrder(){
        let data = [];
        function DFSTravers(node){
            if(node.left)DFSTravers(node.left)
            if(node.right)DFSTravers(node.right)
            data.push(node.value);
        }
        DFSTravers(this.root);
        return data;
    }
    DFSInOrder(){
        let data = [];
        function DFSTravers(node){
            if(node.left)DFSTravers(node.left)
            data.push(node.value);
            if(node.right)DFSTravers(node.right)
            
        }
        DFSTravers(this.root);
        return data;
    }
    tilled(){
        let tilt = 0;
         function DFSTravers(node) {
              if (node == null)
                  return 0;
               let left = DFSTravers(node.left);
               
               let right = DFSTravers(node.right);
              
               tilt += Math.abs(left - right);
               
               return left + right + node.val;

         }
         DFSTravers(this.root);
         return tilt;
    }
   findTarget(k) {
       let data = [];

       function DFSTravers(node) {

           data.push(node.value);
           if (node.left) DFSTravers(node.left)
           if (node.right) DFSTravers(node.right)

       }
       DFSTravers(this.root);
       for (let i = 0; i < data.length; i++) {
           for (let j = i + 1; j < data.length; j++) {
               if (data[j] === k - data[i]) {
                   return true;
                 
               }
           }
       }
        return false;
   };
   sumBST(){
       function addBT(root)
       {
           if (root == null)
               return 0;
           return (root.value + addBT(root.left));
       }
       function addRBT(root) {
           if (root == null)
               return 0;
           return (root.value + addRBT(root.right));
       }
       let left= addBT(this.root);
       console.log('left: ', left);
       let right = addRBT(this.root);
       console.log('right: ', right);
       return left+right;
   }
    TryDFSPreOrder() {
        let data = [];
        let datLeft=[],dataRight=[];
        function LeftDFSTravers(node) {

           
            datLeft.push(node.value);
            
           
            
            if (node.left){
                LeftDFSTravers(node.left);
               
            } 
           
               

        }
        function RightDFSTravers(node) {

          

            dataRight.push(node.value);

          
            if (node.right) {
                RightDFSTravers(node.right);

            }


        }
        LeftDFSTravers(this.root);
        RightDFSTravers(this.root);
        console.log('datLeft: ', datLeft);
        console.log('dataRight: ', dataRight);
       
        return data;
    }

    printPaths() {
        let path = [];
        let data=[];
        let total=0;
        function printPathsRecur(node, path,  pathLen)
        {
            if (node == null)
                return;

            /* append this node to the path array */
            path[pathLen] = node.value;
            pathLen++;

            /* it's a leaf, so print the path that led to here  */
            if (node.left == null && node.right == null){
                let sum = path.reduce(function (a, b) { return a + b; }, 0);
                total+=sum;
                printArray(path, pathLen);
                //data.push(path);
            }
              // printArray(path, pathLen);
                
            else {
                /* otherwise try both subtrees */
                printPathsRecur(node.left, path, pathLen);
                printPathsRecur(node.right, path, pathLen);
            }
        } 
       function printArray(ints, len)
        {
           console.log('ints: ', ints);
           let sum = 0;
            for (let i = 0; i < len; i++) {
           
                console.log('ints[i]: ', ints[i]);
                sum +=ints[i];
                
            }
           let k = ints.reduce(function (a, b) { return a + b; }, 0);
           console.log('sum: ', k);
           data.push(ints);
            
        } 
       
        printPathsRecur(this.root, path, 0);
        console.log('total: ', total);
       //let k = data.reduce(function (a, b) { return a + b; }, 0);
      //  console.log('k: ', k);
        return data;
    } 
    samtree(treeOne,treeTwo) {
        if (treeOne.length==0 || treeTwo.treeTwo ==0) return false;
        if (treeOne.left && treeTwo.left) samtree(treeOne.left, treeTwo.left);
        if (treeOne.right && treeTwo.right) samtree(treeOne.right, treeTwo.right);

    }
    minmunDepth(){
        let root = this.root;
        function minDepth(root) {
            if(root ==null){
                return null;
            }
            if (root.left == null && root.right ==null) return 1;
            if (!root.left){
                return minDepth(root.right) + 1; 
            }
            if (!root.right) {
                return minDepth(root.left) + 1;
            }
            return Math.min(minDepth(root.right), minDepth(root.left))+1;
        }
        return minDepth(root);
    }
    BFSKOla (sum) {
        let node = this.root,
            data = [],
            queue = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left){
                queue.push(node.left);
            } else if (node.right) {
                queue.push(node.right);
            }else{
                let k = data.reduce((a, b) => a + b, 0);
                if ( k == sum){
                    console.log("montu");
                }  
            }
            
        }
        return data;
    }
    BstLevelOrder(){
        let node = this.root,
            data = [],
            queue = [];
        queue.push(node);
        let j = 0;
        const test = [];
        while (queue.length) {
            const levelSize = queue.length;
            const level = [];
            for(let i=0;i<levelSize;i++){
                node = queue.shift();
                level.push(node.value);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            j++
            console.log('bj: ', j);
            if(j%2==0){
              
                data.push(this.reverseArr(level));
            }else{
                data.push(level);
            }
            test.push(level);
            
            console.log('aj: ', j);
            
        }
        console.log('test: ', test);
        return data;
    }
     reverseArr(input) {
        var ret = [];
        for (var i = input.length - 1; i >= 0; i--) {
            ret.push(input[i]);
        }
        return ret;
    }
}

let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(2);
bst.insert(9);
bst.insert(4);
bst.insert(7);
bst.insert(8);

//console.log(bst.DFSPreOrder());
console.log("**************");
//console.log(bst.DFSPostOrder());
console.log("**************");
//console.log(bst.DFSInOrder());
console.log("**************");

console.log("**************");
//console.log(bst.minmunDepth());
// console.lod(bst.printArray())
 console.log(bst.BstLevelOrder());
