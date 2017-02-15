/**
 * Created by leizha on 2/14/17.
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

var test = [2,2,2,2,6,7];
console.log(majorityElement1(test));