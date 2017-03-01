/**
 * Created by lee on 2/28/17.
 给出一个数组 找出0把它排在最后，不移动原来的顺序；
 两种方法：
    方法1 交换的方法
    方法2 找出不为0的数把它放在最前面，如果把余下的都补零: 怎么把数挑出来排序；


 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var pt = 0;
    for(var num of nums) {
        if(num != 0) {
            nums[pt++] = num;
        }
    }
    while(pt<nums.length){
        nums[pt++]=0;
    }
    console.log(nums);
};

var moveZeroes2 = function(nums) {
    var pt = 0;
    for(var i = 0; i < nums.length; i++) {
        // if(nums[i] != 0){
        //     nums[pt] = nums[i];
        //     nums[i] = 0;
        //     pt++;
        // }//如果只有一个元素就给至0了这样不行；

        if(nums[i] != 0){
            var temp = nums[pt];
            nums[pt] = nums[i];
            nums[i] = temp;
            pt++;

        }
    }
    console.log(nums);
};


var nums = [0, 1, 0, 3, 12];
moveZeroes2(nums);
// moveZeroes1(nums);