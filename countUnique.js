function countUnique(arr){
    let obj = {};
    let count = 0;
    for (let i =0 ;i<arr.length;i++){
        char = arr[i];
        obj[char] ?  obj[char] +=1 :obj[char] =1 ;
    }
    console.log(obj);
    console.log(Object.keys(obj).length);
}
//vidio lecture solutions
function countUniqueValues(arr){
    if(arr.length=== 0) return 0;
    let i =0 ;
    for( let j =1;j<arr.length;j++){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j];
        }
    } 
    return i+1;
}


countUnique([]);