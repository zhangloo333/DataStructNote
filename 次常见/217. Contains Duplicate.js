/**
 * Created by leizha on 3/1/17.
 他只要没说inplace，就用而外的空间来考虑

 判断一个array是否是duplicate的array。
 如果每个element都不一样返回 false，如果有一个单词出现两次的情况下
 都要返回true
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(nums === undefined) return false;

    var mapping = new Set();
    for(var num of nums) {
        if(mapping.has(num)){
            return true;
        }
        mapping.add(num);
    }

    return false;
};