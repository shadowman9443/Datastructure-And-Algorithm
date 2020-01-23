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
let dominoes = [[1, 2], [2, 1], [3, 4], [5, 6]]
var numEquivDominoPairs = function (dominoes) {

    let map = new Map();
    let count = 0;

    for (let i = 0, curr; i < dominoes.length; i++) {
        if (dominoes[i][0] < dominoes[i][1])
            curr = dominoes[i][0] + " " + dominoes[i][1];
        else
            curr = dominoes[i][1] + " " + dominoes[i][0];

        count += map.get(curr) || 0;
        console.log('count: ', count);

        map.set(curr, (map.get(curr) + 1) || 1);
        console.log('map: ', map);
    }

    return count;
};
console.log('numEquivDominoPairs: ', numEquivDominoPairs(dominoes));