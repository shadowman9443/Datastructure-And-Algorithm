function bubleSort(arr){
    for(let i = 0; i< arr.length ;  i++){
        for(let j =0 ; j< i ;j++){
           if(arr[j]>arr[j+1]){
               var temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
           }
        }
    
    }
    return arr;
}

console.log(bubleSort([7,4,10,9]));

function fizBuzz(){
    for(let i = 0; i< 100 ; i++){
       console.log(i);
       if(i%3 === 0){
           console.log("fiz");
       } else if(i%5 ===0){
        console.log("buzz");
       }else if(i%3 === 0 && i%5 ===0 ){
        console.log("fizbuzz");
       }

    
    }
}
console.log(fizBuzz());