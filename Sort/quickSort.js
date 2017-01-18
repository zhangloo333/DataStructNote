/**
 * Created by leizha on 1/17/17
 *
 * quick sort 具体是选一个 任意的对象。然后数组进行 部分的排序。
 * 然后不断的分下去。直到不能在分为止，
 * 然后把每个一般的[]在合并起来。
 */

function quickSort(data) {
    if(data.length < 1) {
        return [];
    }

    var left = [];
    var right = [];
    var pivot = data[0];

    for(var i = 1; i < data.length; i++) {
        if(data[i] < pivot) {
            left.push(data[i]);
        } else {
            right.push(data[i]);
        }
    }

    return [].concat(quickSort(left), pivot, quickSort(right));
}


var sample = [2,5,3,10,15,9,8,4,1];


var newSample = quickSort(sample);
console.log(newSample);
