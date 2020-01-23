var isHappy = function (n) {
    
    let numarr = numbarr(n) ;
    let resultsumsqr = 0 ;
    for (var i = 0, len = numarr.length; i < len; i++) {
        resultsumsqr = +(numarr[i] * numarr[i]);
    }
    if (resultsumsqr==1) return true;
    return isHappy(resultsumsqr);
};
function numbarr(num){
    var digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = parseInt(num / 10);
    }
    return digits.reverse();
}

// console.log('isHappy: ', isHappy(19));
var diStringMatch = function (S) {
    let lenOfStrin =  S.length;
    let resutlArr = [];
    for (i = 0; i <= arr.length; i++) {
        
    }

};


const actuallyReturnAnObjectArrowFunction = () => ({
    hello: "world"
})
console.log(actuallyReturnAnObjectArrowFunction())

var occurance = function (arr) {    
    let result = {};
    for (let i = 0,  len = arr.length; i < len; i++) {
        if (!result[arr[i]]){
            result[arr[i]] = 1 ;
        }else{
            let value = result[arr[i]];
            result[arr[i]] = value + 1 ;
        }
    }
    return (new Set(Object.values(result))).size == Object.values(result).length;
};
//let arr = [1, 2, 2,2, 1, 1, 3]
//console.log('occurance: ', occurance(arr));

var minDifference = function (arr) {
    
    //let sortarr = arr.sort();
    
    let resarr = [];
    let minDiff = minDifferen(arr);
    for (let i = 0; i < arr.length; i++) {
        let sarr=[]
        if (arr[i] - arr[i - 1] == minDiff){
           
            sarr.push(arr[i - 1]);
            sarr.push(arr[i]);
            resarr.push(sarr);
        }
    }
    return resarr ;
};
function minDifferen(arr){
    arr.sort(function (a, b) { return a - b });

    let minDiff = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        minDiff = Math.min(minDiff, Math.abs(arr[i] - arr[i - 1]));
    }
    return minDiff;
}
arr = [1, 3, 6, 10, 15];
//console.log('minDifference: ', minDifference(arr));




function getLocaleDateTime(value, locale = 'en-NL') {
    
    const t = new Date(value);
    const pad2 = n => ('0' + n).substr(-2);
    let date = `${pad2(t.getDate())}/${pad2(t.getMonth() + 1)}/${t.getFullYear()}`
    let time = `${pad2(t.getHours())}:${pad2(t.getMinutes())}:${pad2(t.getSeconds())}`
    return date + ' ' + time;

}

var sortArrayByParity = function (A) {
    
    let resArr = [];
    let odarr = [];
    let t = 0;
    for (let i = 0; i < A.length; i++) {
        if(A[i]%2==0){
           
            resArr[t]=A[i];
            t+=2;
        }else{
            odarr.push(A[i]);
        }
    }
    t = 1
    for (let i = 0; i < odarr.length; i++) {
        
            resArr[t] = odarr[i];
            t += 2;
       
    }
    return resArr;
};
//console.log('sortArrayByParity: ', sortArrayByParity([3, 1, 2, 4]));

montu = {
    
    'a':1,
    'b':2
}
//console.log('montu: ', montu.hasOwnProperty('c'));


var heightChecker = function (heights) {
    let point = [...heights];
    point.sort(function (a, b) { return a - b });
    let wronpos = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != point[i]) {
            wronpos++;
        }
    }
    return wronpos;
};
let kgf = [1, 1, 4, 2, 1, 3]
//console.log('heightChecker: ', heightChecker(kgf));

var missingNumber = function (nums) {
    // if(nums.length<2){
    //     return 0 ;
    // }
    nums.sort(function (a, b) { return a - b });
    for (let i = 0; i <= nums.length; i++) {
       
        if(i!=nums[i]) {
            return i;
        }
    }
    return 0;
};
let p = [1];
let k= [9, 6, 4, 2, 3, 5, 7, 0, 1];
//console.log('missingNumber: ', missingNumber(p));


var fib = function (N) {    
    let sum = 0;
    for (let i = 0; i < N; i++) {
        console.log('i: ', i);

        sum += fibonacci(i);        
        console.log('sum: ', sum);
    }
    return sum;
};
function fibonacci(n) {
    if (n < 2) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}
//console.log('fib: ', fib(4));

var moveZeroes = function (nums) {    
    let lastNonZeroFoundAt = 0;
    // If the current element is not 0, then we need to
    // append it just in front of last non 0 element we found. 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[lastNonZeroFoundAt++] = nums[i];            
        }
    }
    // After we have finished processing new elements,
    // all the non-zero elements are already at beginning of array.
    // We just need to fill remaining array with 0's.
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }
};
let kk=[0, 1, 0, 3, 12];
//console.log('moveZeroes: ', moveZeroes(kk));


var thirdMax = function (nums) {    
    nums.sort(function (a, b) { return a - b });
    if(nums.length<3){
        return nums[nums.length-1];
    }
    uniq = [...new Set(nums)];
    if(uniq.length ==3){
       
        return uniq[nums.length - 3];
    }else{
        
    }
    
};
//console.log('thirdMax: ', thirdMax([3,2,1]));
var pivotIndex = function (nums) {
    if (nums.length == 0) return -1;
    let n = nums.length;
    let totalsum = 0, leftsum = 0;
    for (let i = 0; i < n; i++) {
       totalsum += nums[i];
    }
    for (let i = 0; i < n; i++) {
        if (leftsum == (totalsum - nums[i]))
            return i;
        else {
            leftsum += nums[i];
            totalsum -= nums[i];
        }
    }
    return -1;
};
let nums = [1, 7, 3, 6, 5, 6];


var isMonotonic = function (A) {
    
    let increasing = true;
    let decreasing = true;
    for (let i = 0; i < A.length - 1; ++i) {
        if (A[i] > A[i + 1])
            increasing = false;
        if (A[i] < A[i + 1])
            decreasing = false;
    }

    return increasing || decreasing;
};
console.log('isMonotonic: ', isMonotonic([1, 3, 2]));





