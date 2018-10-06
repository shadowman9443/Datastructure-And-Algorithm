function same(arr1, arr2){
    if(arr1.length !== arr1.length){
        return false;
    }
    let frequencyCounterOne = {};
    let frequencyCounterTwo = {};
    for (let val of arr1){
        frequencyCounterOne[val] = (frequencyCounterOne[val] || 0)+1;
    }
    for (let val of arr2){
        frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0)+1;
    }

    for (let key in frequencyCounterOne){
        // if(!(key ** 2 in frequencyCounterTwo[key])){
        //     return false;
        // }
        if (! frequencyCounterTwo.hasOwnProperty(key ** 2)){
            return false;
        }
        if(frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key] ){
            return false;
        }
    }
    return true;
}
console.log(same([1,2,3,2],[9,1,4,4]));