function linearSearch(arr,num){
    if(arr.length==0){
        return null;
    }
    for(i = num; i< arr.length ;  i++){
        if(arr[i] === num) return i;
    
    }
    return -1 ;
}