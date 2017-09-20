/**
 * Created by lee on 9/13/17.
 *
 * 给定一个整形的数组 和 一个数字 s， 找到数组中的最短的一个连续子数组，🙆
 * 使得连续子数组的数字 和 sum >= s, 返回这个最短的连续子数组的长度值
 *
 * 给定 [2,3,1,2,4,3] s = 7  答案为[4,3] 返回 2
 */




var miniSubArrayLen = function(s, nums) {
    var l = 0; r = -1;
    var sum = 0;
    var res = nums.length + 1;

    while(l < nums.length) {
        if(r+1 < nums.length && sum < s) {
            sum += nums[++r];
        } else {
            sum -= nums[l++];
        }

        if(sum > s) {
            res = Math.min(res,r-l+1);
        }
    }
    if(res == num.length +1) return 0;
    return res;
}