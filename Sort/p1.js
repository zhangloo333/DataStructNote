/**
 * Created by leizha on 1/18/17.
 */


function quicksort(array) {

    return innerQsort(array,0,array.length-1);
}

function innerQsort(arr,L,R) {
    if(L < R){
        var nIndex = partition(arr,L,R);

        innerQsort(arr,L,nIndex-1);
        innerQsort(arr,nIndex+1,R);
    }

    return arr;
}

function partition(arr,head,tail) {

    var pivort = arr[tail];
    // var lPter = arr[head];// 这一点写错了
    // var rPter = arr[tail-1];// 这一点写错了

    var lPter = head;
    var rPter = tail-1;


    while(lPter <= rPter){
        if(arr[lPter] <= pivort){
            lPter++;
        } else {
            var temp = arr[lPter];
            arr[lPter] = arr[rPter];
            arr[rPter] = temp;

            rPter--;
        }
    }

    var temp1 = arr[lPter];
    arr[lPter] = arr[tail];
    arr[tail] = temp1;

    return lPter;
}

var abc = [3,4,2,5,6,7,8,1,9,3];
var output = quicksort(abc);
console.log(output);
