/**
 * Created by leizha on 3/10/17.
 *
 记住只要带除法：就要考虑到 Math.floor() 或者paresInt()

首先列出已知的条件，
 我们知道 nums[start], nums[end], num是上升的
 我们要找一个点start > end 的点，也可以说是拐点 start > start-1 start> start + 1

 当找到这个点的时候，其实就已经停止了；
 怎么loop：
 start 一直是小于 end的，
 一旦有了start 大于 end的情况，说明找到了那么点，
 mid 在大的上升区间的时候， start = mid + 1
 mid 在 后面的上升区间的时候， mid = end


 */

var findMin = function(nums) {
    var start = 0;
    var end = nums.length-1;
    var mid;

    while(start < end) {
        if(nums[start]<nums[end]) return nums[start];

        mid = parseInt((start + end)/2);

        if(nums[mid] >= nums[end]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return nums[start];

};

var a =[2,1];
console.log(findMin(a));