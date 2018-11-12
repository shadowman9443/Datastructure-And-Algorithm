
function insertionSort(arr){
    for(let i = 0; i< arr.length ;  i++){
        console.log("***");
        let key = arr[i];
        console.log("first key"+key);
        let j = i- 1;
        console.log("before while"+j);
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j= j-1;
            console.log("inside while"+j);
        }
        arr[j+1] = key;
        console.log("after while"+j);
        console.log("after while"+ arr[j+1] );
        console.log("after while"+ key );
        console.log("***");
    
    }
    return arr;
}

console.log(insertionSort([9,4,8,11,3,7,6,5,10]));