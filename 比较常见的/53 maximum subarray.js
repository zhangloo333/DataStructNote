/**
 * Created by leizha on 2/17/17.
 * @param {number[]} nums
 * @return {number}
 *
 * 这一题跟股票高低的题差不多，最大的和是多少
 https://en.wikipedia.org/wiki/Maximum_subarray_problem
 这题和stock的题是非常相似的。

 应为这个题是连续的所以，当有任何数 + 前面的 还 小于 0 的时候 这时候说明这个数 decrease 的太多了。所以下一次重新计数

 cursum，sofarsum， 一个动态的保存现在状态的数

 */

var maxSubArray = function(nums) {
    if(nums.length <=1) return nums;

    var curSum = 0;
    var soFarSum = 0;

    for(var i = 0; i < nums.length; i++){
        curSum = Math.max(0, curSum+nums[i]);
        soFarSum = Math.max(curSum,soFarSum);
    }
    return soFarSum;
};

var a = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(a));