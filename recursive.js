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
