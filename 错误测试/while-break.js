/**
 * Created by leizha on 2/10/17.
 */

function wb(array) {

    var index =0;
    while(true) {
        index += 1;

        if (index === 4) {
            break
        }

    }

    return array[index];
}

var a = [1,2,3,4,5,6];
console.log(wb(a));


var singleNumber2 = function(arr) {
    if(arr.length <= 1) return arr[0];

    arr.sort(function (a,b) {
        return a-b;
    });

    var ptr1 = 0;
    var ptr2 = 1;

    while(true){
        if(arr[ptr1] == arr[ptr2]){
            ptr1 += 2;
        } else {
            ptr2 += 2;
        }

        if(Math.abs(ptr2-ptr1)>1 || ptr1 > arr.length-1 || ptr2 > arr.length-1){
            //条件不能用&& 要不然之后等所有条件都成立了才能跳出。
            break;
        }
    }
    return arr[ptr1];
};

console.log(singleNumber2([1,0,1]));