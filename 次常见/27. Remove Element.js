/**
 * Created by leizha on 3/1/17.

 给出制定的元素，然后inplace的删除array中和给定元素一样的元素；
 1.可以直接用js array的命令直接删除
 2.可以用两个pointer， 后一个覆盖前一个方法把逐步去除元素。

 两个ptr1,ptr2,

 ptr1 作为建立新数组的开头，
 ptr2 作为old array的循环指针

 ptr中的覆盖问题：
 27，344，283都是

 sort前后都是有大小的；

 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if(nums == undefined) return 0;
    var pt1 =0;

    for(var i = 0; i< nums.length; i++) {
        if(nums[i] != val) {
            nums[pt1] = nums[i];
            pt1++;
        }
    }
    return pt1;
};