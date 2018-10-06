function maxSubarray(arr,num){
    if(arr.length<num){
        return null;
    }
    let tempsum = 0;
    let maxsum =0;
    for (i = 0 ; i <num; i++){
        maxsum += arr[i];
    }
    tempsum = maxsum;
    for(i = num; i< arr.length ;  i++){
        tempsum = (tempsum - arr[i-num]) + arr[i];
        maxsum = Math.max(maxsum,tempsum);
    }
    return maxsum;
}