/**
 * Created by leizha on 2/10/17.
 *
 * 这个题需要考虑三种情况array 的
 * 长度 == 1
 * 长度 == 3
 * 用 while 循环的时候 如果while（true），必须让终止条件成立 要考虑清楚用&& 还是|| 然后让循环break
 *
 * 题不可以用两个指针
 * prt1 = 0；
 * prt2 = 1;
 * 当prt1 和 prt2 相同的时候 prt1 动 走两部分
 * 当prt1 和 prt2 不同的时候 prt2 动 向前走两步
 *
 * 当 prt1 prt2 有任何一个超出 arra的长度的时候，prt1 和 prt2 距离超出了 1 的时候，
 * 输出 prt1。
 *
 */

// function singleNumber(arr) {
//     if(arr.length <= 1) return arr[0];
//
//     arr.sort(function (a,b) {
//         return a-b;
//     });
//
//     var ptr1 = 0;
//     var ptr2 = 1;
//     var distance = Math.abs(ptr2-prt1);
//
//     while(distance >1){
//         if(arr[ptr1] == arr[prt2]){
//             ptr1 += 2;
//         } else {
//             ptr2 += 2;
//         }
//     }
//     return ptr1;
// }

var singleNumber2 = function(arr) {
    if(arr.length <= 1) return arr[0];

    arr.sort(function (a,b) {
        return a-b;
    });

    var ptr1 = 0;
    var ptr2 = 1;
    // var distance = Math.abs(ptr2-ptr1); // 也可以把 这个自变量的等式写在上面

    while(ptr1 <= arr.length-1 && ptr2 <= arr.length-1){
        if(arr[ptr1] == arr[ptr2]){
            ptr1 += 2;
        } else if(arr[ptr1] != arr[ptr2]){
            ptr2 += 2;
        }
        if(Math.abs(ptr2-ptr1)>1){
            break;
        }
    }
    return arr[ptr1];
};


var singleNumber3 = function(arr) {
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


//更简便的方法异或
function signalNumber(array) {
    var result = 0;
    
}



var test = [1,0,1];
console.log(singleNumber2(test));