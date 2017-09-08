/**
 * Created by lee on 8/31/17.
 */


function maxSum(nums) {
    var maxout = nums[0];
    var sumCur = nums[0];
    var rec = [];
    for(var i = 1; i < nums.length; ++i) {

        sumCur = Math.max(sumCur+nums[i],nums[i]);
        maxout = Math.max(sumCur,maxout);
    }

    console.log(rec);
    return maxout;
}

var t = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSum(t));