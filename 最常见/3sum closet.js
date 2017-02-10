/**
 * Created by leizha on 2/9/17.

 精简版本：
 题目和 3 sum 大致是一样的：
 for lop 从第一个元素一直循环到最后，都在做一下内容：

 解题的思路：大概需要 3 个pointer 指向 current， current.next(current+1)， last element
    如 current + current.next + last < target, 就 意味着 只需要把最小的 元素向前移动一位，
       current + current.next + last > target, 就 意味着  把最大的元素， 向后退一位，
       current + current.next + last = target, 就 意味着， 合适是最接近目标的元素，直接返回就行。

 */

function threeSumC(nums, target) {
    var result = nums[0] + nums[1] + nums[nums.length-1];
    nums.sort(function (a,b) {
        return a-b;
    });

    for(var i = 0; i < nums.length-2; i++) {
        var start = i+1;
        var end = nums.length-1;

        while(start < end) {

            var sum = nums[i] + nums[start] + nums[end];
            if(sum == target){
                return sum;
            } else if(sum > target){
                end--;
            } else {
                start ++;
            }

           if(Math.abs(sum -target) < Math.abs(result -target)){
               result = sum;
           }
        }
    }

    return result;

}

var nums = [1,1,1,0];
console.log("result is " + threeSumC(nums,100));