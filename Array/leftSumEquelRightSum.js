/**
 * Created by lee on 9/18/17.
 */


function leftSumRighSum(array) {
    var sum = 0;
    var leftsum = 0;
    var n = array.length;

    for(var i = 0; i < n; i++) sum += array[i];

    for(var i = 0; i < n; i++) {
        sum -= array[i];
        if(leftsum == sum) {
            return i;
        }
        leftsum += array[i];
    }

    return -1;
}

var a = [-7, 1, 5, 2, -4, 3, 0];
console.log(leftSumRighSum(a));