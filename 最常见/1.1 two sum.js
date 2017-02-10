/**
 * Created by lee on 11/30/16.
 */
/**
 * 给一个array, 和 target 如果 在array里面有两个元素 相加等于 target的情况 返回true, 否则返回false
 * input: array sum
 * output: true/false
 * corner case: null input or length <= 1 -> false
 *
 * 方法1: sort + two pointer: start + end  和 target 判断大小 通过 start 或 end + 或 - 来使 他接近 target
 *      时间复杂度 n*logn (sort) two pointer (n/2 = n)
 *
 * follow up: 如果让你返回的使发的 index,怎么办 就要用到 hashmap
 * 最初怎么想 先扫一边,(key=扫的元素index value= sum - 扫的当前的元素)存在hashmap里面然后
 * 在扫一遍,如果在hashmap里面有这个与阿苏直接返回当前的index 和 key
 *
 * 走1遍: 扫到当前 把sum-current 存入 hashmap中 key = curr-index, value = sum - curren,
 * 每在存数之前 都要check current 是否在 hashmap里面. 在的output curent-index, key.
 *
 * note: 此处注意: array的sort不是对数字的,是对string其作用的。
 *
 * */

//two pointer

function checker(nums, sum) {
    if(nums == null || nums.length <2) {
        return false;
    }

    nums.sort(function(a,b) {
        return a-b;
    });

    var start = 0;
    var end = nums.length-1;

    while(start < end){
        if(nums[start]+ nums[end] == sum) {
            return true;
        } else if(nums[start]+ nums[end] > sum) {
            end--;
        }else {
            start++
        }
    }
    return false;

}

// 方法2 用hashmap to 记录这些

function twosum(array, sum) {

    var res = new Array(2);
    if(array == null || array.length < 2){
        return res;
    }

    var mymaps = new Map();

    for(var i= 0; i < array.length-1; i++) {
        if(mymaps.has(array[i])){
            res[0] = mymaps.get(array[i]);
            res[1] = i;
            return res;

        } else {
            mymaps.set(sum-array[i],i);

        }

    }

    return res;

}



var testing = [1,2,3,4,5,7,65,78];
console.log(checker(testing,14));

console.log(twosum(testing,4));

//