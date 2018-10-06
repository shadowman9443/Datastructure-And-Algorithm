function sumezero(arr){
    let left = 0;
    let right = arr.lenght -1;
    while(left<right){
        let sum = arr[left]+arr[right];
        if(sum === 0){
            return [left,right];
        }else if(sum > 0){
            right --;
        }else {
            left ++;
        }
    }
}