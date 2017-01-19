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


function qSort(array,left,right) {
    if(left >= right ){
        return array;
    }
    var i = left;
    var j = right-1;
    var poviot = array[right];

    console.log("i" + i + "j" + j + "poviot" + poviot);

    while(i < j) {
        if (array[i] < poviot) {
            i++;
            console.log(i);
            console.log("povit= " + poviot);
        } else {
            // swap(array[i], array[j]);
            var temp = array[i];
            array[i] = array[right];
            array[right] = temp;
            j--;
        }
    }
    swap(array[i],poviot);
    console.log(array);
    // qSort(array,left,i-1);
    // qSort(array,i,right);
    return array;
}


function swap(a,b) {
    var temp = a;
    a = b;
    b = temp;
}



var sample = [2,5,3,10,15,9,8,4,7];

var new1 = qSort(sample,0,8);

// var newSample = quickSort(sample);
// console.log(newSample);
console.log(new1);
