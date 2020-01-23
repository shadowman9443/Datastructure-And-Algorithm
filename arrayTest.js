var twoSum = function (nums, target) {
    for (let i = 1; i <= nums.length; i++) {
        for (let j = i; j <= nums.length; j++) {
            if (nums[j - 1] === target - nums[i - 1] && i < j) {
                return [i, j];
            }
        }
    }
};
let nums = [2, 3, 4];
let target = 7;
//console.log(twoSum(nums, target));
var longestCommonPrefix = function (strs) {
    let lcpk = [];
    if (strs.length == 1) {
        return strs[0];
    }
    for (let i = 0; i < strs.length; i++) {

        if (i + 1 < strs.length) {
            let k = lcp(strs[i], strs[i + 1]);
            if (k > 0) {
                lcpk.push(k);
            }

        }


    }
    let low;
    for (let i = 0; i < lcpk.length; i++) {

        if (i + 1 < lcpk.length) {
            if (lcpk[i] < lcpk[i + 1]) {
                low = lcpk[i]
            } else {
                low = lcpk[i + 1];

            }
        }

    }

    if (lcpk.length === strs.length - 1) {
        let res;
        //    res = strs[0].substring(0, low);
        //    return res;
        if (low > 1) {
            res = strs[0].substring(0, low);
            return res;
        } else {
            res = strs[0].charAt(low);
            return res;
        }

    }
    return "";


};

function lcp(strk, strl) {

    compareNum = 0;

    l = Math.min(strk.length, strl.length);
    for (i = 0; i < l; i++) {
        if (strk.charAt(i) === strl.charAt(i)) {
            compareNum++;
        }
    }

    return compareNum;

}
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
//console.log(longestCommonPrefix(["aa", "ab"]));
// console.log(longestCommonPrefix(["a"]));


function longest_common_starting_prefix(arr1) {
    //a1 ->1st item, a2->last item
    if (strs.length == 1) {
        return strs[0];
    }
    var arr = arr1.concat().sort(),
        a1 = arr[0],
        a2 = arr[arr.length - 1],
        L = a1.length,
        i = 0;
    console.log('arr: ', arr);
    while (i < L && a1.charAt(i) === a2.charAt(i))
        i++;
    return a1.substring(0, i);
}

//console.log(longest_common_starting_prefix([]));
//  console.log(longest_common_starting_prefix(["a"]));

function Parentheses(str) {
    let open = ['(', '{', '['];
    let close = [')', '}', ']'];
    let stack = [];
    let popElm;
    for (let i = 0; i < str.length; i++) {
        if (open.includes(str[i])) {

            let k = open.indexOf(str[i]);
            console.log('k: ', open.indexOf(str[i]));
            stack.push(close[k]);
            console.log('close[k]: ', close[k]);
        } else {
            if (stack.length == 0) {
                return false;
            } else {

                popElm = stack.pop();

                if (popElm == str[i]) {
                    stack.pop()
                } else {
                    return false;
                }
            }

        }


    }
    if (stack.length == 0) {
        return true;
    }

    return false;
}


function duplicates(nums) {
    // console.log('k',nums);
    // let num1 = [...new Set(nums)]
    // nums = num1;
    // console.log('l', nums);
    // return nums.length;
    // // for (let i = 0; i < nums.length; i++) {
    // //     if(nums[i]==nums[i+1]){
    // //         let index = nums.indexOf(nums[i]);

    // //         if (index > -1) {
    // //             nums.splice(index, 1);

    // //         }
    // //         if (nums[i] == nums[i + 1]){
    // //             nums.splice(index, 1);
    // //         }
    // //     }
    // // }

    //  nums.push(nums.length);
    //  return nums;

    // return [...new Set(a)].length;
    // // if (nums.find(obj => {
    // //         return obj === nums.length
    // //     })) {
    // //     nums.push(nums.length);
    // //     return [...new Set(nums)].length;
    // // } else {
    // //     return nums.length;
    // // }

    let n = 0; // no duplicates
    let c = 1; // current

    while (c < nums.length) {
        if (nums[c] === nums[n]) {
            c++;
        } else {
            n++;
            nums[n] = nums[c];

        }
    }

    return n + 1;

}


let a = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

//console.log(duplicates(a));


