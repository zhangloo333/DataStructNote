/**
 * Created by leizha on 11/29/16.
 */
/**
 * Binary search 的核心是什么： 主要是你忘哪里走，唯一的方向。你从哪里走
 *
 * 题目：
 * 给出一个sort array，然后按照摸一个点 反转 前后的半段。
 * 给出一个input 的value 在新的array里面寻找，if find the special number的话就 返回true， otherwise return index or -1 not found
 * input: array (sort and rotated); target
 * output: index
 * corner case: empty or null array -> -1
 * 模版： 找到mid 对比
 *
 * */

// 数组里面没有重复的.

function search(nums, target) {
    // corner case
    if(nums == null || nums.length == 0){
        return -1;
    }
    //函数内部的空间属性
    var start = 0;
    var end = nums.length -1;

    while(start +1 < end) {

        var mid = Math.trunc(start + (end - start)/2);

        if(nums[mid] == target) {
            return mid;
        }

        if(nums[mid] > nums[start]){
            if(target >= nums[start] && target < nums[mid]){
                end = mid;
            } else {
                start = mid;
            }

        }else{
            if(target>nums[mid] && target <= nums[end]){
                start = mid;
            } else {
                end = mid;
            }

        }
    }

    if(nums[start] == target){
        return start;
    }
    if(nums[end] == target){
        return end;
    }
    return -1;

}






//tesing function

var ary1 = [5,6,7,1,2,3,4];
console.log(ary1);
console.log(search(ary1,6));