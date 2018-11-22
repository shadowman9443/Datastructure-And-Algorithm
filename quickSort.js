

function quickSort(arr){
    if (arr.length <=1) return arr;
    let pivot = arr[arr.length];
    let i =0;
    let j = arr.length-1;
    if(arr[i]<pivot && arr[j]>pivot){
        i++;
        j--;
    }else if (arr[i]<pivot && arr[j]>pivot){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }else if(i>= j){
        pivot = arr[i];
    }
    
    let sortArr = quickSort(arr);
    return sortArr;
}
console.log(quickSort([9,6,10,3,4,1]));