function arrangeCoins(n) {
    if (n == 1 || n == 0) {
        return n;
    }
    let i = 0;
    let k = 0;
    let l = 0;
    // while (i < n) {


    //     for (let j = 0; j < i; j++) {
    //         process.stdout.write("*");
    //         k++;
    //         l = j + 1;
    //         if (k == n) {
    //             break;
    //         }
    //     }

    //     if (k == n) {
    //         break;
    //     }

    //     console.log('\n');
    //     i++;
    // }
    while (i * (i + 1) / 2 <= n) {
        i += 1;
        console.log('i: ', i);

    }
    return i - 1;
}

//console.log(arrangeCoins(3));

function maxSubArray(arr) {
    let sum = 0;
    let maxStillNow = arr[0];
    let maxEndHere = arr[0];

    for (let i = 1; i < arr.length; i++) {


        maxStillNow = Math.max(maxStillNow + arr[i], arr[i]);

        maxEndHere = Math.max(maxStillNow, maxEndHere);


    }
    return maxEndHere;
}

//console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function arrayPairSum(nums) {
    nums.sort();
    nums.sort(function (a, b) {
        return a - b
    });
    console.log('nums: ', nums);
    if (nums.length == 2) {
        return Math.min(nums[0], nums[1])
    }
    let pairsize = 2;
    let min = 0;
    let temp = 0;
    let k = 0;
    for (let index = 0; index < nums.length; index += pairsize) {
        myChunk = nums.slice(index, index + pairsize);
        min += Math.min(myChunk[0], myChunk[1]);
    }

    return min;
};

//console.log(arrayPairSum([-470, 66, -4835, -5623]));

var findContentChildren = function (g, s) {
    let i = g.length - 1;
    let j = s.length - 1;
    g.sort(function (a, b) {
        return a - b
    });
    s.sort(function (a, b) {
        return a - b
    });
    let r = 0;
    while (i >= 0 && j >= 0) {
        if (s[j] >= g[i]) {
            ++r;

            --j;
            --i;
        } else {
            --i;
        }
    }

    return r;
};

function backspaceCompare(S, T) {
    let a = resArr(S);

    let b = resArr(T);


    while (a.includes('#') && a.includes('#')) {
        a = resArr(a);

        b = resArr(b);
    }
    console.log('a: ', a);
    console.log('a: ', b);
    if (a == b) {
        return true;
    }
    return false;


};

function resArr(arr) {
    let i = 0;
    while (i <= arr.length) {
        if (arr.charAt(i) === '#') {
            arr = arr.replace('#', '');
            if (arr.charAt(i - 1) !== '#') {
                arr = arr.replace(arr.charAt(i - 1), '');
            }


        }
        // console.log('arr: ', arr);
        i++

    }
    return arr;
};
//console.log(backspaceCompare("bxj##tw", "bxo#j##tw"));
var convertToBase7 = function (num) {
    // if (num < 0) {
    //     num = 0xFFFFFFFF + num + 1;
    // } 
    let conVn = [];
    let base = 7;
    let r = 0;
    let k = 0;
    let m = parseInt(num, 10).toString(7);
    console.log('m: ', m);
    while (num != 0) {
        k = Math.round(num / base);
        r = num % base;
        num = k
        conVn += r;
    }
    return conVn.toString();
    // if (num< 0) {
    //     num = 0xFFFFFFFF + num + 1;
    // } 
    // if (num >= 0) {
    //     return num.toString(7);
    // }
    // else {

    //     return (~num).toString(7);
    // }
};



var calPoints = function (ops) {

    let validSum = [];
    let answer = 0;
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] == "D") {
            validSum.push(2 * parseInt(validSum[validSum.length - 1]));
        } else if (ops[i] == "C") {
            validSum.pop();

        } else if (ops[i] == "+") {
            let r = validSum.pop();
            let s = validSum[validSum.length - 1];
            sum = r + s;
            validSum.push(r);
            validSum.push(sum);
        } else {


            validSum.push(parseInt(ops[i]));


        }

    }
    while (validSum.length != 0) {
        answer = answer + validSum.pop();
    }

    return answer;
};

//console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));

var maxProfit = function (prices) {
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1])
            maxprofit += prices[i] - prices[i - 1];

    }

    return maxprofit;
};

//console.log(maxProfit([7, 1, 5, 3, 6, 4]));

var hasAlternatingBits = function (n) {
    let str = parseInt(n, 10).toString(2);
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == str.charAt(i + 1)) {
            return false;
        }

    }
    return true;
};
var search = function (nums, target) {

    return nums.indexOf(target);
};


