/**
 * Created by lee on 8/23/17.
 * 1. 把奇数 和 偶数 挑出来 [] ,[] [].concat([]);
 * 2. 两个指针，互换，如果遇到
 *
 * 一个ptr 用来标记，一个prt用来移动；
 *
 *
 *  如果 even 和 cur 一个是even，一个是odd，此时交换的，cur++， even++
 *  cur 是偶数的情况下，even的指针不懂(用于标记)，cur++
 *  cur 不是偶数的情况下，even，cur同时动
 *
 *  cur的指针如果是偶数的时候，就move
 *  只有当 cur 和 even 不一样的时候才交换；
 *
 */




function eventAdd(arr) {

    var odd = 0;
    var cur = 0
    while(cur < arr.length-1){
        if(arr[odd]%2 == 0 && arr[cur]%2 !== 0) swap(arr,odd++,cur++);
        else if(arr[cur]%2 == 0) {
            cur++; //如果两个指针在同一个位置，当 遍历指针不为奇数时，就需要 只需要把 odd指针留下标记，另一个指针移动
        }else {
            odd++;
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