function mergeSortedArray(arra,arrb){
    let resultarr =[];
    let i = 0;
    let j = 0;
    while (i<arra.length && j < arrb.length) {
       
        if (arra[i] > arrb[j]) {
            resultarr.push(arrb[j]);
            j++;
            
        } else if (arra[i] < arrb[j]) {
            resultarr.push(arra[i]);
            i++;
            
        } 
    }
     while (i < arra.length ) {

       
             resultarr.push(arra[i]);
          
             i++;

     }
      while (j < arrb.length) {

       
              resultarr.push(arrb[j]);
            

              j++;

         
      }
    return resultarr;
}
function mergeSort(arr){
    if (arr.length <=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
    let sortArr = mergeSortedArray(left, right);
    return sortArr;
}
console.log(mergeSort([9,6,10,3,4,1]));