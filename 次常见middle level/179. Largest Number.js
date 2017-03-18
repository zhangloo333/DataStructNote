/**
 * Created by leizha on 3/10/17.
 给一组数字，返回组成最大的数字（用字符串表示）
 For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.

 先将数字转成字符串，然后排序，让能够组成更大数字的字符串放在前面，最后拼接成完整的字符串即可。
 有种很巧妙的方法判断两个字符串的大小关系，假设两个字符串是A，B，则比较AB和BA，若AB比BA大，说明A应该放在前面，即A<B，其他同理。
 如果
 return -1 a 在前，b在后
 return  1 a 在后面，b在前面；

 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

    var res = "";

    if (nums == undefined || nums.length == 0) {
        return res;
    }

    nums = nums.sort(function (a, b) {
        return ('' + a + b) > ('' + b + a) ? -1 : 1;
    })

    for (var i of nums) {
        res += i;
    }

    return parseInt(res) === 0 ? '0' :res;
    // console.log(nums);
}

// ([41,23,87,55,50,53,18,9,39,63,35,33,54,25,26,49,74,61,32,81,97,99,38,96,22,95,35,57,80,80,16,22,17,13,89,11,75,98,57,81,69,8,10,85,13,49,66,94,80,25,13,85,55,12,87,50,28,96,80,43,10,24,88,52,16,92,61,28,26,78,28,28,16,1,56,31,47,85,27,30,85,2,30,51,84,50,3,14,97,9,91,90,63,90,92,89,76,76,67,55]);