var readBinaryWatch = function (num) {
    let ans = [];
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            if (bitCount(i) + bitCount(j) == num) {
                if (j.toString().length == 1) {
                    ans.push(i + ":0" + j);
                } else {
                    ans.push(i + ":" + j);
                }


            }

        }

    }
    return ans;
};

function bitCount(u) {

    const uCount = u - ((u >> 1) & 0o33333333333) - ((u >> 2) & 0o11111111111);
    return ((uCount + (uCount >> 3)) & 0o30707070707) % 63;
}
//console.log(readBinaryWatch(1));

var buddyStrings = function (A, B) {
    if (A.length == 0 || B.length == 0) return false;

    for (let i = 0; i < A.length; i++) {
        let tempArr = A.split("");
        if (i + 1 < A.length) {
            let tempVar = tempArr[i];
            tempArr[i] = tempArr[i + 1];
            tempArr[i + 1] = tempVar;

            if (tempArr.join("") === B) return true;
        }
    }
    if (A.split("").reverse().join("") === B) return true;

    return false;
}

let A = "abab";
let B = "abab";
//console.log(buddyStrings(A,B));


function MCG(A) {

    let C = [...new Set(A.split(''))];
    return C;
}
//console.log(MCG("1234437"));

var canPlaceFlowers = function (flowerbed, n) {
    let i = 0,
        count = 0;
    while (i < flowerbed.length) {
        if (flowerbed[i] == 0 && (i == 0 || flowerbed[i - 1] == 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] == 0)) {
            flowerbed[i++] = 1;
            count++;
        }
        if (count >= n)
            return true;
        i++;
    }
    return false;
};
var lengthOfLastWord = function (s) {


    var splitArr = s.trim().split(/ +/);
    console.log('splitArr: ', splitArr);
    return splitArr ? splitArr[splitArr.length - 1].length : 0;


};


var plusOne = function (digits) {
    let arrTostring = digits.toString().replace(/,/g, "");
    let result = sums(arrTostring, "1");

    let arr = result.toString(10).replace(/\D/g, '0').split('').map(Number);

    return arr;
};

function sums(arg1, arg2) {
    var sum = "";
    var r = 0;
    var a1, a2, i;

    // Pick the shortest string as first parameter and the longest as second parameter in my algorithm
    if (arg1.length < arg2.length) {
        a1 = arg1;
        a2 = arg2;
    } else {
        a1 = arg2;
        a2 = arg1;
    }
    a1 = a1.split("").reverse();
    console.log('a1: ', a1);
    a2 = a2.split("").reverse();
    console.log('a2: ', a2);

    // Sum a1 and a2 digits
    for (i = 0; i < a2.length; i++) {
        var t = ((i < a1.length) ? parseInt(a1[i]) : 0) + parseInt(a2[i]) + r;
        console.log('t: ', t);

        sum += t % 10;
        console.log('sum: ', sum);

        r = t < 10 ? 0 : Math.floor(t / 10);
        console.log('r: ', r);
    }
    // Append the last remain
    if (r > 0)
        sum += r;

    sum = sum.split("").reverse();

    // Trim the leading "0"
    while (sum[0] == "0")
        sum.shift();

    return sum.length > 0 ? sum.join("") : "0";
}
//console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

var mySqrt = function (x) {
    if (x < 0) return 0;
    return Math.trunc(Math.sqrt(x));

};
//console.log('mySqrt: ', mySqrt(-10));

var isPerfectSquare = function (num) {

    return Number.isInteger(Math.sqrt(num)) ? true : false;
};

//console.log('isPerfectSquare: ', isPerfectSquare(10));

var judgeSquareSum = function (c) {
    let arr = [];

    for (i = 0; i * i <= c; i++) {


    }
    // for (i = 0; i < arr.length; i++) {
    //     for (j =i+1 ; j < arr.length; j++) {
    //         if(Math.pow(arr[i], 2) + Math.pow(arr[j], 2)===c) return true ;           
    //     }
    // }
    return false;
};
//console.log('judgeSquareSum: ', judgeSquareSum(5));


var climbStairs = function (n) {

    let arr = [];
    for (i = 1; i <= n; i++) {
        arr.push(i);


    }
    console.log('arr: ', arr);
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[i] <= 2 && arr[j] <= 2) {
                if (arr[i] + arr[j] == n) count++;
            }
        }
    }
    return count + 1;
};

