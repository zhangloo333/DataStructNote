/**
 * Created by leizha on 3/1/17.

 merge 两个有大小关系的array，到一个array的里面；

 arrray1, array2, meger array2 to array3

 从大到小，从小到大 比较
 sort：有大小关系；
 inplace 有 覆盖的关系- two pointer

 最好是从空间里师妹都没有的开始添加比较；

 if nums1 长度大于 nums2 的长度，
 当nums2 比较完后那么 nums1剩下应该是按照顺序的，

 如果还剩nums2，那么直接把nums2 覆盖num1的位置就行了

 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var n1L = m-1;
    var n2L = n-1;
    var nnL = m+n-1;

    while(n1L >=0 && n2L >=0) {
        if(nums1[n1L] > nums[n2L]) {
            nums1[nnL--] = nums1[n1L--];
        } else {
            nums1[nnL--] = nums2[n2L--];
        }
    }
    while(n2L >= 0){
        nums1[nnL--] = nums2[n2L--];
    }
};