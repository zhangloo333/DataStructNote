/**
 * Created by leizha on 2/14/17.
 * 找出大多数,主要是 for 循环一遍,
 * intial state counter = 1; major = 0;
 * 如果和major 相同就 counter++; 如果和counter不同就counter --
 * 如果 counter 减到0的时候,就需要,重新至变成初始状态.
 *
 * 怎么想:首先数组要考虑机构性,如果过半的情况下,那他肯定是 不管连续不连续,他总比不是major的数多一个,
 * 因为他们是从 1 开始的.
 * 分为连续喝不连续
 *
 */


var marjorityElement = function (nums) {

    //counter case

    var counter = 1;
    var res = [];
    var standar = Math.floor(nums/2);
    var i =1;

    if(nums.length ==1) return 1;

    nums.sort(function (a,b) {
        return a - b;
    })

    while(i<nums.length-1) {
        if(nums[i] == nums[i-1]) {
            counter++;
        } else {
            if(count >= standar){
                res.push(nums[i-1]);
            }
            counter = 1;
        }
        i++;
    }
    return res;

};


var majorityElement1 = function(num) {
    var candidate,
        length = num.length,
        count = 1,
        i;

    candidate = num[0];

    for (i = 1; i < length; i++) {
        if (count === 0 || num[i] === candidate) {
            count++;
            candidate = num[i];
        } else {
            count--;
        }
    }

    return candidate;
};

//var test = [2,2,2,2,6,7];

// 这个是错误的,because 如果这个数没有超过一半的情况下,而是等于一半的情况下这个就不成立.
var majorityElement3 = function(nums) {
    var mj = 0;
    var cnt = 1;

    for(var i = 0; i < nums.length; i++){
        if(nums[i] === nums[mj]){
            cnt++;
        } else {
            cnt--;
        }

        if(cnt === 0){
            mj = i;
            cnt = 1;
        }
    }

    return nums[mj];
};

var test = [7,7,7,7,1,2,3,4];
console.log(majorityElement3(test));