var bitwiseComplement = function (N) {

    let k = parseInt(N, 10).toString(2);
    return parseInt(onesComplement(k), 2).toString(10);
};
function onesComplement(bNumber) {
    var onesComplement = "";

    for (var i = 0; i < bNumber.length; ++i) {
        var b = bNumber.charAt(i);

        if (b == '0') {
            onesComplement += '1';
        } else {
            onesComplement += '0';
        }
    }

    return onesComplement;
}

var divide = function (dividend, divisor) {
    let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;

    let dend = Math.abs(dividend);
    let dsor = Math.abs(divisor);
    let quotient = 0;
    while (dend >= dsor) {
        dend -= dsor;
        ++quotient;
    }

    return sign > 0 ? quotient : -quotient;
};


var commonChars = function (A) {
    let arr = [];
    for (let i = 0; i < A[0].length; ++i) {

        let count = 0;
        for (let j = 1; j < A.length; j++) {
            if (A[j].toString().includes(A[0][i])) {
                count++;
            }
        }
        if (count >= A.length - 1) {

            arr.push(A[0][i]);
        }
    }
    return arr;
};

// console.log('commonChars: ', commonChars(["cool", "lock", "cook"]));

// var prefixesDivBy5 = function (A) {
//     if (A.length < 1 || A.length > 30000) return undefined;
//     let arr=[];
//     for (let i = 0; i < A.length; i++) {

//         let str='';

//         for (let j = 0; j <=i ; j++) {
//           str+=A[j];

//         }

//         let k = modulo(parseInt(str, 2).toString(10) ,5 );



//         arr.push( k== 0 ? true : false);

//     }
//     return arr;
// };

//console.log('prefixesDivBy5: ', prefixesDivBy5([1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1]));


function modulok(aNumStr, aDiv) {
    //  console.log('aNumStr.length: ', aNumStr.toString().length);
    var tmp = "";
    var i, r;
    for (i = 0; i < aNumStr.length; i++) {

        tmp += aNumStr.charAt(i);
        r = tmp % aDiv;
        tmp = r.toString(10);

    }
    return tmp / 1;
}

function modulo(divident, divisor) {
    var cDivident = '';
    var cRest = '';

    for (var i in divident) {
        var cChar = divident[i];
        var cOperator = cRest + '' + cDivident + '' + cChar;

        if (cOperator < parseInt(divisor)) {
            cDivident += '' + cChar;
        } else {
            cRest = cOperator % divisor;
            if (cRest == 0) {
                cRest = '';
            }
            cDivident = '';
        }

    }
    cRest += '' + cDivident;
    if (cRest == '') {
        cRest = 0;
    }
    return cRest;
}
var baseNeg2 = function (N) {
    if (N == 0)
        return "0";

    let converted = [], negBase = -2;
    let montu = "";
    while (N != 0) {
        // Get remainder by negative base, it can be 
        // negative also 
        let remainder = N % negBase;
        console.log('remainder: ', remainder);
        N = Math.round(N / negBase);
        console.log('N: ', N);

        // if remainder is negative, add abs(base) to 
        // it and add 1 to n 
        if (remainder < 0) {
            remainder -= negBase;
            N++;
        }

        // convert remainder to string add into the result 
        montu += remainder;

        converted.push(remainder);
    }
    console.log('montu: ', montu);
    return converted;

};



var prefixesDivBy5 = function (A) {

    let answer = [];
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        console.log(sum * 2 + A[i]);
        sum = (sum * 2 + A[i]) % 5;
        console.log('sum: ', sum);
        if (sum === 0) {
            answer[i] = true;
        } else {
            answer[i] = false;
        }
    }

    //  console.log(answer);
    return answer;
};

//console.log('prefixesDivBy5: ', prefixesDivBy5([0, 1, 1]));

var canThreePartsEqualSum = function (A) {

    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
    }
    if (sum % 3 !== 0) return false;
    let fIndx = -1, sIndx = -1;
    let s = sum / 3;
    let sTwo = s * 2;
    let preSum = 0;
    for (let i = 0; i < A.length; i++) {
        preSum += A[i];
        if (preSum % s == 0 && fIndx == -1) {
            fIndx = i;
            console.log('fIndx: ', fIndx);
        }
        else if (preSum % sTwo == 0) {
            sIndx = i;
            console.log('sIndx: ', sIndx);
            break;
        }
    }
    if (fIndx != -1 && sIndx != -1) {

        return true;
    }

    return false;
};

