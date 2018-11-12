function naiveSearch(arr, pattern){
    let count =0;
    for(let i = 0; i< arr.length ;  i++){
        for(let j =0 ; j< pattern.length ;j++){
            if(pattern[j]!== arr[i+j]) break;
            if(j== pattern.length -1) count++;
        }
    
    }
    return count;
}
function naiveSearchBET(arr, pattern){
    let count =0;
    for(let i = 0; i< arr.length -pattern.length;  i++){
        if(arr[i+pattern.length]=== pattern){
            count++;
        }
    
    }
    return count;
}
let q = naiveSearchBET("hello i am kello","llo");
console.log(q);