/**
 * Created by leizha on 3/6/17.
 * input： array， k
 * 查找两个 是否有两个元素， 他们之间的索引相差k

 两种方法：
 方法1，for for 循环，固定扫一个array，另一个指针从 prt1 +1 -》 k 看看有没有相同的元素有的话就返回，没有的话就返回false；
 方法2，hashmap 扫一个看看有没有在 hashmap里面有的话，看看索引差的多不多k，如果在k之外就返回false
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//方法1：time issue


var containsNearbyDuplicate1 = function(nums, k) {
    if(nums == undefined) return false;

    for(var i = 0; i < nums.length; i++) {
        for(var j = i+1; j<i+k && j<nums.length; j++) {
            if(nums[i] == nums[j]) return true
        }
    }

    return false;
};

//方法而用 map的方法查看是否能catch的住

var containsNearbyDuplicate2 = function(nums, k) {
    if(nums == undefined) return false;

    var map = new Map();
    for(var i = 0; i < nums.length; i++) {
        if(map.has(nums[i]) && i-map.get(nums[i]) <= k) {
            return true
        }
        map.set(nums[i],i);
    }

    return false;
};