//console.log('canThreePartsEqualSum: ', canThreePartsEqualSum([6, 1, 1, 13, -1, 0, -10, 20]));
var largestSumAfterKNegations = function (A, K) {

    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        if (K < 0) {
            break;
        }
        if (A[i] < 0) {
            A[i] = -A[i];
            K--;
        }
        sum += A[i];

    }
    console.log('sum: ', A);
    return sum;
};
//console.log('largestSumAfterKNegations: ', largestSumAfterKNegations([2, -3, -1, 5, -4],2));


(function (x, f = () => x) {
    var x;
    var y = x;
    x = 2;

    console.log('[x,y,f()]: ', [x, y, f()]);
    return [x, y, f()]
})(1)


var removeOuterParentheses = function (S) {
    // let arr=[];
    // let counter=0;
    //   for (let i = 0; i < S.length; i++) {
    //       if(counter != 0 && !(counter == 1 && S[i] == ')')) {
    //          arr.push(S[i]);
    //       }
    //       if (S[i] == '(') {
    //           counter++
    //       } else {
    //           counter--
    //       }
    //   }
    //   return arr;
    let str = "";
    let open = 0, close = 0; start = 0;
    for (let i = 0; i < S.length; i++) {
        if (S[i] == '(') {
            open++;
        }
        if (S[i] == ')') {
            close++;
        }
        if (open == close) {
            str += S.substring(start + 1, i);
            start = i + 1;
        }
    }
    return str;
};
// function Parentheses(str) {
//     let open = ['(', '{', '['];
//     let close = [')', '}', ']'];
//     let stack = [];
//     let popElm;
//     for (let i = 0; i < str.length; i++) {
//         if (open.includes(str[i])) {

//             let k = open.indexOf(str[i]);
//             console.log('k: ', open.indexOf(str[i]));
//             stack.push(close[k]);
//             console.log('close[k]: ', close[k]);
//         } else {
//             if (stack.length == 0) {
//                 return false;
//             } else {

//                 popElm = stack.pop();

//                 if (popElm == str[i]) {
//                     stack.pop()
//                 } else {
//                     return false;
//                 }
//             }

//         }


//     }
//     if (stack.length == 0) {
//         return true;
//     }

//     return false;
// }

//console.log('removeOuterParentheses: ', removeOuterParentheses("(()())(())(()(()))"));

const memoizeUtil = func => {
    // results store
    const cache = {};
    return (input) => {
        // return the value if it exists in the cache object
        // otherwise, compute the input with the passed in function and
        // update the collection object with the input as the key and
        // computed result as the value to that key
        // End result will be key-value pairs stored inside cache
        return cache[input] || (cache[input] = func(input));
    };
};
const findFactorial = memoizeUtil(factorial)
function factorial(num) {
    // termination case
    if (num < 0) {
        throw new Error("Number must be positive.");
    };
    // base case
    if (num === 0 || num === 1) {
        return 1;
    };
    // recursive case
    return num * findFactorial(num - 1);
}


var divisorGame = function (value) {

    for (let i = 0; i < 10; i++) {
        try {
           
            console.log('i', i);
            for (let j = 0; j < 10; j++) {
                try {
                    console.log('j',j);
                    if (j == 6|| j == 7) {
                        throw new Exception("Test " + i);
                    }
                }
                catch (err) {
                    // generate a log and flag set.
                    console.log('titi');
                }
            }
            if (i == 2 || i == 4) {
                throw new Exception("Test " + i);
            }
        }
        catch (err) {
            // generate a log and flag set.
            console.log('fifii');
        }
    }
    
};
function createOffSet(pageNum) {
    var date = new Date(pageNum); // some mock date
    var milliseconds = date.getTime(); 
    return milliseconds ;
}
//console.log('montu: ', createOffSet("15:44:22 Mar 13, 2019 PDT"));





function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {

    let root = arrConvertBst(nums, 0, nums.length -1);
   
    let data = [];
    function DFSTravers(node) {

        data.push(node.val);
        if (node.left) DFSTravers(node.left)
        if (node.right) DFSTravers(node.right)

    }
    DFSTravers(root);
    return data;
};

function arrConvertBst(nums, start ,end ) {
    if (start > end)
        return null;  
    let mid = Math.floor((start+end) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = arrConvertBst(nums, start,
        mid - 1);
    root.right = arrConvertBst(nums, mid + 1, end);
    return root;
}

//console.log('montu: ', sortedArrayToBST([-10, -3, 0, 5, 9]));
