function anagram(arrOne , arrTwo){
    if(arrOne.length !== arrTwo.length){
        return false;
    }
    const lookup = {}
    for (let i =0 ;i<arrOne.length;i++){
        char = arrOne[i];
        lookup[char] ?  lookup[char] +=1 :lookup[char] =1 ;
    }
    console.log(lookup);
    for (let i =0 ;i<arrTwo.length;i++){
        char = arrTwo[i];
        if(!lookup[char]){
            return false;
        }else{
            lookup[char] -= 1;
        }
    }

    // for(let char in arrOne){
    //     lookup[char] ?  lookup[char] +=1 :lookup[char] =1 ;
    // }
    // console.log(lookup);
    // for(let char in arrTwo){
    //     if(!lookup[char]){
    //         return false;
    //     }else{
    //         lookup[char] -= 1;
    //     }
    // }
    return true;
}
console.log(anagram("montu","tunmo"));