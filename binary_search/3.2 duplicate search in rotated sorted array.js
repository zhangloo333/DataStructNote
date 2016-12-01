/**
 * Created by lee on 11/30/16.
 */
/**如果数组里面是有重复;只有在这条上升直线的 开始区间,上升区间,最后的末尾区间;
 * Binary search 的核心是什么： 主要是你往哪里走，唯一的时刻只有一个方向是可以确定的。
 *
 * 题目：
 * 给出一个sort array，然后按照摸一个点 反转 前后的半段。
 * 给出一个input 的value 在新的array里面寻找，if find the special number的话就 返回true， otherwise return index or -1 not found
 * input: array (sort and rotated); target
 * output: index
 * corner case: empty or null array -> -1
 * 模版：
 *     找到mid 对比mid 和 target 的大小,来决定 区间的缩小和转变.
 *     这道题比较有意思的地方是: 首先决定 mid 是在哪里,因为后面上升的区间是不一样.通过舍弃某一特殊的部分来还原
 *     寻找与初始模型相同的子集来进行recursion
 * mid 比 start 大 还是小--->来判断 在第一段上升线上, 还是在第二段上升线上
 * 在第一段上升线上,如果是 target > start && target < mid end = mid 丢弃mid+第二段直线
 * 在第二段上升线上,如果 target > mid && target < end, start = mid 丢弃 第一段直线+ mid
 *
 * 如果由重复的情况怎么办:
 * 重复只可能出现在 起始点, 上升区间, 末端.
 *
 *  这些区间合并到最后只有两种情况:
 *  1. mid 和 start 之间是直线
 *  2. mid 和 start 之间有一段上升的直线.
 */
//有duplicate的情况

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

        }else if(nums[mid] < nums[start]){
            if(target>nums[mid] && target <= nums[end]){
                start = mid;
            } else {
                end = mid;
            }

        } else{
            start++;
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

// testing
var ary1 = [5,5,5,6,7,8,9,1,3,4];
var ary2 = [5,5,5,6,7,8,9,1,3,4,5];
var ary3 = [5,5,5,6,7,8,9,1,1,1,3,4];
var ary4 = [6,7,8,9,1,1,1,3,4,5,5,5];

console.log(search(ary1,5));
console.log(search(ary2,5));
console.log(search(ary3,5));
console.log(search(ary4,1));