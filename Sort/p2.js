/**
 * Created by leizha on 1/18/17.
 */

function quicksort(array) {
    if(array.length <=1){
        return array;
    }
    innerSort(array,0,array.length-1);
    return array;
}

function innerSort(arr, L, R) {
    if(L < R){
        var index = partition(arr,L,R);
        innerSort(arr,L,index-1);
        innerSort(arr,index+1,R);
    }
}

function partition(arr,h,t) {
    var pivort = arr[t];
    var lp = h;
    var rp = t-1;

    while(lp <= rp) {
        if(arr[lp] <= pivort){
            lp++;
        } else {
            var temp = arr[lp];
            arr[lp] = arr[rp];
            arr[rp] = temp;
            rp--;
        }
    }

    var temp = arr[lp];
    arr[lp] = arr[t];
    arr[t] = temp;

    return lp;

}

var abc = [4,2];
var output = quicksort(abc);
console.log(output);