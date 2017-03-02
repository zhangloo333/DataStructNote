/**
 * Created by leizha on 3/1/17.

 给出一个duplicate array 然后找出 移除相同的元素。 inplace的操作
 return一个新的长度
 Given input array nums = [1,1,2],
 Your function should return length = 2

 如果相等就用后面覆盖前面的
 如果是sort的情况下，就是前后有大小关系，

 变化的条件是什么，只有变化了才动作。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums == undefined) return 0;

    var ptr1 = 1;
    for(var i = 1; i< nums.length; ++i){
        if(nums[i] != nums[i-1]){
            nums[ptr1++] = nums[i];
        }
    }

    return ptr1

};

removeDuplicates()

