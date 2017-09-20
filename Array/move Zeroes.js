/**
 * Created by lee on 8/23/17.
 */

function moveZeros(nums) {

    var record = [];

    for(var i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) record.push(nums[i]);
    }

    while (record.length < nums.length){
        record.push(0);
    }

    return record;
}


//优化1原地覆盖， 我们用一个指针来代表一个数组；k = [0,nums.size); 我们把非零 元素放在这个指针的所指位置；
function betterMoverZeros(nums) {

    var k = 0;
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[k] = nums[i];
            k++;
        }
    }

    for(var j = k; j< nums.length; j++) {
        nums[j] = 0;
    }

    return nums
}



var test = [0,1,2,34,50,0,21,0];
console.log(betterMoverZeros(test));

function sum() {
   var nums = [].slice.call(arguments);
   var output = 0;
    nums.forEach(function (e) {
        output += e;
    })
    return output;
}

console.log(sum(1,2,3,4,5));