/**
 * Created by leizha on 12/2/16.
 * given an integer array,找出一个连续的subarray 每个元素相加 和最大 retrun 这个最大的sum
 * 这个subarray里面 at lease 1 element
 *
 * input : array
 * return: sum / subarray 这个序列
 * couner case: 如果null input的情况下， 返回的是一个最小的number.min value
 * subarray： 用来个pointer就可以确定，一个头，一个尾部
 *
 * 首先解题的时候：
 *  先从最笨的方法来，
 *  看看从最笨的方法的时候，有没有重复的工作，如果有的话，我门省略了
 *  看看有没有一些没有意义的工作，我们明知道结果而且还是去做了。（如果发现的话，就可以把它省略）
 *
 *  每次复位的情况下
 *  poniter 1 指向 array【0】
 *  pointer 2 指向 array[0] 跟随pointer1复位
 *
 *
 *  如果从array【0】开始遍历的情况下sum 该开始就是个负数，then, pointer 1 向后移动一位 pointer2复位
 *  一旦 pointer2 在某一个位置上 sum<0 的情况下，这个位同时标记这个位，让pointer 1重新 到位置。pointer2 复位
 *
 *  直到pointer1 走到末尾。
 *
 *  currentSUm = currentSum > 0? currentSum + arr[i] : arr[i]
 *  globalMax = currentSum > globalMax ? currentSum : globalMax
 *
 */

function maxSubarray(array) {
    if(array == null || array.length ==0) {
        return Number.MIN_VALUE;
    }

    var gSum=0;
    var tSum =0;
    var header;

    for(var i =0; i < array.length; i++) {
        if(array[i]>0){
            header =i;
            break;
        }
    }

    for(var i = header; i < array.length; i++) {
        tSum += array[i];
        if(tSum < 0){
            tSum = 0;
        }
            gSum = Math.max(tSum, gSum);
    }

    return gSum;
}

function maxSarray2(array) {
    if (array == null || array.length == 0) {
        return Number.MIN_VALUE;
    }

    var curSum = array[0];
    var MaxSum = array[0];

    for (var i = 1; i < array.length; i++) {
        curSum = Math.max(array[i], array[i] + curSum);
        MaxSum = Math.max(curSum, MaxSum);
    }
    return MaxSum;
}

var num1 = [-2,1,-3,4,-1,2,1,-5,4];

// 使用欢动窗口开看看， 寻找之间存在的最大的 sum 的和
function max3(arr) {
    var l = 0, r = 0;
    var sum = arr[0];
    var out = arr[0];
    var board = [];

    while(l < arr.length && r < arr.length) {
        if(sum < 0) {
            l++;
            r = l;
            out = Math.max(out,arr[l]);
            sum = arr[l];
            console.log(out);
        } else{
            if(r+1 < arr.length){
                sum += arr[++r];
                var temp = Math.max(out,sum);
                if(temp > out) {
                    board.pop();
                    board.push([l,r,temp]);
                    out = temp;
                }
                console.log('out2', out);
            } else break;

        }
    }
    return board;
}



// console.log(maxSubarray(num1));
console.log(maxSarray2(num1));
console.log(max3(num1));

