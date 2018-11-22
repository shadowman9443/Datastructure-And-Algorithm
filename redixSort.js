function getDigit(num, i){
    return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10;
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) +1 ;
}

function mostDigits(nums){
    let maxDigits = 0;
    for (let i = 0; i< nums.length ; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}
function redixSort(nums){
    let maxDigit =mostDigits(nums);
    for (let k =0 ; k < maxDigit ; k++){
        let digitBuckets = Array.from({length : 10} , () => []);
        for (let i =0 ; i<nums.length;i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(redixSort([122, 45,89, 1, 90]));