function recursOne(num){
    if(num<= 0){
        console.log("Finish");
        return;
    }
    console.log(num);
    num--;
    recursOne(num);
}

function sumRange(num){
    if(num === 1)return 1;
    return num + sumRange(num - 1);
}


function factorial(num){
    if(num === 1)return 1;
    return num * factorial(num - 1);
}

console.log(factorial(4));

var hammingWeight = function (n) {
    let c = 0
    while (n) {
        c += 1
        n &= n - 1
        console.log('n: ', n);
    }
    return c
};
//console.log('montu: ', hammingWeight(00000000000000000000000000001011));
var reverseBits = function (n) {
    
    var splitString = n.toString().split("");

    var reverseArray = splitString.reverse();
    console.log('reverseArray: ', reverseArray);



    var joinArray = reverseArray.join("");
    console.log('joinArray: ', joinArray);

    return joinArray;
};
console.log('reverseBits: ', reverseBits(00000010100101000001111010011100));