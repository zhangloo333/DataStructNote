/**
 * Created by leizha on 1/18/17.
 */

function partition(arr, low, high) {

    var pivort = arr[high];
    var i = low - 1;
    for(var j = low; j < high -1; j++) {
        if(arr[j] <= pivort) {
            i++;

            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    var temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;

    return i + 1;
}


function sort(arr, low, high) {
    if(low < high) {
        var pi = partition(arr,low,high);
        sort(arr,low,pi-1);
        sort(arr,pi+1,high);
    }

    // return arr;
}

var abv = [3,4,2,5,6,7,8,1];
var n = abv.length;
var b = sort(abv,0,n-1);
sort(abv,0,n-1);
console.log(abv);