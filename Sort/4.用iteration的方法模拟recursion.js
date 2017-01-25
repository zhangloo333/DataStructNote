/**
 * Created by lee on 1/18/17.
 *
 * 用iteration的方法来模拟 recursion 就出stack
 *
 */


function quickSort(array) {

    innerQsort(array,0,array.length-1);
    return array;
}

function innerQsort(arr,l,h){

    var stack = [];
    var top = -1;

    stack[++top] = l;
    stack[++top] = h;

    while(top >= 0){

        h = stack[top--];
        l = stack[top--];

        var newIndex = partition(arr,l,h);

        if(newIndex-1 > l){
            stack[++top] = l;
            stack[++top] = newIndex-1;
        }

        if(newIndex+1 < h){
            stack[++top] = newIndex + 1;
            stack[++top] = h;
        }
    }

    //return arr;
}

function partition(arr,l,r) {
    var pivort = arr[r];
    var i = l;
    var j = r-1;

    //while(i >= j){//错在这里不应该 i>j
    //    if(arr[i] <= pivort){
    //        i++;
    //    } else {
    //        swap(arr,i,j);
    //        j--;
    //    }
    //}

    while(i <= j){
        if(arr[i] <= pivort){
                    i++;
                } else {
                    swap(arr,i,j);
                    j--;
                }
    }
    swap(arr,i,r);
    return i;
}




function swap (array,i,j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


//  产生一个random的数字
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function unikRarray(min,max,num){
    var storge = new Set();

    while(storge.size <= num){
        storge.add(getRandom(min,max));
    }
    return Array.from(storge);
}

var sample = unikRarray(1,20,10);
console.log(sample);

var output = quickSort(sample);
console.log(output);
