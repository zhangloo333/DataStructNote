/**
 * Created by leizha on 3/1/17.

 不对称性的 reverse，随便给出一个array然后让他reverse

 需要 三次reverse；
 1 reverse 整体的array；
 2 然后在reverse 前一部分，
 3 reverse 后一部分；

 此题给出长度：reverse 的长度 t
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    reverseArr(nums,0,nums.length-1);
    reverseArr(nums,0,k-1);
    reverseArr(nums,k,nums.length-1);

};

function reverseArr(nums,start,end) {
    while(start >= end){
        var temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
    }
}