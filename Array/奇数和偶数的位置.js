/**
 * Created by lee on 8/23/17.
 * 1. 把奇数 和 偶数 挑出来 [] ,[] [].concat([]);
 * 2. 两个指针，互换，如果遇到
 *  如果 even 和 cur 一个是even，一个是odd，此时是不要交换的，cur++， even++
 *  cur 是偶数的情况下，even的指针不懂，cur++
 *  cur 不是偶数的情况下，even，cur同时动
 *
 *
 */




function eventAdd(arr) {

    var even = 0;
    var cur = 0
    while(cur < arr.length-1){
        if(arr[even]%2 == 0 && arr[cur]%2 !== 0) swap(arr,even++,cur++);
        else if(arr[cur]%2 == 0) {
            cur++;
        }else {
            even++;
            cur++;
        }
    }

    return arr;
}

function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}

var test = [1,2,5,6,9,4];

console.log(eventAdd(test));