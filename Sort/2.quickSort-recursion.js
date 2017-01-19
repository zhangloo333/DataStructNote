/**
 * Created by leizha on 1/18/17.
 * recursion 包含两个部分，把 一个array 跟成很小的array，同时在不断的调用自己。
 * 因为是按原地操作，就不需要返回的东西。
 */

function quickSortR (array) {
    // if(array.length <= 0){
    //     return [];
    // }
    return sort(array,0,array.length-1);


}


function partition(array,l,r) {
    // console.log(array);

    var pivot = array[r];
    var i = (l -1);

    for(var j = l; j <= r -1; j++){
        if(array[j] <= pivot){
            i++;
            // swap(array[i],array[j]);
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }
    }
    // swap(array[i+1], array[r]);
    var temp = array[i+1];
    array[i+1] = array[r];
    array[r] = temp;

    return i+1;

}

function partition2(arr, l, r) {
    var pivort = arr[r];
    var i = l;
    var j = r-1;

    while(i <= j){
        if(arr[i] <= pivort){
            i++;
        } else {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    var temp1 = arr[i];
    arr[i] = arr[r];
    arr[r] = temp1;

    return i;
}

function sort(array, low, high) {

    if(low < high){
        var pi = partition2(array, low, high);

        // partition(array,low,pi-1);
        // partition(array,pi+1,high);

        //这一点是引起错误的根源。 不是在分，sort的重复

        sort(array,low,pi-1);
        sort(array,pi+1,high);
    }

    return array;
}



function swap(a,b) {
    var temp = a;
    a = b;
    b = temp;

}// swap 函数没有起作用。

var abv = [3,4,2,5,6,7,8,1,9,3];

// swap(a[0],a[1]);
// quickSortR(a);
var start = new Date().getTime();
// var b = sort(abv,0,abv.length-1);
var b = quickSortR(abv);
var end = new Date().getTime();
var c = end-start
console.log(c);
console.log(b);