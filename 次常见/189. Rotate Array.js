/**
 * Created by leizha on 3/1/17.
 Rotate an array of n elements to the right by k steps.

 For example, with n = 7 and k = 3,

 the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

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