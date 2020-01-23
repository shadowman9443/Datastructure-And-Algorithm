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
//console.log(anagram("montu","tunmo"));
function removenav(string){
    
 // return   string = string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    let [str ,ext ]= string.split('.');
    
     let k = str.replace(/[^\w\s]/gi, '');
     console.log('k: ', k);
     return k.concat('.'+ext);
}
//console.log('removenav: ', removenav('Lohnsteuerbescheinigung 2017 Conblu Geschwärzt.pdf'));
//console.log('removenav: ', removenav('Lohnsteuerbescheinigung 2017 Conblu Geschwarzt.pdf'));

hello = () => {
  let   k=1;
    
  let   h=2;
    
}
var numPrimeArrangements = function (n) {
    
    let resultArr=[];
    for (i = 1; i <= n; i++) {
        if (test_prime(i)){
            resultArr.push(i);
        }
    }
    return resultArr;
};
function test_prime(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}


var dietPlanPerformance = function (calories, k, lower, upper) {
    
    let pts = 0;
    for (i = 0; i < calories.length; i++) {
        let calory = 0;
        for (j = 0; j < k; j++) {
            calory += calories[i+j] ;
            
            
        }
      
        if (calory<lower){
            pts = pts-1;
        }
        if(calory>upper){
            pts = pts+1;
        }
    }
    return pts ;

};
let calories = [1, 2, 3, 4, 5], k = 1, lower = 3, upper = 3 ;
//console.log('dietPlanPerformance: ', dietPlanPerformance(calories,k,lower,upper));
var arr = [1, 2, 3, 3, 4, 5, 6, 6, 7, 7, 7, 7];
console.log('arr: ', [...new Set(arr)]);
let c = [...new Set(arr)];
function* calculator(input) { 
    var doubleThat = 2 * (yield (input / 2));
    var another = yield (doubleThat) ; 
    return (input * doubleThat * another) ;
}

const calc = calculator(10)

console.log('calc1: ', calc.next());
console.log('calc2: ', calc.next(7));
console.log('calc2: ', calc.next(100));

function mgk(){
    let calories = [1, 2, 3, 4, 5]
    for (const [i, v] of calories.entries()) { console.log(i, v); }
}
console.log('mgk: ', mgk());