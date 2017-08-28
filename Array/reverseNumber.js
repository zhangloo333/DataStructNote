/**
 * Created by lee on 8/25/17.
 */


function reverse(nums) {
    if(nums < 10 && nums >0) return nums;
    var flag = 1;
    var s = "";
    var result;
    if(nums < 0) {
        nums = nums * (-1);
        flag = -1;
    }
        s = nums.toString();

    result = parseInt(s.split('').reverse().join(''));

    if(flag == 1) return result;
    else return -1*result;
}

var test = -123456;
console.log(reverse(test));


function reverse1(nums) {
    if(nums < 10 && nums > -10) return nums;
    else if (nums > Number.MAX_VALUE || nums < -Number.MAX_VALUE) {
        return 0;
    }

    var sign = 1;
    var bit = 0;
    var output = "";

    if(nums < 0) {
        sign *= -1;
        nums = Math.abs(nums);
    }

    while(nums>0){
        output += nums%10;
        nums = parseInt(nums/10);
    }

    var trueOutput = parseInt(output) * sign;

    // if(trueOutput > Number.MAX_VALUE || trueOutput < Number.MIN_VALUE) {
    //     return 0;
    // }

    return trueOutput;
}

var test1 = 123456;
console.log(reverse1(test1));