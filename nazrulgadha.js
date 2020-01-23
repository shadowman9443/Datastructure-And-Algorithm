var lengthOfLongestSubstring = function (s) {
    
    let longest_sub = "";
    let len = 0;
    for (c of s) {
        if (!longest_sub.includes(c)) {
            longest_sub += c;
        } else {
            len = Math.max(len, longest_sub.length);
            let index = longest_sub.indexOf(c);
            longest_sub = longest_sub.substring(0,index-1) + c;                       
        }
    }
    return Math.max(len, longest_sub.length);
};
console.log('lengthOfLongestSubstring: ', lengthOfLongestSubstring('dvdf'));

var findDisappearedNumbers = function (nums) {
    let missing = [];
    let seen = new Array(nums.length).fill(false);
    for (let i = 0; i < nums.length; i++) {
        seen[nums[i] - 1] = true;
    };
    for (let i = 0; i < seen.length; i++) {
       if(!seen[i]){
           missing.push(i+1);
       }
    };
    return missing ;
};
console.log('findDisappearedNumbers: ', findDisappearedNumbers([1,2,2]));